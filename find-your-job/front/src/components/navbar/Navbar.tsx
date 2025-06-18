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
      className={`fixed top-0 left-0 w-full z- transition-colors duration-300 ${
        isScrolled ? "bg-gray-500 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src="/LOGO1-Photoroom.png"
              alt="FINDyourJOB logo"
              width={150}
              height={60}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation links */}
        <ul className="flex gap-4 text-green-800 text-sm font-medium">
          <li className="cursor-pointer hover:text-green-600">
            <a href="#jobspreview">Jobs</a>
          </li>
          <li className="cursor-pointer hover:text-green-600">
            <a href="#companiespreview">Companies</a>
          </li>
          <li className="cursor-pointer hover:text-green-600">
            <a href="#aboutus">About Us</a>
          </li>
          <li className="cursor-pointer hover:text-green-600">
            <a href="#professionaldpreview">Professional Development</a>
          </li>
        </ul>

        {/* Search inputs */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="border border-green-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="text"
            placeholder="Location"
            className="border border-green-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Auth buttons */}
        <div className="flex gap-3">
          <Link href={"/login"}>
            <button className="text-green-800 text-sm font-medium hover:text-green-600">
              Login
            </button>
          </Link>

          <Link href={"/register"}>
            <button className="bg-green-700 text-white text-sm px-3 py-1.5 rounded hover:bg-green-800">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
