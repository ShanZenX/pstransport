"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/public/Ps-main.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop <= lastScrollTop);
      lastScrollTop = Math.max(scrollTop, 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-[0.4rem]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" height={52} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 text-black font-medium items-center">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`text-sm px-3 py-1 no-underline rounded-full transition-all duration-300 text-decoration-none text-black ${
                pathname === href
                  ? "bg-blue-950 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {name.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Call Me Button */}
        <a
          href="tel:+123456789"
          className="hidden md:inline-block bg-blue-950 text-white px-4 py-1 text-sm rounded-full no-underline font-medium text-decoration-none"
        >
          CALL ME
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-indigo-950"
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <nav className="flex flex-col px-4 py-2 space-y-2 text-black font-medium">
            {navItems.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={`px-4 py-2 no-underline rounded-full ${
                  pathname === href
                    ? "bg-indigo-800 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {name.toUpperCase()}
              </Link>
            ))}
            <a
              href="tel:+123456789"
              className="bg-indigo-950 text-white px-4 py-2 rounded-full text-center no-underline font-semibold"
            >
              CALL ME
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
