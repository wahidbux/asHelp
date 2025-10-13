"use client";
import React from "react";
import Link from "next/link";
import { Boxes } from "@/components/ui/background-boxes";
import SignupFormDemo from "@/components/signup";
import { AnimatePresence } from "framer-motion";
import SignupPageSkeleton from "@/components/skeletons/signinPageSkeleton";

export default function SignupPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center p-4">
      {/* Loading Screen --- UPDATED SECTION */}
      <AnimatePresence>{isLoading && <SignupPageSkeleton />}</AnimatePresence>

      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      {/* 🟡 Back Button — fixed at top-left */}
     {!isLoading && (
      <Link
  href="/"
  className="absolute top-6 left-6 z-40 flex items-center justify-center px-5 py-2 
             bg-[#0a0a0a] border border-gray-700/50 text-white rounded-md
             shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.6)]
             hover:shadow-[0_0_15px_rgba(255,255,255,0.6),0_4px_20px_rgba(255,255,255,0.3)]
             hover:border-white/40
             hover:bg-[#111111]
             transition-all duration-300 ease-out"
>
  <img
    src="/left-arrow.png"
    alt="Back"
    className="w-6 h-6 invert opacity-90 hover:opacity-100 transition-opacity duration-200"
  />
</Link>

      )}

      <div
        className={`relative z-30 transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {!isLoading && <SignupFormDemo />}
      </div>
    </div>
  );
}
