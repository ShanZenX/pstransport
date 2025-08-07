"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "@/public/Ps-main.png";

export default function MyNavbar() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  // Ensure hydration-safe behavior by enabling rendering only on client
  useEffect(() => {
    setIsClient(true);

    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop <= lastScrollTop); // show on scroll up
      lastScrollTop = Math.max(scrollTop, 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <Navbar
      expand="lg"
      className={`border-b-2 border-black !bg-[#FFFFFF] shadow-[0_5px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm md:h-16 !px-5 transition-transform duration-700 z-10 fixed w-full ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="!text-[#d2f65a] font-bold tracking-wider">
          <Image src={logo} alt="PS transport" width={100} priority />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 px-2 gap-4 my-lg-0 !text-black"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/"
              className={`${
                pathname === "/" ? "!bg-[rgba(255,209,5,0.86)] !text-black" : "text-amber-900"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="/Services"
              className={`${
                pathname === "/services" ? "!bg-[rgba(255,209,5,0.86)] !text-black" : "text-amber-900"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            >
              Services
            </Nav.Link>

            <Nav.Link
              href="/About"
              className={`${
                pathname === "/works" ? "!bg-[rgba(255,209,5,0.86)] !text-black" : "text-amber-900"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            >
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
