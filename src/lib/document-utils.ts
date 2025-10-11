import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';

export const exportToPDF = (content: string, filename: string = 'assignment') => {
  try {
    const pdf = new jsPDF();
    
    // Parse HTML and extract structured content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    
    let yPosition = 20;
    const pageHeight = pdf.internal.pageSize.height;
    const lineHeight = 6;
    const margin = 15;
    
    // Process each paragraph and heading
    const elements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6, p, div, li');
    
    elements.forEach((element) => {
      const text = element.textContent?.trim();
      if (!text) return;
      
      // Set font size based on element type
      if (element.tagName.match(/^H[1-6]$/)) {
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'bold');
      } else {
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'normal');
      }
      
      const lines = pdf.splitTextToSize(text, 180);
      
      // Check if we need a new page
      if (yPosition + (lines.length * lineHeight) > pageHeight - 20) {
        pdf.addPage();
        yPosition = 20;
      }
      
      // Add spacing before headings
      if (element.tagName.match(/^H[1-6]$/) && yPosition > 20) {
        yPosition += 5;
      }
      
      lines.forEach((line: string) => {
        pdf.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
      
      // Add spacing after paragraphs
      yPosition += 3;
    });
    
    pdf.save(`${filename}.pdf`);
    return true;
  } catch (error) {
    console.error('PDF export failed:', error);
    return false;
  }
};

export const exportToWord = (content: string, filename: string = 'assignment') => {
  try {
    // Parse HTML and create structured RTF
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    
    let rtfContent = '{\\rtf1\\ansi\\deff0 {\\fonttbl {\\f0 Times New Roman;}{\\f1 Arial;}} ';
    
    // Process each element
    const elements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6, p, div, li');
    
    elements.forEach((element) => {
      const text = element.textContent?.trim();
      if (!text) return;
      
      // Clean text
      const cleanText = text
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\\/g, '\\\\')
        .replace(/{/g, '\\{')
        .replace(/}/g, '\\}');
      
      // Format based on element type
      if (element.tagName.match(/^H[1-6]$/)) {
        // Heading: bold, larger font
        rtfContent += `\\f1\\fs28\\b ${cleanText}\\b0\\fs24\\par\\par `;
      } else {
        // Paragraph: normal text
        rtfContent += `\\f0\\fs24 ${cleanText}\\par\\par `;
      }
    });
    
    rtfContent += '}';
    
    const blob = new Blob([rtfContent], { type: 'application/rtf' });
    saveAs(blob, `${filename}.rtf`);
    return true;
  } catch (error) {
    console.error('Word export failed:', error);
    return false;
  }
};

export const formatContentForDisplay = (content: string): string => {
  // Basic HTML formatting for better display
  return content
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
};