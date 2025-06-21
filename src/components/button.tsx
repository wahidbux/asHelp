'use client';

import React from 'react';

interface GradientGlowButtonProps {
  label?: string;
  href?: string;
}

const GradientGlowButton: React.FC<GradientGlowButtonProps> = ({
  label = 'Get Started For Free',
  href = '#',
}) => {
  return (
    <div className="relative inline-flex items-center justify-center gap-4 group">
      {/* Background Glow */}
      <div className="absolute inset-0 transition-all duration-[1000ms] opacity-60 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
      
      {/* Button */}
      <a
        href={href}
        role="button"
        title={label}
        className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
      >
        {label}
        {/* Arrow Icon */}
        <svg
          aria-hidden="true"
          viewBox="0 0 10 10"
          height="10"
          width="10"
          fill="none"
          className="ml-2 -mr-1 mt-0.5 stroke-white stroke-2"
        >
          <path
            d="M0 5h7"
            className="transition-opacity opacity-0 group-hover:opacity-100"
          ></path>
          <path
            d="M1 1l4 4-4 4"
            className="transition-transform group-hover:translate-x-[3px]"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default GradientGlowButton;
