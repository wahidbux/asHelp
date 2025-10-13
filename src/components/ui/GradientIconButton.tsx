"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const gradientIconButtonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
        secondary: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white",
        success: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white",
      },
      size: {
        default: "py-3 px-6 text-base sm:py-4 sm:px-10 sm:text-lg",
        sm: "py-2 px-4 text-sm",
        lg: "py-4 px-8 text-lg sm:py-5 sm:px-12 sm:text-xl",
      },
      icon: {
        none: "",
        "arrow-left": "",
        "shopping-cart": "",
        both: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      icon: "both",
    },
  }
);

export interface GradientIconButtonProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof gradientIconButtonVariants> {
  href: string;
  children: React.ReactNode;
}

const GradientIconButton = React.forwardRef<
  React.ElementRef<typeof Link>,
  GradientIconButtonProps
>(({ className, variant, size, icon, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      className={cn(gradientIconButtonVariants({ variant, size, icon, className }))}
      {...props}
    >
      {(icon === "arrow-left" || icon === "both") && (
        <svg 
          width="20" 
          height="20" 
          fill="none" 
          viewBox="0 0 24 24" 
          className="transition-transform group-hover:-translate-x-1 [&_svg]:pointer-events-none [&_svg]:shrink-0"
        >
          <path 
            d="M15 18l-6-6 6-6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span>{children}</span>
      {(icon === "shopping-cart" || icon === "both") && (
        <svg 
          width="20" 
          height="20" 
          fill="none" 
          viewBox="0 0 24 24" 
          className="transition-transform group-hover:rotate-12 [&_svg]:pointer-events-none [&_svg]:shrink-0"
        >
          <path 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4m-5 4h.01" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
});

GradientIconButton.displayName = "GradientIconButton";

export { GradientIconButton, gradientIconButtonVariants };