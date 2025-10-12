import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function fetchRelevantImage(query: string) {
  try {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;
    if (!accessKey) {
      console.log('Unsplash API key not configured');
      return null;
    }

    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&orientation=landscape&per_page=1&order_by=relevant`,
      {
        headers: {
          'Authorization': `Client-ID ${accessKey}`,
        },
      }
    );

    if (!response.ok) {
      console.error('Unsplash API error:', response.status);
      return null;
    }

    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      const image = data.results[0];
      return {
        url: image.urls.regular,
        alt: image.alt_description || query,
        downloadUrl: image.urls.full
      };
    }
  } catch (error) {
    console.error('Image fetch failed:', error);
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const { topic, subject, wordCount, level, requirements, includeImages = true, imageQuery } = await req.json();

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
    
    ${includeImages ? `Also suggest 1 relevant image search term that would enhance this assignment. Use the main topic "${topic}" as the search term unless a more specific term would be better. Add this term as a JSON array in an HTML comment at the very end: <!-- ["term1"] -->` : ''}
    
    Format the response as structured HTML with proper headings, paragraphs, and formatting.`;

    const result = await model.generateContent(prompt);
    let content = result.response.text();
    
    // Extract image suggestions and fetch images
    if (includeImages) {
      const imageTermsMatch = content.match(/<!--\s*\[([^\]]+)\]\s*-->/s);
      if (imageTermsMatch) {
        try {
          const imageTerms = JSON.parse(`[${imageTermsMatch[1]}]`);
          const images = [];
          
          // Use user's image query, or topic as fallback
          const searchTerm = imageQuery || topic;
          const image = await fetchRelevantImage(searchTerm);
          if (image) {
            const sections = content.split(/<h[2-3][^>]*>/i);
            if (sections.length > 1) {
              sections[1] = sections[1] + `
<div class="image-container" style="margin: 20px 0; text-align: center;">
  <img src="${image.url}" alt="${image.alt}" style="max-width: 100%; height: auto; border-radius: 8px;" data-download-url="${image.downloadUrl}" />
</div>`;
              
              let reconstructed = sections[0];
              for (let i = 1; i < sections.length; i++) {
                reconstructed += '<h2>' + sections[i];
              }
              content = reconstructed;
            }
          }
          
          // Remove the image suggestions comment
          content = content.replace(/<!--\s*\[.*?\]\s*-->/s, '');
        } catch (e) {
          console.error('Failed to process image suggestions:', e);
        }
      }
    }

    return NextResponse.json({ content, topic, subject });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Assignment generation failed' }, { status: 500 });
  }
}