# College Assignment Help Platform

A web-based platform where college students can upload assignment PDFs, and verified toppers complete them for a fee.  
The platform uses Supabase for backend services and Next.js with TypeScript for the frontend, following a scalable architecture with Turbopack and the App Router.

---

## Overview

The goal of this platform is to simplify academic help exchange within college communities.  
Students can post their assignment requests, and verified toppers can complete them efficiently for a fair price.  
Payments, authentication, and file management are powered through Supabase.

---

## Tech Stack

| Area | Technology |
|------|-------------|
| Frontend | Next.js (TypeScript, App Router, Turbopack) |
| Backend | Supabase (Database, Auth, Storage) |
| Hosting | Vercel / Supabase Hosting |
| Styling | Tailwind CSS |
| State Management | React Context / Zustand (planned) |
| Authentication | Supabase Auth (Email & OAuth support) |

---

## Installation and Setup

### 1. Clone the repository
```
git clone https://github.com/yourusername/college-assignment-platform.git
cd college-assignment-platform
```
###2. Install dependencies
```
npm install
```
###3. Set up Supabase

-Go to the Supabase Dashboard and create a new project.
-Navigate to Project Settings → API and copy your Project URL and anon/public API key.
-In the project root, create a .env.local file and add:
```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_URL.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```
(Optional) In the Supabase dashboard:
Go to Authentication → Providers and enable Email or Google sign-in.
Go to Storage and create a bucket named assignments for file uploads.
Go to Table Editor and create a table named assignments with columns:
id: uuid (Primary key, default: uuid_generate_v4())
student_id: text
title: text
description: text
file_url: text
status: text (default: 'pending')
created_at: timestamp (default: now())

###5. Run the development server
```
npm run dev
```
###6. Visit the application
```
http://localhost:3000
```

##Folder Structure
```
src/
 ├─ app/
 │   ├─ page.tsx
 │   ├─ layout.tsx
 │   └─ (auth)/
 │       ├─ login/page.tsx
 │       └─ register/page.tsx
 ├─ components/
 │   ├─ Navbar.tsx
 │   ├─ UploadForm.tsx
 │   └─ AssignmentCard.tsx
 ├─ lib/
 │   └─ supabaseClient.ts
 ├─ styles/
 │   └─ globals.css

```
License:

MIT License © 2025 Agastya
