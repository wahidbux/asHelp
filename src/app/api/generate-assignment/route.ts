import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { topic, subject, wordCount, level, requirements } = await req.json();

    if (!topic || !subject) {
      return NextResponse.json({ error: 'Topic and subject are required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    const prompt = `Generate a comprehensive academic assignment on "${topic}" for ${subject} at ${level || 'undergraduate'} level. 
    Target word count: ${wordCount || 1000} words.
    ${requirements ? `Additional requirements: ${requirements}` : ''}
    
    Structure the assignment with:
    1. Title
    2. Introduction
    3. Main content with proper headings
    4. Conclusion
    5. References (if applicable)
    
    Format the response as structured HTML with proper headings, paragraphs, and formatting.`;

    const result = await model.generateContent(prompt);
    const content = result.response.text();

    return NextResponse.json({ content, topic, subject });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Assignment generation failed' }, { status: 500 });
  }
}