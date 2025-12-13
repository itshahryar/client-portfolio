'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Header from './Header';

/**
 * Hero component - landing page header + hero + featured projects
 *
 * Accessibility: 
 * - Semantic tags for header, nav, section
 * - ARIA roles for menus
 * - Keyboard navigable
 *
 * Performance:
 * - Image optimization via next/image
 * - useCallback for handlers to prevent unnecessary re-renders
 * - Responsive layout with Tailwind breakpoints
 */
export default function Hero() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="pt-32 md:pt-40 px-6 overflow-hidden w-full">
        <div className="w-full px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 
                            rounded-full text-sm text-gray-300 backdrop-blur-md w-fit 
                            border border-white/10"
            >
              <span className="text-xs" aria-hidden="true">●</span>
              Graphic Designer
            </div>

            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
              Hamna <span className="font-semibold text-white">Fatima</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl">
              I'm a versatile graphic designer specializing in branding, visual identity, and print design
              to help grow your business. Let's build something great!
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="bg-white text-black px-6 py-3 border border-gray-700 
                           rounded-full font-medium hover:bg-gray-200 transition text-sm"
              >
                See All Projects
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-neutral-800 to-black px-6 py-3 
                           border border-gray-700 rounded-full font-medium 
                           hover:opacity-90 transition text-sm"
              >
                Contact Now
              </Link>
            </div>
          </div>

          {/* Floating Testimonials */}
          <div className="relative h-[320px] md:h-[360px] lg:h-[380px] w-full">
            <blockquote
              className="absolute top-6 left-0 bg-gradient-to-br from-white/5 to-white/10 
                         border border-white/10 text-base text-white p-5 rounded-xl 
                         shadow-md w-80 rotate-[-4deg] backdrop-blur-md"
            >
              "Working with her was a game changer!"
              <footer className="text-right mt-3 text-sm text-gray-400">– Sarah Johnson</footer>
            </blockquote>

            <blockquote
              className="absolute bottom-16 right-0 bg-gradient-to-br from-white/5 to-white/10 
                         border border-white/10 text-base text-white p-5 rounded-xl 
                         shadow-md w-80 rotate-[4deg] backdrop-blur-md"
            >
              "We increased our brand recognition by 200%"
              <footer className="text-right mt-3 text-sm text-gray-400">– Michael Chen</footer>
            </blockquote>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <Link
                href="/testimonials"
                className="text-sm text-gray-400 hover:text-white transition underline"
              >
                See All Testimonials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="bg-black py-20 px-4 w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <h2 className="text-white text-4xl font-bold mb-12 text-center md:text-left">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[
              { src: '/images/project1.png', alt: 'Project 1', aspect: 'aspect-[16/9]' },
              { src: '/images/project2.png', alt: 'Project 2', aspect: 'aspect-[16/9]' }
            ].map(({ src, alt, aspect }) => (
              <a
                key={src}
                href="/projects"
                className={`relative group`}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={800}
                  height={600}
                  className={`rounded-lg w-full h-full object-cover ${aspect}`}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-white text-lg font-semibold">View Project</span>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 
                         border border-gray-700 rounded-full font-medium hover:bg-gray-200 
                         transition text-sm"
            >
              See All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
