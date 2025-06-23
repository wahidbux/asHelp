"use client";
import React, { useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import BlurText from "@/components/BlurText";
import GradientGlowButton from '@/components/button';
import Navbar from '@/components/navbar1';
import Button2 from '@/components/button2';
import Particles from '@/components/Backgrounds/Particles';
import { User, FileText, UploadCloud, CreditCard } from 'lucide-react';
import Upload from '@/components/upload';


export default function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <Navbar />
      
      <BlurText
        text="Want help with assignments ?"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-6xl text-gray-100 font-bold text-shadow-glow"
      />
      <br />
      <GradientGlowButton href="/sign" label="Get Started " />

    </div>
  );
}

