"use client";
import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-800/90 text-white py-12">
      {/* Elementos decorativos de fondo */}
      <div
        className={`absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-600/12 to-blue-700/8 rounded-full blur-3xl ${styles.drift}`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-600/10 to-slate-600/12 rounded-full blur-3xl ${styles.driftReverse}`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-slate-500/6 to-blue-600/8 rounded-full blur-2xl ${styles.subtlePulse}`}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className={`space-y-4 ${styles.fadeIn}`}>
            <Image
              src="/LOGO1-Photoroom.png"
              alt="FINDyourJOB logo"
              width={200}
              height={70}
              className="object-contain transition-all duration-300 hover:scale-105"
            />
            <p className="text-sm text-slate-300 leading-relaxed">
              Helping professionals connect with top companies and recruiters
              across the country.
            </p>
          </div>

          {/* Job links */}
          <div className={styles.slideUp}>
            <h3 className="font-semibold mb-4 text-lg text-slate-200 border-b border-slate-600/40 pb-2">
              Jobs
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                Find Jobs
              </li>
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                Remote Work
              </li>
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                By Category
              </li>
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                By Location
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className={styles.slideUpDelayed}>
            <h3 className="font-semibold mb-4 text-lg text-slate-200 border-b border-slate-600/40 pb-2">
              Companies
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                Browse Companies
              </li>
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                Recruiter Access
              </li>
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                Employer Login
              </li>
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                Post a Job
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className={styles.slideUpMoreDelayed}>
            <h3 className="font-semibold mb-4 text-lg text-slate-200 border-b border-slate-600/40 pb-2">
              Account
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                Login
              </li>
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                Register
              </li>
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                My Profile
              </li>
              <li className="hover:text-slate-200 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform">
                Support
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div className="relative mb-6">
          <div
            className={`h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent ${styles.expandLine}`}
          ></div>
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-slate-400 to-blue-400 ${styles.centerGlow}`}
          ></div>
        </div>

        {/* Copyright section */}
        <div
          className={`text-center text-sm text-slate-500 ${styles.fadeInDelayed}`}
        >
          <p className="hover:text-slate-300 transition-colors duration-300">
            © {new Date().getFullYear()} FINDyourJOB. All rights reserved.
          </p>
        </div>

        {/* Elementos decorativos sutiles */}
        <div
          className={`absolute top-8 right-8 w-2 h-2 bg-slate-400/30 rounded-full ${styles.gentlePulse}`}
        ></div>
        <div
          className={`absolute bottom-8 left-8 w-2 h-2 bg-blue-400/30 rounded-full ${styles.gentlePulseDelayed}`}
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
