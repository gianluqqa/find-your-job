"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { ILogin } from "src/interfaces/ILogin";
import styles from "./LoginView.module.css";
import { loginApi } from "src/api/loginApi";
import { validateLogin } from "src/helpers/validateLogin";

const LoginView: React.FC = () => {
  const [formData, setFormData] = useState<ILogin>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const error = validateLogin(formData);
    if (error) {
      setFormError(error);
      setSuccessMessage(null);
      setIsLoading(false);
      return;
    }

    try {
      const response = await loginApi(formData);
      setSuccessMessage("Login correcto ✅");
      setFormError(null);

      const user = response.user; // <- ✏️ accedemos al user

      setTimeout(() => {
        if (user.role === "candidate") {
          router.push("/dashboard/candidate");
        } else if (user.role === "recruiter") {
          router.push("/dashboard/recruiter");
        } else {
          router.push("/"); 
        }
      }, 2000);
    } catch (error: any) {
      setFormError(error.message || "Error al loguear");
      setSuccessMessage(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-emerald-950 px-4 sm:px-6 lg:px-8 pt-28 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-16 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/4 right-6 sm:right-24 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-300/25 to-emerald-300/25 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/5 w-3 h-3 border border-cyan-400/30 rotate-45 animate-spin" style={{ animationDuration: "6s" }}></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 border-2 border-emerald-400/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-6 sm:h-8 bg-gradient-to-t from-blue-400/20 to-cyan-400/20 animate-pulse delay-300"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className={`w-full max-w-sm sm:max-w-md relative z-10 transform transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="relative bg-gradient-to-r from-blue-950/95 via-slate-900/95 to-emerald-900/95 backdrop-blur-xl rounded-lg shadow-2xl p-6 sm:p-8 border border-blue-800/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-transparent to-emerald-950/40 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8">
              <h1
                className={`text-xl sm:text-2xl font-semibold mb-2 ${styles.animateGradientX} ${styles.bgSize200} bg-gradient-to-r from-blue-300 via-slate-200 to-emerald-300 bg-clip-text text-transparent`}
              >
                Access Your Account
              </h1>
            </div>

            {formError && (
              <div className="mb-4 p-3 bg-red-900/30 border border-red-600/50 rounded-lg backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-4 w-4 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-2">
                    <p className="text-red-300 text-xs font-medium">{formError}</p>
                  </div>
                </div>
              </div>
            )}

            {successMessage && (
              <div className="mb-4 p-3 bg-emerald-900/30 border border-emerald-600/50 rounded-lg backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-2">
                    <p className="text-emerald-300 text-xs font-medium">{successMessage}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="email" className="block text-blue-200 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-md bg-gradient-to-r from-blue-950/60 via-slate-900/60 to-emerald-950/60 border border-blue-700/40 hover:border-blue-600/60 focus:border-emerald-400/70 text-slate-100 placeholder-slate-400 transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400/30 backdrop-blur-sm"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-blue-200 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter your password"
                    className="w-full p-3 pr-10 rounded-md bg-gradient-to-r from-blue-950/60 via-slate-900/60 to-emerald-950/60 border border-blue-700/40 hover:border-blue-600/60 focus:border-emerald-400/70 text-slate-100 placeholder-slate-400 transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-400/30 backdrop-blur-sm"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-emerald-300 transition-colors duration-200 p-1"
                    disabled={isLoading}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {showPassword ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center pt-2">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="sr-only peer"
                    disabled={isLoading}
                  />
                  <label htmlFor="rememberMe" className="relative flex items-center cursor-pointer">
                    <div className="w-4 h-4 border-2 border-blue-500/60 rounded-sm bg-gradient-to-r from-blue-950/60 to-emerald-950/60 flex items-center justify-center transition-all duration-300 hover:border-emerald-400/80 peer-checked:border-emerald-400 peer-checked:bg-emerald-400/20">
                      <svg className={`w-3 h-3 text-emerald-300 transition-opacity duration-200 ${formData.rememberMe ? "opacity-100" : "opacity-0"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-slate-300 text-sm font-medium">Keep me signed in</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-blue-800 via-slate-800 to-emerald-800 hover:from-blue-700 hover:via-slate-700 hover:to-emerald-700 text-slate-100 font-medium py-3 px-4 rounded-md transition-all duration-300 border border-blue-700/30 hover:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-slate-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="mt-4 sm:mt-6 text-center">
              <div className="w-16 h-px bg-gradient-to-r from-blue-400 via-transparent to-emerald-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
