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
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-500  ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8 ">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center !no-underline font-extrabold text-black"
          >
            <Image src={logo} alt="Logo" height={74} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 text-black font-medium items-center">
            {navItems.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={`text-sm px-3 py-2 rounded transition-all duration-300 !no-underline text-black !font-bold ${
                  pathname === href
                    ? "bg-black text-white font-bold"
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
            className="hidden md:inline-block text-white px-4 py-2 text-sm font-bold bg-black rounded"
          >
            CALL ME
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>
      </header>

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
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <Image src={logo} alt="Logo" height={56} priority />
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
                  className={`px-4 py-2 rounded !no-underline text-black font-bold ${
                    pathname === href
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name.toUpperCase()}
                </Link>
              ))}
              <a
                href="tel:9360303916"
                className="w-[150px] bg-black text-white px-4 py-2 text-center !no-underline  rounded font-semibold"
              >
                CALL ME
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page offset so content isn’t hidden */}
      {/* <div className="pt-20" /> */}
    </>
  );
}
