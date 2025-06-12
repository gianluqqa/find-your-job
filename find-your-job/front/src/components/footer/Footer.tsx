import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and description */}
        <div>
          <Image
            src="/LOGO1-Photoroom.png"
            alt="FINDyourJOB logo"
            width={200}
            height={70}
            className="object-contain"
          />
          <p className="text-sm text-green-100">
            Helping professionals connect with top companies and recruiters
            across the country.
          </p>
        </div>

        {/* Job links */}
        <div>
          <h3 className="font-semibold mb-2">Jobs</h3>
          <ul className="space-y-1 text-sm text-green-100">
            <li>Find Jobs</li>
            <li>Remote Work</li>
            <li>By Category</li>
            <li>By Location</li>
          </ul>
        </div>

        {/* Company links */}
        <div>
          <h3 className="font-semibold mb-2">Companies</h3>
          <ul className="space-y-1 text-sm text-green-100">
            <li>Browse Companies</li>
            <li>Recruiter Access</li>
            <li>Employer Login</li>
            <li>Post a Job</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-2">Account</h3>
          <ul className="space-y-1 text-sm text-green-100">
            <li>Login</li>
            <li>Register</li>
            <li>My Profile</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-700 mt-8 pt-4 text-center text-sm text-green-200">
        © {new Date().getFullYear()} FINDyourJOB. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
