'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/#profile', label: 'About', isAnchor: true },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/experience', label: 'Experience' },
    { href: '/education', label: 'Education' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact', isButton: true },
  ];

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href;
  };

  return (
    <>
      <header
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                   bg-white/10 backdrop-blur-md text-white px-6 md:px-8 py-3 
                   rounded-full shadow-lg flex items-center justify-between gap-6 
                   w-[95%]"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
            Hamna<span className="font-semibold text-white">Fatima</span>
          </h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-4 xl:gap-6 text-sm xl:text-lg items-center" aria-label="Primary navigation">
          {navItems.map((item) => {
            if (item.isButton) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition text-sm"
                >
                  {item.label}
                </Link>
              );
            }
            const handleClick = item.isAnchor ? (e) => {
              e.preventDefault();
              if (pathname !== '/') {
                router.push('/#profile');
                setTimeout(() => {
                  document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
              }
            } : undefined;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className={`hover:text-white transition text-gray-400 ${isActive(item.href) ? 'text-white' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleMenuToggle}
          className="lg:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="w-6 h-6 text-white" aria-hidden="true" />
        </button>
      </header>

      {/* ===== MOBILE SIDEBAR MENU ===== */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          {/* Sidebar */}
          <aside
            className="fixed top-0 left-0 h-full w-64 bg-black z-50 p-6 
                      transform transition-transform duration-300 ease-in-out translate-x-0"
            role="dialog"
            aria-modal="true"
          >
            <div className="mt-5 flex justify-between">
              <Link
                href="/"
                aria-label="Home"
                className="flex items-center gap-2 font-semibold text-lg"
                onClick={closeMenu}
              >
                <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
                  Hamna<span className="font-semibold text-white">Fatima</span>
                </h2>
              </Link>
              <button
                onClick={closeMenu}
                className="text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 mt-12" aria-label="Mobile navigation">
              {navItems.map((item) => {
                if (item.isButton) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition text-sm text-center"
                    >
                      {item.label}
                    </Link>
                  );
                }
                const handleClick = item.isAnchor ? (e) => {
                  e.preventDefault();
                  closeMenu();
                  if (pathname !== '/') {
                    router.push('/#profile');
                    setTimeout(() => {
                      document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    setTimeout(() => {
                      document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                } : closeMenu;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleClick}
                    className={isActive(item.href) ? 'text-white' : 'text-gray-400'}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
