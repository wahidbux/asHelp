"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface GradientIconButtonProps extends React.ComponentProps<typeof Link> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const GradientIconButton = React.forwardRef<
  React.ElementRef<typeof Link>,
  GradientIconButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      className={cn(
        // use group so children can respond to hover
        // reserve extra padding on both sides so arrows don't overlap the text
        "animated-button group relative flex items-center gap-2 pl-12 pr-12 py-4 border-4 border-transparent text-base bg-inherit rounded-[100px] font-semibold text-white cursor-pointer overflow-hidden",
        // base shadow (kept subtle)
        "shadow-[0_0_0_2px_#622bff]",
        className
      )}
      {...props}
    >
      {/* arr-2 SVG - Left arrow: start translated left and invisible, then slide in */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "arr-2 absolute w-6 h-6 z-[9] fill-white left-4 top-1/2 -translate-y-1/2",
          // start offscreen to the left and invisible (we keep translate for slide-in)
          "-translate-x-[150%] opacity-0",
          // animate on group hover
          "group-hover:translate-x-0 group-hover:opacity-100",
          // always transition smoothly
          "transition-all duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        )}
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      {/* Text */}
      <span
        className={cn(
          "text relative z-[1]",
          "group-hover:translate-x-3",
          "transition-all duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        )}
      >
        {children}
      </span>

      {/* Circle element (kept as decorative) */}
      <span
        className={cn(
          "circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full opacity-0",
          "group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100",
          "bg-[#622bff] transition-all duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        )}
      />

      {/* arr-1 SVG - Right arrow: visible initially, slide out on hover */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "arr-1 absolute w-6 h-6 z-[9] fill-white right-4 top-1/2 -translate-y-1/2",
          "group-hover:translate-x-[150%] group-hover:opacity-0",
          "transition-all duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        )}
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      {/* Hover-driven background fill using group */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[100px] bg-inherit group-hover:bg-[#622bff] transition-colors duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
      />

    </Link>
  );
});

GradientIconButton.displayName = "GradientIconButton";

export { GradientIconButton };