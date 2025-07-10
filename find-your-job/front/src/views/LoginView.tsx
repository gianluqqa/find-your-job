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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-emerald-950 px-4 sm:px-6 lg:px-8 pt-28 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
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
              <h1 className={`text-xl sm:text-2xl font-semibold mb-2 ${styles.animateGradientX} ${styles.bgSize200} bg-gradient-to-r from-blue-300 via-slate-200 to-emerald-300 bg-clip-text text-transparent`}>
                Access Your Account
              </h1>
            </div>

            <Formik initialValues={initialValues} validate={validateLogin} onSubmit={handleSubmit}>
              {({ errors, touched, isSubmitting }) => (
                <Form className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-blue-200 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full p-3 rounded-md bg-gradient-to-r from-blue-950/60 via-slate-900/60 to-emerald-950/60 border text-slate-100 placeholder-slate-400 transition-all duration-300 text-sm sm:text-base ${
                        errors.email && touched.email
                          ? "border-red-400/60 shadow-lg shadow-red-500/20"
                          : "border-blue-700/40 hover:border-blue-600/60 focus:border-emerald-400/70"
                      } focus:outline-none focus:ring-2 focus:ring-emerald-400/30 backdrop-blur-sm`}
                    />
                    {errors.email && touched.email && (
                      <div className={`text-red-300 mt-1 text-xs sm:text-sm ${styles.animateShake}`}>
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-blue-200 text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={`w-full p-3 pr-10 rounded-md bg-gradient-to-r from-blue-950/60 via-slate-900/60 to-emerald-950/60 border text-slate-100 placeholder-slate-400 transition-all duration-300 text-sm sm:text-base ${
                          errors.password && touched.password
                            ? "border-red-400/60 shadow-lg shadow-red-500/20"
                            : "border-blue-700/40 hover:border-blue-600/60 focus:border-emerald-400/70"
                        } focus:outline-none focus:ring-2 focus:ring-emerald-400/30 backdrop-blur-sm`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-emerald-300 transition-colors duration-200 p-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {showPassword ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          )}
                        </svg>
                      </button>
                    </div>
                    {errors.password && touched.password && (
                      <div className={`text-red-300 mt-1 text-xs sm:text-sm ${styles.animateShake}`}>
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center pt-2">
                    <div className="relative">
                      <Field
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        className="sr-only"
                      />
                      <label
                        htmlFor="rememberMe"
                        className="relative flex items-center cursor-pointer"
                      >
                        <div className="w-4 h-4 border-2 border-blue-500/60 rounded-sm bg-gradient-to-r from-blue-950/60 to-emerald-950/60 flex items-center justify-center transition-all duration-300 hover:border-emerald-400/80">
                          <svg
                            className="w-3 h-3 text-emerald-300 opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
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
                        <span className="ml-3 text-slate-300 text-sm font-medium">
                          Keep me signed in
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-blue-800 via-slate-800 to-emerald-800 hover:from-blue-700 hover:via-slate-700 hover:to-emerald-700 text-slate-100 font-medium py-3 px-4 rounded-md transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed border border-blue-700/30 hover:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-300 mr-2"></div>
                        <span>Authenticating...</span>
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </Form>
              )}
            </Formik>

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