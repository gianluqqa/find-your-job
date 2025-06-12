import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image
              src="/LOGO1-Photoroom.png"
              alt="FINDyourJOB logo"
              width={180}
              height={70}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation links */}
        <ul className="flex gap-6 text-green-800 font-medium">
          <li className="cursor-pointer hover:text-green-600">
            <Link href="/jobspreview">Jobs</Link>
          </li>
          <li className="cursor-pointer hover:text-green-600">
            <Link href="/companiespreview">Companies</Link>
          </li>
          <li className="cursor-pointer hover:text-green-600">
            <Link href="/aboutus">About Us</Link>
          </li>
          <li className="cursor-pointer hover:text-green-600">
            <Link href="/professionaldpreview">Professional Development</Link>
          </li>
        </ul>

        {/* Search inputs */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
          />
          <input
            type="text"
            placeholder="Location"
            className="border border-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
          />
        </div>

        {/* Auth buttons */}
        <div className="flex gap-4">
          <button className="text-green-800 font-semibold hover:text-green-600">
            Login
          </button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
