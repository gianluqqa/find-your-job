"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-slate-800/90 backdrop-blur-lg shadow-2xl border-b border-emerald-700/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href={"/"} className="group">
              <div className="relative overflow-hidden rounded-xl p-2 transition-all duration-300 group-hover:bg-emerald-800/10">
                <Image
                  src="/LOGO1-Photoroom.png"
                  alt="FINDyourJOB logo"
                  width={140}
                  height={56}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8 text-emerald-100 text-sm font-medium">
              <li>
                <a 
                  href="#jobspreview" 
                  className="relative cursor-pointer transition-all duration-300 hover:text-emerald-300 group"
                >
                  Jobs
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#companiespreview" 
                  className="relative cursor-pointer transition-all duration-300 hover:text-emerald-300 group"
                >
                  Companies
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#aboutus" 
                  className="relative cursor-pointer transition-all duration-300 hover:text-emerald-300 group"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#professionaldpreview" 
                  className="relative cursor-pointer transition-all duration-300 hover:text-emerald-300 group"
                >
                  Professional Development
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Search inputs */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Job title or keyword"
                className="bg-slate-800/50 border border-emerald-700/30 rounded-xl px-4 py-2.5 text-sm text-emerald-100 placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm w-48"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                className="bg-slate-800/50 border border-emerald-700/30 rounded-xl px-4 py-2.5 text-sm text-emerald-100 placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm w-40"
              />
            </div>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-4">
            <Link href={"/login"}>
              <button className="text-emerald-100 text-sm font-medium hover:text-emerald-300 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-emerald-800/20">
                Login
              </button>
            </Link>

            <Link href={"/register"}>
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 active:scale-95">
                Register
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-emerald-100 p-2 rounded-lg hover:bg-emerald-800/20 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile search inputs */}
        <div className="md:hidden mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Job title"
            className="flex-1 bg-slate-800/50 border border-emerald-700/30 rounded-xl px-3 py-2 text-sm text-emerald-100 placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 bg-slate-800/50 border border-emerald-700/30 rounded-xl px-3 py-2 text-sm text-emerald-100 placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;