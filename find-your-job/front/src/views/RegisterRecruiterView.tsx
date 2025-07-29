"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IRegister } from "src/interfaces/IRegister";

const RegisterRecruiterView = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    termsAccepted: false,
    role: "recruiter",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-8 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-emerald-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 via-transparent to-emerald-700/50"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-emerald-800/40 to-emerald-600/30"></div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-emerald-500/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-emerald-600/60 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-emerald-400/40 rounded-full animate-pulse"></div>

      <div className="absolute top-16 right-1/4 w-12 h-12 bg-gradient-to-br from-emerald-500/8 to-emerald-600/5 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute bottom-16 left-1/5 w-16 h-16 bg-gradient-to-tr from-emerald-600/6 to-emerald-500/8 rounded-lg -rotate-12 animate-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto mt-16 md:mt-24">
        <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-emerald-900/95 backdrop-blur-lg rounded-lg shadow-2xl p-8 md:p-12 border-2 border-emerald-500/50 shadow-emerald-500/30 ring-1 ring-emerald-400/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-3 drop-shadow-lg">Register Recruiter</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
          </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  placeholder="Enter your email"
                />
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">
                  Password *
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  placeholder="Create a password"
                />
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">
                  Confirm Password *
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="group sm:col-span-2">
                <label className="block text-emerald-800 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  placeholder="Enter your phone number"
                />
              </div>

            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-emerald-800 border-b border-emerald-600/50 pb-2">
              Location
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">
                  Country *
                </label>
                <input
                  id="country"
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  placeholder="Enter your country"
                />
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">
                  State/Province *
                </label>
                <input
                  id="state"
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  placeholder="Enter your state"
                />
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">
                  City *
                </label>
                <input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  placeholder="Enter your city"
                />
              </div>

            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 justify-center">
              <input
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                className="w-5 h-5 text-emerald-400 bg-white/10 border-emerald-400/50 rounded focus:ring-emerald-400 focus:ring-2 accent-emerald-400"
              />
              <label className="text-emerald-900 text-sm md:text-base">
                I accept the{" "}
                <span className="text-emerald-800 underline cursor-pointer hover:text-emerald-900">
                  terms and conditions
                </span>{" "}
                *
              </label>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 shadow-lg hover:shadow-emerald-500/40 border border-emerald-500/50 min-w-[200px]"
              >
                Create Account
              </button>
            </div>
          </div>

        </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterRecruiterView;