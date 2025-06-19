'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { gradients } from "../ui/utils/gradients";
import MobileMenu from "./MobileMenu";

const navigationItems = [
  { href: "/", label: "Головна", icon: "🏠" },
  { href: "/about", label: "Про мене", icon: "👥" },
  { href: "/services", label: "Послуги", icon: "🚀" },
  { href: "/blog", label: "Блог", icon: "📝" },
  { href: "/contact", label: "Контакти", icon: "📞" }
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Закрываем меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Закрываем меню при клике на ссылку
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 group" onClick={handleLinkClick}>
                <div className={`w-8 h-8 bg-gradient-to-r ${gradients.primary} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className={`text-xl font-bold bg-gradient-to-r ${gradients.text} bg-clip-text text-transparent ${gradients.textHover} transition-all duration-300`}>
                  Next.js Demo
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:${gradients.card} rounded-lg transition-all duration-300 font-medium group relative overflow-hidden`}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Link>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100 active:scale-95"
                aria-label="Toggle mobile menu"
              >
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu 
        items={navigationItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLinkClick={handleLinkClick}
      />
    </>
  );
}
