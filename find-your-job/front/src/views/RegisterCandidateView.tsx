"use client";
import React, { useState } from "react";
import { IRegister } from "src/interfaces/IRegister";
import { validateRegister } from "src/helpers/validateRegister";
import { IRegisterErrors } from "src/interfaces/IRegisterErrors";
import { fakeLogin } from "src/helpers/authFunctions";
import { useRouter } from "next/navigation";

const RegisterCandidateView: React.FC = () => {
  const [formData, setFormData] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    about: "",
    termsAccepted: false,
    role: "candidate", // Lo marcás internamente acá
  });

  const [errors, setErrors] = useState<IRegisterErrors>({});
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRegister(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    localStorage.setItem("registeredUser", JSON.stringify(formData));
    fakeLogin(formData.role as "candidate" | "recruiter");

    alert("Registration successful! Check console for data.");
    router.push("/login"); // 🔁 Redirige al login
  };

  return (
  <div className="min-h-screen relative overflow-hidden py-8 px-4">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
    <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/60 via-transparent to-slate-600/50"></div>
    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-slate-700/40 to-slate-600/30"></div>
    
    <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500/40 rounded-full animate-pulse"></div>
    <div className="absolute top-32 right-20 w-3 h-3 bg-blue-600/30 rounded-full animate-ping"></div>
    <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-blue-500/50 rounded-full animate-bounce"></div>
    <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-blue-600/40 rounded-full animate-pulse"></div>
    
    <div className="absolute top-16 right-1/4 w-12 h-12 bg-gradient-to-br from-blue-600/8 to-blue-700/5 rounded-lg rotate-45 animate-pulse"></div>
    <div className="absolute bottom-16 left-1/5 w-16 h-16 bg-gradient-to-tr from-blue-700/6 to-blue-600/8 rounded-lg -rotate-12 animate-pulse"></div>
    
    <div className="relative z-10 max-w-4xl mx-auto mt-16 md:mt-24">
      <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-700/95 backdrop-blur-lg rounded-lg shadow-2xl p-8 md:p-12 border-2 border-blue-600/30 shadow-blue-600/20 ring-1 ring-blue-500/15">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-3 drop-shadow-lg">
            Register Candidate
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              <div className="group">
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="group">
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="text"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="group">
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  Password *
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="group">
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  Confirm Password *
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="group sm:col-span-2">
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                  placeholder="Enter your phone"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-300 border-b border-blue-600/50 pb-2">
              Location
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              <div className="group">
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  Country *
                </label>
                <input
                  id="country"
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                  placeholder="Enter your country"
                />
                {errors.country && (
                  <p className="text-red-400 text-sm mt-1">{errors.country}</p>
                )}
              </div>

              <div className="group">
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  State/Province *
                </label>
                <input
                  id="state"
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                  placeholder="Enter your state"
                />
                {errors.state && (
                  <p className="text-red-400 text-sm mt-1">{errors.state}</p>
                )}
              </div>

              <div className="group">
                <label className="block text-blue-300 text-sm font-medium mb-2">
                  City *
                </label>
                <input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                  placeholder="Enter your city"
                />
                {errors.city && (
                  <p className="text-red-400 text-sm mt-1">{errors.city}</p>
                )}
              </div>

            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 justify-center">
              <input
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                className="w-5 h-5 text-blue-500 bg-slate-800/40 border-blue-600/50 rounded focus:ring-blue-500 focus:ring-2 accent-blue-500"
              />
              <label className="text-blue-200 text-sm md:text-base">
                I accept the{" "}
                <span className="text-blue-300 underline cursor-pointer hover:text-blue-200">
                  terms and conditions
                </span>{" "}
                *
              </label>
            </div>
            {errors.termsAccepted && (
              <p className="text-red-400 text-sm text-center">
                {errors.termsAccepted}
              </p>
            )}
          </div>

          <div className="pt-4">
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-blue-100 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 shadow-lg hover:shadow-blue-500/40 border border-blue-600/50 min-w-[200px]"
              >
                Register
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
);
};

export default RegisterCandidateView;
