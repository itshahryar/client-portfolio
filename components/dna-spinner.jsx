"use client";

import React from "react";
import { Dna } from "lucide-react";

export default function DnaSpinner({ size = "default" }) {
  const sizeClasses = {
    small: "h-8 w-8",
    default: "h-16 w-16",
    large: "h-24 w-24",
  };

  const ringSizes = {
    small: { inner: "h-12 w-12", outer: "h-16 w-16" },
    default: { inner: "h-20 w-20", outer: "h-24 w-24" },
    large: { inner: "h-32 w-32", outer: "h-40 w-40" },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Animated DNA Icon with pulsing rings */}
        <div className="relative flex items-center justify-center">
          {/* Outer pulsing rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`absolute ${ringSizes[size].outer} border-2 border-emerald-500/20 rounded-full animate-ping`}
              style={{ animationDelay: "0s" }}
            ></div>
            <div 
              className={`absolute ${ringSizes[size].inner} border-2 border-emerald-400/30 rounded-full animate-ping`}
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
          
          {/* Rotating DNA Icon */}
          <Dna
            className={`${sizeClasses[size]} text-emerald-400`}
            style={{
              animation: "spin 2s linear infinite",
            }}
          />
        </div>
        
        {/* Loading text with fade animation */}
        <div className="flex items-center gap-2">
          <p className="text-sm text-emerald-400 font-medium animate-pulse">
            Loading
          </p>
          <span className="flex gap-1">
            <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: "0s" }}></span>
            <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></span>
            <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
          </span>
        </div>
      </div>
    </div>
  );
}
