"use client";
import Link from "next/link";
import { useState } from "react";
import { useScrollSpy } from "../lib/useScrollSpy";
import { MENU_ITEMS, CSS_CLASSES } from "../lib/constants";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, scrolled, scrollToSection } = useScrollSpy();

  const handleMenuClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className={`text-2xl font-bold ${CSS_CLASSES.gradient.primaryText} hover:scale-105 transition-all duration-300`}>
              Andrea.dev!
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? `${CSS_CLASSES.gradient.primary} text-white shadow-lg`
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50">
              <div className={`w-6 h-6 flex flex-col justify-center space-y-1 transition-all duration-300 ${isMenuOpen ? "rotate-45" : ""}`}>
                <span className={`h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "rotate-90 translate-y-1.5" : ""}`}></span>
                <span className={`h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "rotate-90 -translate-y-1.5" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="px-4 py-6 space-y-2">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id ? `${CSS_CLASSES.gradient.primary} text-white` : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMenuOpen(false)}></div>}
    </>
  );
}

export default Header;
