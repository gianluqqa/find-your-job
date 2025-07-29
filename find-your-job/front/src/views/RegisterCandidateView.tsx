"use client";
import React, { useState } from "react";
import { IRegister } from "src/interfaces/IRegister";
import { useRouter } from "next/navigation";
import { validateRegister } from "src/helpers/validateRegister";
import { registerCandidate } from "src/api/registerApi";

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
    termsAccepted: false,
    role: "candidate",
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validación en front antes de mandar al backend
    const error = validateRegister(formData);
    if (error) {
      setFormError(error);
      setSuccessMessage(null);
      setIsLoading(false);
      return;
    }

    try {
      const response = await registerCandidate(formData);
      setSuccessMessage("Usuario registrado correctamente ✅");
      setFormError(null);
      // Ejemplo: redireccionar tras 2s
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      setFormError(error.message || "Error al registrar");
      setSuccessMessage(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-8 px-4">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/60 via-transparent to-slate-600/50"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-slate-700/40 to-slate-600/30"></div>

      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500/40 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-blue-600/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-blue-500/50 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-blue-600/40 rounded-full animate-pulse"></div>

      <div className="absolute top-16 right-1/4 w-12 h-12 bg-gradient-to-br from-blue-600/8 to-blue-700/5 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute bottom-16 left-1/5 w-16 h-16 bg-gradient-to-tr from-blue-700/6 to-blue-600/8 rounded-lg -rotate-12 animate-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto mt-16 md:mt-24">
        <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-700/95 backdrop-blur-lg rounded-lg shadow-2xl p-8 md:p-12 border-2 border-blue-600/30 shadow-blue-600/20 ring-1 ring-blue-500/15">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-3 drop-shadow-lg">Register Candidate</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Messages de éxito y error */}
          {formError && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-600/50 rounded-lg backdrop-blur-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-red-300 text-sm font-medium">{formError}</p>
                </div>
              </div>
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-600/50 rounded-lg backdrop-blur-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-green-300 text-sm font-medium">{successMessage}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group">
                  <label className="block text-blue-300 text-sm font-medium mb-2">Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                    placeholder="Enter your name"
                    disabled={isLoading}
                  />
                </div>

                <div className="group">
                  <label className="block text-blue-300 text-sm font-medium mb-2">Email *</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                    placeholder="Enter your email"
                    disabled={isLoading}
                  />
                </div>

                <div className="group">
                  <label className="block text-blue-300 text-sm font-medium mb-2">Password *</label>
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                    placeholder="Enter your password"
                    disabled={isLoading}
                  />
                </div>

                <div className="group">
                  <label className="block text-blue-300 text-sm font-medium mb-2">Confirm Password *</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                    placeholder="Confirm your password"
                    disabled={isLoading}
                  />
                </div>

                <div className="group sm:col-span-2">
                  <label className="block text-blue-300 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                    placeholder="Enter your phone"
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-300 border-b border-blue-600/50 pb-2">Location</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="group">
                  <label className="block text-blue-300 text-sm font-medium mb-2">Country *</label>
                  <input
                    id="country"
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                    placeholder="Enter your country"
                    disabled={isLoading}
                  />
                </div>

                <div className="group">
                  <label className="block text-blue-300 text-sm font-medium mb-2">State/Province *</label>
                  <input
                    id="state"
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                    placeholder="Enter your state"
                    disabled={isLoading}
                  />
                </div>

                <div className="group">
                  <label className="block text-blue-300 text-sm font-medium mb-2">City *</label>
                  <input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-4 bg-slate-800/40 border border-blue-600/30 rounded-lg text-blue-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/60"
                    placeholder="Enter your city"
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 justify-center">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                  className="w-5 h-5 text-blue-500 bg-slate-800/40 border-blue-600/50 rounded focus:ring-blue-500 focus:ring-2 accent-blue-500"
                  disabled={isLoading}
                />
                <label className="text-blue-200 text-sm md:text-base">
                  I accept the <span className="text-blue-300 underline cursor-pointer hover:text-blue-200">terms and conditions</span> *
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-blue-100 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 shadow-lg hover:shadow-blue-500/40 border border-blue-600/50 min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Registering...
                    </div>
                  ) : (
                    "Register"
                  )}
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