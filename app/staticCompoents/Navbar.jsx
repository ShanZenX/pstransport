"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/ps-logo.jpeg";

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
    { name: "About Us", href: "/About" },
    { name: "Tariff", href: "/Pack" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 ">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center !no-underline !font-extrabold text-black"
        >
          <Image src={logo} alt="Logo" height={72} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 text-black font-medium items-center">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`text-sm px-3 py-1 no-underline -full transition-all duration-300 text-decoration-none text-black ${
                pathname === href
                  ? "bg-black text-white !font-bold"
                  : "hover:bg-gray-100"
              }`}
            >
              {name.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Call Me Button */}
        <a
          href="tel:+919360303916"
          className="hidden md:inline-block  text-white px-4 py-1 text-sm no-underline font-bold text-decoration-none bg-black"
        >
          CALL ME
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black"
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-40"
          >
            {/* Drawer Header with Logo + Close */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image src={logo} alt="Logo" height={62} priority />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-black"
              >
                <XMarkIcon className="w-7 h-7" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col px-4 py-6 space-y-4 text-black font-medium">
              {navItems.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className={`px-4 py-2  !no-underline !text-gray-800 ${
                    pathname === href
                      ? "bg-gray-100 text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name.toUpperCase()}
                </Link>
              ))}
              <a
                href="tel:9360303916"
                className="w-[150px] bg-black text-white px-1 py-2 text-center !no-underline font-semibold"
              >
                CALL ME
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
