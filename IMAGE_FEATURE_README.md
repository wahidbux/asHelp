# Image Integration Feature

## Overview
The AsHelp AI Assignment Generator now supports automatic image integration using the Unsplash API. This feature enhances assignments with relevant, high-quality images that are automatically embedded in both the web display and exported documents.

## Setup

1. **Get Unsplash API Key**
   - Visit [Unsplash Developers](https://unsplash.com/developers)
   - Create a new application
   - Copy your Access Key

2. **Configure Environment**
   - Add your Unsplash Access Key to `.env.local`:
   ```env
   UNSPLASH_ACCESS_KEY=your_actual_unsplash_access_key_here
   ```

## Features

### Automatic Image Selection
- AI analyzes the assignment topic and suggests relevant image search terms
- Fetches high-quality, relevant images from Unsplash
- Automatically places images in appropriate sections of the assignment

### Export Support
- **PDF Export**: Images are embedded directly in the PDF with proper scaling
- **Word Export**: Image placeholders with descriptions (RTF format limitation)

### User Control
- Checkbox option to enable/disable image inclusion
- Images are only fetched when explicitly enabled by the user

## How It Works

1. **Generation Phase**:
   - AI generates assignment content
   - AI suggests 2-3 relevant image search terms
   - System fetches images from Unsplash API
   - Images are embedded in HTML content

2. **Display Phase**:
   - Images are displayed in the web interface
   - Proper attribution is shown for each image

3. **Export Phase**:
   - PDF: Images are converted to base64 and embedded
   - Word: Image placeholders with descriptions are added

## Technical Implementation

### API Endpoints
- `/api/fetch-image` - Fetches images from Unsplash
- `/api/generate-assignment` - Enhanced to include image integration

### Key Components
- `document-utils.ts` - Updated export functions with image support
- Assignment generation with intelligent image placement
- Async image processing for exports

## Usage Limits
- Respects Unsplash API rate limits
- Images are fetched only when needed
- Fallback gracefully when images are unavailable

## Attribution
All images include proper Unsplash attribution as required by their terms of service.