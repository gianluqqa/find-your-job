"use client";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fakeLogin, getUser } from "src/helpers/authFunctions";
import { validateLogin } from "src/helpers/validateLogin";
import { ILogin } from "src/interfaces/ILogin";
import styles from "./LoginView.module.css";

const initialValues: ILogin = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginView: React.FC = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (values: ILogin) => {
    const registeredUser = getUser();

    if (
      registeredUser &&
      registeredUser.email === values.email &&
      registeredUser.password === values.password
    ) {
      console.log("Login exitoso:", registeredUser);
      fakeLogin(registeredUser.role);
      router.push("/dashboard");
    } else {
      alert("Email o contraseña incorrectos.");
    }
  };

  return (
    <div className="min-h-[120vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-emerald-950 px-4 pt-32 pb-20 relative overflow-hidden">
      {" "}
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/4 right-24 w-48 h-48 bg-gradient-to-br from-blue-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-300/25 to-emerald-300/25 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Animated geometric elements */}
        <div
          className="absolute top-1/3 left-1/5 w-3 h-3 border border-cyan-400/30 rotate-45 animate-spin"
          style={{ animationDuration: "6s" }}
        ></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 border-2 border-emerald-400/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-8 bg-gradient-to-t from-blue-400/20 to-cyan-400/20 animate-pulse delay-300"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      <div
        className={`w-full max-w-md relative z-10 transform transition-all duration-1000 ease-out ${
          isLoaded
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        {/* Glow effect behind card */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50 animate-pulse"></div>

        <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-800/95 to-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(6,182,212,0.4)] group">
          {/* Status indicators */}
          <div className="absolute top-4 right-4 w-2 h-2 border border-emerald-400/40 rounded-full animate-ping"></div>
          <div className="absolute top-5 right-7 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-pulse delay-300"></div>

          <div className="relative mb-8 text-center">
            <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text relative inline-block">
              <span
                className={`${styles.animateGradientX} ${styles.bgSize200}`}
              >
                Welcome Back
              </span>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            </h1>
            <p className="text-slate-400 mt-3 font-medium">
              Sign in to continue your journey
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validate={validateLogin}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-6">
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-emerald-400 font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-200"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className={`w-full p-4 rounded-xl border bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm text-slate-100 placeholder-slate-400 transition-all duration-300 ${
                        errors.email && touched.email
                          ? "border-red-500/60 shadow-lg shadow-red-500/20"
                          : "border-slate-600/50 hover:border-cyan-400/50 focus:border-emerald-400/80"
                      } focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:shadow-lg focus:shadow-cyan-400/20 hover:shadow-md hover:shadow-slate-700/30 transform hover:scale-[1.01] focus:scale-[1.01]`}
                    />
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.email && touched.email && (
                    <div
                      className={`text-red-400 mt-2 text-sm font-medium ${styles.animateShake}`}
                    >
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="group">
                  <label
                    htmlFor="password"
                    className="block text-emerald-400 font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-200"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••"
                      className={`w-full p-4 pr-12 rounded-xl border bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm text-slate-100 placeholder-slate-400 transition-all duration-300 ${
                        errors.password && touched.password
                          ? "border-red-500/60 shadow-lg shadow-red-500/20"
                          : "border-slate-600/50 hover:border-cyan-400/50 focus:border-emerald-400/80"
                      } focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:shadow-lg focus:shadow-cyan-400/20 hover:shadow-md hover:shadow-slate-700/30 transform hover:scale-[1.01] focus:scale-[1.01]`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {showPassword ? "👁️‍🗨️" : "👁️"}
                    </button>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.password && touched.password && (
                    <div
                      className={`text-red-400 mt-2 text-sm font-medium ${styles.animateShake}`}
                    >
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="flex items-center group">
                  <div className="relative">
                    <Field
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="relative flex items-center cursor-pointer"
                    >
                      <div className="w-5 h-5 border-2 border-slate-600 rounded-md peer-checked:bg-gradient-to-br peer-checked:from-emerald-500 peer-checked:to-cyan-500 peer-checked:border-transparent transition-all duration-300 hover:border-cyan-400/50 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/20">
                        <svg
                          className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-slate-300 font-medium group-hover:text-emerald-400 transition-colors duration-200">
                        Remember me
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none focus:ring-4 focus:ring-cyan-400/30 overflow-hidden group"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </span>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-xl border border-cyan-400/40 animate-pulse"></div>
                  </div>
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-8 text-center">
            <div className="inline-block w-16 h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
