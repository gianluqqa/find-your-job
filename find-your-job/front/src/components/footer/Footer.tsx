"use client"
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 text-white py-12 mt-10">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-600/12 to-blue-700/8 rounded-full blur-3xl animate-drift"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-600/10 to-slate-600/12 rounded-full blur-3xl animate-drift-reverse"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-slate-500/6 to-blue-600/8 rounded-full blur-2xl animate-subtle-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4 animate-fade-in">
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
          <div className="animate-slide-up">
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
          <div className="animate-slide-up-delayed">
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
          <div className="animate-slide-up-more-delayed">
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
          <div className="h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent animate-expand-line"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-slate-400 to-blue-400 animate-center-glow"></div>
        </div>

        {/* Copyright section */}
        <div className="text-center text-sm text-slate-500 animate-fade-in-delayed">
          <p className="hover:text-slate-300 transition-colors duration-300">
            © {new Date().getFullYear()} FINDyourJOB. All rights reserved.
          </p>
        </div>

        {/* Elementos decorativos sutiles */}
        <div className="absolute top-8 right-8 w-2 h-2 bg-slate-400/30 rounded-full animate-gentle-pulse"></div>
        <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400/30 rounded-full animate-gentle-pulse-delayed"></div>
      </div>

      {/* CSS personalizado para animaciones elegantes */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -20px) rotate(90deg); }
          66% { transform: translate(-15px, 15px) rotate(180deg); }
        }
        
        @keyframes drift-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-20px, 20px) rotate(-90deg); }
          66% { transform: translate(15px, -15px) rotate(-180deg); }
        }
        
        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.03); }
        }
        
        @keyframes gentle-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes expand-line {
          0% { width: 0; opacity: 0; }
          100% { width: 100%; opacity: 1; }
        }
        
        @keyframes center-glow {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scaleX(1); }
          50% { opacity: 1; transform: translateX(-50%) scaleX(1.5); }
        }
        
        .animate-fade-in { 
          animation: fade-in 0.8s ease-out forwards; 
        }
        .animate-fade-in-delayed { 
          animation: fade-in 0.8s ease-out 0.6s forwards; 
          opacity: 0; 
        }
        .animate-slide-up { 
          animation: slide-up 0.8s ease-out 0.2s forwards; 
          opacity: 0; 
        }
        .animate-slide-up-delayed { 
          animation: slide-up 0.8s ease-out 0.4s forwards; 
          opacity: 0; 
        }
        .animate-slide-up-more-delayed { 
          animation: slide-up 0.8s ease-out 0.6s forwards; 
          opacity: 0; 
        }
        .animate-drift { 
          animation: drift 25s ease-in-out infinite; 
        }
        .animate-drift-reverse { 
          animation: drift-reverse 30s ease-in-out infinite; 
        }
        .animate-subtle-pulse { 
          animation: subtle-pulse 10s ease-in-out infinite; 
        }
        .animate-gentle-pulse { 
          animation: gentle-pulse 5s ease-in-out infinite; 
        }
        .animate-gentle-pulse-delayed { 
          animation: gentle-pulse 5s ease-in-out 2.5s infinite; 
        }
        .animate-expand-line { 
          animation: expand-line 1.5s ease-out 0.8s forwards; 
          width: 0; 
        }
        .animate-center-glow { 
          animation: center-glow 3s ease-in-out infinite; 
        }
      `}</style>
    </footer>
  );
};

export default Footer;