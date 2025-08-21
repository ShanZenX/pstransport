import React from "react";
import logo from "@/public/Ps-white.png";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#1c1e2b] text-white py-16 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between text-gray-400 font-semibold space-y-6 md:space-y-0">
      <div className="flex flex-col text-white space-y-3 ">
        <a href="/About" className="text-white !no-underline cursor-pointer">
          About PS Transport
        </a>
        <a href="/Services" className="text-white !no-underline  cursor-pointer">
          Contact Us
        </a>
        <a href="#" className="text-white !no-underline  cursor-pointer">
          Home
        </a>
      </div>
      <div className="space-y-3">
        <a href="#" className="text-white no-underline  cursor-pointer">
          Privacy Policy
        </a>
        <a href="#" className="text-white no-underline">
          Terms & Conditions
        </a>
      </div>
      <div className="space-y-3">
        <a href="#" className="inline-block text-white no-underline transition">
          Become an Operator <span className="text-yellow-400 ml-1">›</span>
        </a>
        <a href="#" className="inline-block text-white no-underline transition">
          Ride with PS Transport <span className="text-yellow-400 ml-1">›</span>
        </a>
      </div>
      <div className="space-y-2">
        <p>Bookings@pstransport.in</p>
        <p className="text-yellow-400">+91 90000 00000</p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-5 px-4 md:px-10 pt-4 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 space-y-3 md:space-y-0">
      <div className="mb-1 md:mb-0 text-lg font-bold">
        <span className="text-yellow-400">
          <Image src={logo} alt="PS transport" width={103} />
        </span>
      </div>
      <p className="text-center md:text-right">
        &copy; 2025 PS Transport Private Limited. All rights reserved.
      </p>

      <div className="flex items-center space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-xl">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-xl">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-xl">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-xl">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
