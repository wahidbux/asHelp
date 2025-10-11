'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText, Loader2, Sparkles, Brain } from 'lucide-react';
import { exportToPDF, exportToWord } from '@/lib/document-utils';


import Aurora from '@/components/Backgrounds/Aurora';

export default function AIGenerator() {
  const [formData, setFormData] = useState({
    topic: '',
    subject: '',
    wordCount: '1000',
    level: 'undergraduate',
    requirements: ''
  });
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleGenerate = async () => {
    // Check usage limits
    const savedUsage = localStorage.getItem('ai-generator-usage');
    const usage = savedUsage ? JSON.parse(savedUsage) : { geminiUsage: 0, geminiLimit: 100 };
    
    if (usage.geminiUsage >= usage.geminiLimit) {
      alert('Daily limit reached! You have generated ' + usage.geminiLimit + ' assignments today. Please try again tomorrow.');
      return;
    }
    
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-assignment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      
      // Clean the content to remove any CSS and HTML that might affect layout
      const cleanContent = data.content
        .replace(/```html/gi, '')
        .replace(/```/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<link[^>]*>/gi, '')
        .replace(/<meta[^>]*>/gi, '')
        .replace(/<html[^>]*>/gi, '')
        .replace(/<\/html>/gi, '')
        .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
        .replace(/<body[^>]*>/gi, '')
        .replace(/<\/body>/gi, '');
      setGeneratedContent(cleanContent);
      
      // Update usage count
      const newUsage = { ...usage, geminiUsage: usage.geminiUsage + 1 };
      localStorage.setItem('ai-generator-usage', JSON.stringify(newUsage));
    } catch (error) {
      alert('Generation failed: ' + (error as Error).message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExportToPDF = () => {
    // Check export limits
    const savedUsage = localStorage.getItem('ai-generator-usage');
    const usage = savedUsage ? JSON.parse(savedUsage) : { exportsToday: 0, exportLimit: 50 };
    
    if (usage.exportsToday >= usage.exportLimit) {
      alert('Daily export limit reached! You have downloaded ' + usage.exportLimit + ' documents today. Please try again tomorrow.');
      return;
    }
    
    setIsExporting(true);
    const success = exportToPDF(generatedContent, formData.topic || 'assignment');
    if (!success) alert('PDF export failed');
    
    // Update export count
    const newUsage = { ...usage, exportsToday: usage.exportsToday + 1 };
    localStorage.setItem('ai-generator-usage', JSON.stringify(newUsage));
    
    setIsExporting(false);
  };

  const handleExportToWord = async () => {
    // Check export limits
    const savedUsage = localStorage.getItem('ai-generator-usage');
    const usage = savedUsage ? JSON.parse(savedUsage) : { exportsToday: 0, exportLimit: 50 };
    
    if (usage.exportsToday >= usage.exportLimit) {
      alert('Daily export limit reached! You have downloaded ' + usage.exportLimit + ' documents today. Please try again tomorrow.');
      return;
    }
    
    setIsExporting(true);
    try {
      const response = await fetch('/api/export-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: generatedContent,
          format: 'docx',
          title: formData.topic || 'assignment'
        })
      });
      
      const data = await response.json();
      
      exportToWord(generatedContent, formData.topic || 'assignment');
      
      // Update export count
      const newUsage = { ...usage, exportsToday: usage.exportsToday + 1 };
      localStorage.setItem('ai-generator-usage', JSON.stringify(newUsage));
    } catch (error) {
      alert('Word export failed: ' + (error as Error).message);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="relative bg-slate-900 min-h-screen">
      {/* Simple Header */}
      <div className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-purple-400" />
              <span className="text-white font-semibold text-lg">AsHelp AI</span>
            </div>
            <a href="/" className="text-white hover:text-purple-400 transition-colors">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
      
      {/* Aurora Background */}
      <div className="fixed inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="h-8 w-8 text-purple-400" />
              <h1 className="text-4xl md:text-6xl font-bold text-white/90">
                AI Assignment Generator
              </h1>
              <Sparkles className="h-8 w-8 text-pink-400" />
            </div>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Generate professional academic assignments with AI. Get structured, well-formatted content in seconds.
            </p>
          </div>
          

          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white/90 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Assignment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="topic" className="text-white/90">Topic *</Label>
                  <Input
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                    placeholder="Enter assignment topic"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white/90">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="e.g., Computer Science, History"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="level" className="text-white/90">Academic Level</Label>
                    <Select value={formData.level} onValueChange={(value) => setFormData({...formData, level: value})}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="wordCount" className="text-white/90">Word Count</Label>
                    <Select value={formData.wordCount} onValueChange={(value) => setFormData({...formData, wordCount: value})}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500">500 words</SelectItem>
                        <SelectItem value="1000">1000 words</SelectItem>
                        <SelectItem value="1500">1500 words</SelectItem>
                        <SelectItem value="2000">2000 words</SelectItem>
                        <SelectItem value="3000">3000 words</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="requirements" className="text-white/90">Additional Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    placeholder="Any specific requirements or instructions"
                    rows={3}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                
                <Button 
                  onClick={handleGenerate} 
                  disabled={!formData.topic || !formData.subject || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Generating Assignment...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Assignment
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
            
            {/* Generated Content */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white/90 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Generated Content
                  </CardTitle>
                  {generatedContent && (
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleExportToPDF} 
                        disabled={isExporting}
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        {isExporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                        PDF
                      </Button>
                      <Button 
                        onClick={handleExportToWord} 
                        disabled={isExporting}
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        {isExporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                        Word
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {generatedContent ? (
                  <div 
                    className="max-w-none bg-white/5 p-6 rounded-lg border border-white/10 max-h-96 overflow-y-auto text-white"
                    dangerouslySetInnerHTML={{ __html: generatedContent }}
                  />
                ) : (
                  <div className="text-center text-white/90 py-16">
                    <FileText className="mx-auto h-16 w-16 mb-4 opacity-50" />
                    <p className="text-lg">Generated assignment will appear here</p>
                    <p className="text-sm mt-2">Fill in the details and click generate to start</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          

        </div>
      </div>
    </div>
  );
}