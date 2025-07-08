"use client";

import { useState } from "react";
import Link from "next/link";
import ToggleButton from "./ToggleButton";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background transition-colors duration-500">
      <div
        className="max-w-6xl mx-auto px-4 py-3 flex flex-row items-center justify-between transition-colors duration-500"
        dir="ltr"
      >
        <Link href="/">
          <div className="relative w-32 h-20">
            {/* Logo for Light Theme */}
            <Image
              src="/logo-light.png"
              alt="Logo Light"
              fill
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
              className="block dark:hidden object-contain"
              priority
            />

            {/* Logo for Dark Theme */}
            <Image
              src="/logo-dark.png"
              alt="Logo Dark"
              fill
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
              className="hidden dark:block object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground transition-colors duration-500">
          <Link
            href="#contact"
            className="hover:text-primary transition-colors duration-500"
          >
            تواصل معنا
          </Link>
          <Link
            href="#servises"
            className="hover:text-primary transition-colors duration-500"
          >
            خدماتنا
          </Link>
          <Link
            href="#about"
            className="hover:text-primary transition-colors duration-500"
          >
            عنّا
          </Link>
          <ToggleButton />
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded hover:bg-primary/10 transition-colors duration-500"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-background px-4 py-4 flex flex-col gap-4 text-sm font-medium text-foreground border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary transition-colors duration-500"
          >
            عنّا
          </Link>
          <Link
            href="#servises"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary transition-colors duration-500"
          >
            خدماتنا
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary transition-colors duration-500"
          >
            تواصل معنا
          </Link>
          <div className="self-start">
            <ToggleButton />
          </div>
        </nav>
      )}
    </header>
  );
}
