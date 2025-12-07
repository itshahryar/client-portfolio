"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Dna, ChevronDown, Table, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTablesDropdownOpen, setIsTablesDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const tablesTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleTablesMouseEnter = () => {
    if (tablesTimeoutRef.current) {
      clearTimeout(tablesTimeoutRef.current);
      tablesTimeoutRef.current = null;
    }
    setIsTablesDropdownOpen(true);
  };

  const handleTablesMouseLeave = () => {
    tablesTimeoutRef.current = setTimeout(() => {
      setIsTablesDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
      tablesTimeoutRef.current && clearTimeout(tablesTimeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/logo-single.png"
            alt="Gene Analysis Logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          
          {/* Home Button */}
          <Link href="/" className="cursor-pointer">
            <Button
              variant="outline"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Home className="h-4 w-4" />
              Home Page
            </Button>
          </Link>

          {/* Gene Analysis Button */}
          {/* <Link href="/gene-analysis" className="cursor-pointer">
            <Button
              variant="outline"
              className="hidden md:inline-flex items-center gap-2 cursor-pointer"
            >
              <Dna className="h-4 w-4" />
              Gene Analysis
            </Button>
          </Link> */}

          {/* Analysis Visuals Dropdown */}
          <div 
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 cursor-pointer"
            >
              Analysis Visuals
              <ChevronDown className="h-4 w-4" />
            </Button>
            
            {isDropdownOpen && (
              <div 
                className="
                  absolute right-0 mt-0 pt-2 w-48
                  bg-white dark:bg-neutral-900
                  border border-gray-200 dark:border-neutral-700
                  rounded-md shadow-lg py-1 z-20
                "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href="/degs" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  DEGs
                </Link>

                <Link 
                  href="/metascape-gv" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  Metascape GV
                </Link>

                <Link 
                  href="/metascape-mature" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  Metascape Mature
                </Link>

                <Link 
                  href="/wgcna" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  WGCNA
                </Link>
              </div>
            )}
          </div>

          {/* Tables Dropdown */}
          <div 
            className="relative cursor-pointer"
            onMouseEnter={handleTablesMouseEnter}
            onMouseLeave={handleTablesMouseLeave}
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Table className="h-4 w-4" />
              Tables
              <ChevronDown className="h-4 w-4" />
            </Button>
            
            {isTablesDropdownOpen && (
              <div 
                className="
                  absolute right-0 mt-0 pt-2 w-56
                  bg-white dark:bg-neutral-900
                  border border-gray-200 dark:border-neutral-700
                  rounded-md shadow-lg py-1 z-20
                "
                onMouseEnter={handleTablesMouseEnter}
                onMouseLeave={handleTablesMouseLeave}
              >
                <Link 
                  href="/deg-gv-ivo" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  DEGs_GV_vs_IVO-MII
                </Link>

                <Link 
                  href="/deg-mature-young" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  DEGs_Mature_vs_Young
                </Link>

                <Link 
                  href="/wgcna-results" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  WGCNA_results
                </Link>
              </div>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
}

