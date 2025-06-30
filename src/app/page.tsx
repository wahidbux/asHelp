"use client";
import React, { useState, useEffect } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import VariableProximity from "@/components/VariableProximity";
import GradientGlowButton from '@/components/button';
import Navbar from '@/components/navbar1';
import Button2 from '@/components/button2';
import Particles from '@/components/Backgrounds/Particles';
import { User, FileText, UploadCloud, CreditCard } from 'lucide-react';
import Upload from '@/components/upload';
import Aurora from '@/components/Backgrounds/Aurora';
import { useRef } from 'react';
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import TailwindConnectButton from "@/components/button";
import { useRouter } from "next/navigation";
import { MarqueeDemo } from "@/components/marqueewrap";
import TestimonialMarquee from "@/components/mwrap"
import { NavbarDemo } from "@/components/nav";
import { PaymentOptionsOverlay } from '@/components/payment'

/*
export default function BackgroundBoxesDemo() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide main content after scrolling 100px
  const mainContentOpacity = scrollY > 100 ? 0 : 1;
  const mainContentTransform = scrollY > 100 ? 'translateY(-50px)' : 'translateY(0)';

  return (
    <div className="relative bg-slate-900">
      <NavbarDemo />
      
      {/* Aurora as background *//*}
      <div className="fixed inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      {/* Main content centered - positioned fixed to stay in center *//*}
      <div 
        className="fixed inset-0 z-20 flex flex-col items-center justify-center transition-all duration-500 ease-in-out"
        style={{
          opacity: mainContentOpacity,
          transform: mainContentTransform
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 max-w-3xl mx-auto text-center sm:text-left">
          <h1 className="text-3xl sm:text-6xl font-sans text-white font-semibold">Want help in</h1>
          <div className="mt-2 sm:mt-0">
            <ContainerTextFlip
              words={["Projects", "assignments", "Termwork", "PPT"]}
              className="text-2xl sm:text-4xl"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 sm:mt-8 w-full px-4">
          <TailwindConnectButton />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      {/* ContainerScroll in normal document flow for scrolling *//*}
      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl font-semibold text-black dark:text-white">
                
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Order now !
                </span>
              </h2>
            </>
          }
        >
          <img
            src={`/linear.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        
      </div>
      <TestimonialMarquee/>
    </div>
  );
}
*/
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <PaymentOptionsOverlay />
    </main>
  );
}

