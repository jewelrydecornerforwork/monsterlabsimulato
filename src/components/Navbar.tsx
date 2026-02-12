"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools/recipes", label: "Recipe Calculator" },
  { href: "/monsters", label: "Monsters" },
  { href: "/guide", label: "Guide" },
];

const wikiLinks = [
  { href: "/wiki/essences-eggs", label: "Essences & Eggs" },
  { href: "/wiki/combat-teams", label: "Combat & Teams" },
  { href: "/wiki/lab-economy", label: "Lab & Economy" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [wikiOpen, setWikiOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface-dark/95 backdrop-blur-sm border-b border-surface-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-shadow flex items-center justify-center text-white font-bold text-sm">
              ML
            </div>
            <span className="font-bold text-lg text-white hidden sm:block">
              MonsterLab Wiki
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-surface-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setWikiOpen(!wikiOpen)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-surface-light transition-colors flex items-center gap-1"
              >
                Wiki
                <svg
                  className={`w-4 h-4 transition-transform ${wikiOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {wikiOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-surface rounded-lg shadow-xl border border-surface-light/50 py-1">
                  {wikiLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-surface-light transition-colors"
                      onClick={() => setWikiOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-surface-light"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-dark border-t border-surface-light/50">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-surface-light"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-surface-light/30">
              <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase">Wiki</p>
              {wikiLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-surface-light"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
