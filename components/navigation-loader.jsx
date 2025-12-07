"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import DnaSpinner from "./dna-spinner";

export default function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const prevPathnameRef = useRef(pathname);
  const loadingTimeoutRef = useRef(null);

  useEffect(() => {
    // Check if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      // Start loading
      setLoading(true);
      prevPathnameRef.current = pathname;

      // Clear any existing timeout
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }

      // Hide spinner after a delay (allowing time for content to load)
      // This will be cleared if page loads faster
      loadingTimeoutRef.current = setTimeout(() => {
        setLoading(false);
      }, 500);
    }

    // Cleanup
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, [pathname, searchParams]);

  // Hide spinner when page is fully loaded or DOM is ready
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hideLoader = () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      setLoading(false);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      // Small delay to ensure React has rendered
      const timer = setTimeout(hideLoader, 150);
      return () => clearTimeout(timer);
    }

    // Listen for load event
    window.addEventListener("load", hideLoader);
    
    // Also listen for DOMContentLoaded as a fallback
    document.addEventListener("DOMContentLoaded", hideLoader);

    return () => {
      window.removeEventListener("load", hideLoader);
      document.removeEventListener("DOMContentLoaded", hideLoader);
    };
  }, [pathname]);

  // Also listen for link clicks to show loader immediately
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.href) {
        const url = new URL(target.href);
        const currentUrl = new URL(window.location.href);
        
        // Only show loader if navigating to a different page
        if (url.pathname !== currentUrl.pathname || url.search !== currentUrl.search) {
          setLoading(true);
        }
      }
    };

    document.addEventListener("click", handleLinkClick, true);
    return () => document.removeEventListener("click", handleLinkClick, true);
  }, []);

  if (!loading) return null;

  return <DnaSpinner size="default" />;
}
