"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { IRegister } from "src/interfaces/IRegister";
import { fakeLogin } from "src/helpers/authFunctions";
import { useRouter } from "next/navigation";
import { validateRegister } from "src/helpers/validateRegister";
import styles from "./RegisterView.module.css";

const initialValues: IRegister = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "candidate",
  country: "",
  state: "",
  city: "",
  phone: "",
  about: "",
  termsAccepted: false,
};

const formFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "your.email@company.com",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Create a secure password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
  },
  {
    name: "role",
    label: "Account Type",
    type: "select",
    options: [
      { value: "candidate", label: "Job Seeker" },
      { value: "recruiter", label: "Employer/Recruiter" },
    ],
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    placeholder: "Your country",
  },
  {
    name: "state",
    label: "State/Province",
    type: "text",
    placeholder: "Your state or province",
  },
  { name: "city", label: "City", type: "text", placeholder: "Your city" },
  {
    name: "phone",
    label: "Phone Number",
    type: "text",
    placeholder: "+1 (555) 123-4567",
  },
  {
    name: "about",
    label: "Professional Summary",
    type: "textarea",
    placeholder: "Brief description of your professional background (optional)",
    rows: 4,
  },
];

const RegisterView: React.FC = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (values: IRegister) => {
    // Guarda el rol
    fakeLogin(values.role as "candidate" | "recruiter");

    // Guarda el usuario completo (nota: en producción usar una solución más segura)
    if (typeof window !== "undefined") {
      localStorage.setItem("registeredUser", JSON.stringify(values));
    }

    // Mostrar en consola
    console.log("Registered user:", values);

    // Redirige al login
    router.push("/login");
  };

  return (
    <div className="min-h-[120vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900 px-4 pt-32 pb-20 relative overflow-hidden">
      {" "}
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/12 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/6 w-48 h-48 bg-cyan-400/8 rounded-full blur-xl"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      <div
        className={`w-full max-w-4xl relative z-10 transform transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-emerald-500/20">
          {/* Professional header */}
          <div className="relative mb-8 text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Create Your Account
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-3"></div>
            <p className="text-slate-300 text-sm font-medium">
              Join thousands of professionals in our platform
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validate={validateRegister}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className={`space-y-6 ${styles.formContainer}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.map(
                    (
                      { name, label, type, placeholder, options, rows },
                      index
                    ) => {
                      const key = name as keyof IRegister;
                      const showError = errors[key] && touched[key];
                      const isFullWidth = ["about", "role"].includes(name);

                      return (
                        <div
                          key={name}
                          className={`group ${
                            isFullWidth ? "md:col-span-2" : ""
                          } ${styles.fieldContainer}`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <label
                            htmlFor={name}
                            className="block text-slate-200 font-semibold mb-2 text-sm group-hover:text-emerald-400 transition-colors duration-200"
                          >
                            {label}
                          </label>

                          {type === "select" ? (
                            <div className="relative">
                              <Field
                                as="select"
                                name={name}
                                className={`w-full p-4 rounded-lg border bg-slate-700 text-slate-100 transition-all duration-200 appearance-none cursor-pointer ${
                                  showError
                                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                                    : "border-slate-600 hover:border-emerald-500 focus:border-blue-500 focus:ring-emerald-500/20"
                                } focus:outline-none focus:ring-4 hover:shadow-sm focus:shadow-md`}
                              >
                                {options!.map((opt) => (
                                  <option
                                    key={opt.value}
                                    value={opt.value}
                                    className="bg-slate-700 text-slate-100"
                                  >
                                    {opt.label}
                                  </option>
                                ))}
                              </Field>
                              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                <svg
                                  className="w-5 h-5 text-slate-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </div>
                          ) : type === "textarea" ? (
                            <Field
                              as="textarea"
                              name={name}
                              placeholder={placeholder}
                              rows={rows}
                              className={`w-full p-4 rounded-lg border bg-slate-700 text-slate-100 placeholder-slate-400 resize-none transition-all duration-200 ${
                                showError
                                  ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                                  : "border-slate-600 hover:border-emerald-500 focus:border-blue-500 focus:ring-emerald-500/20"
                              } focus:outline-none focus:ring-4 hover:shadow-sm focus:shadow-md`}
                            />
                          ) : type === "password" ? (
                            <div className="relative">
                              <Field
                                name={name}
                                type={
                                  (name === "password" && showPassword) ||
                                  (name === "confirmPassword" &&
                                    showConfirmPassword)
                                    ? "text"
                                    : "password"
                                }
                                placeholder={placeholder}
                                className={`w-full p-4 pr-12 rounded-lg border bg-slate-700 text-slate-100 placeholder-slate-400 transition-all duration-200 ${
                                  showError
                                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                                    : "border-slate-600 hover:border-emerald-500 focus:border-blue-500 focus:ring-emerald-500/20"
                                } focus:outline-none focus:ring-4 hover:shadow-sm focus:shadow-md`}
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  if (name === "password") {
                                    setShowPassword(!showPassword);
                                  } else if (name === "confirmPassword") {
                                    setShowConfirmPassword(
                                      !showConfirmPassword
                                    );
                                  }
                                }}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                              >
                                {(name === "password" && showPassword) ||
                                (name === "confirmPassword" &&
                                  showConfirmPassword)
                                  ? "👁️‍🗨️"
                                  : "👁️"}
                              </button>
                            </div>
                          ) : (
                            <Field
                              name={name}
                              type={type}
                              placeholder={placeholder}
                              className={`w-full p-4 rounded-lg border bg-slate-700 text-slate-100 placeholder-slate-400 transition-all duration-200 ${
                                showError
                                  ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                                  : "border-slate-600 hover:border-emerald-500 focus:border-blue-500 focus:ring-emerald-500/20"
                              } focus:outline-none focus:ring-4 hover:shadow-sm focus:shadow-md`}
                            />
                          )}

                          {showError && (
                            <div
                              className={`text-red-400 mt-2 text-sm font-medium ${styles.errorMessage}`}
                            >
                              {errors[key]}
                            </div>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>

                {/* Terms and conditions */}
                <div
                  className={`flex items-start space-x-3 p-4 bg-slate-800/50 rounded-lg border border-slate-600/50 ${styles.termsContainer}`}
                >
                  <div className="flex items-center h-5">
                    <Field
                      type="checkbox"
                      name="termsAccepted"
                      id="termsAccepted"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="termsAccepted"
                      className="relative flex items-center cursor-pointer"
                    >
                      <div className="w-5 h-5 border-2 border-slate-500 rounded peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-blue-500 peer-checked:border-transparent transition-all duration-200 hover:border-emerald-400 flex items-center justify-center">
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
                    </label>
                  </div>
                  <div className="text-sm">
                    <label
                      htmlFor="termsAccepted"
                      className="font-medium text-slate-200 cursor-pointer"
                    >
                      I agree to the{" "}
                      <button
                        type="button"
                        className="text-emerald-400 hover:text-emerald-300 underline font-semibold"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        className="text-blue-400 hover:text-blue-300 underline font-semibold"
                      >
                        Privacy Policy
                      </button>
                    </label>
                  </div>
                </div>
                {errors.termsAccepted && touched.termsAccepted && (
                  <div
                    className={`text-red-400 text-sm font-medium ${styles.errorMessage}`}
                  >
                    {errors.termsAccepted}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-500/30 overflow-hidden group ${styles.submitButton}`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </span>
                </button>
              </Form>
            )}
          </Formik>

          {/* Login link */}
          <div className="mt-8 pt-6 border-t border-slate-600">
            <p className="text-center text-slate-300 text-sm">
              Already have an account?{" "}
              <button
                onClick={() => router.push("/login")}
                className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors duration-200"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
