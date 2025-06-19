"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import { ILogin } from "src/interfaces/ILogin";
import { validateLogin } from "src/helpers/validateLogin";
import { useRouter } from "next/navigation";
import { getUser, fakeLogin } from "src/helpers/authFunctions";

const initialValues: ILogin = {
  email: "",
  password: "",
  rememberMe: false,
};

const LoginView: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (values: ILogin) => {
    const registeredUser = getUser();

    if (
      registeredUser &&
      registeredUser.email === values.email &&
      registeredUser.password === values.password
    ) {
      console.log("Login exitoso:", registeredUser);
      fakeLogin(registeredUser.role); // Guarda el rol en localStorage
      router.push("/dashboard");
    } else {
      alert("Email o contraseña incorrectos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#283618] to-[#4a5a32] px-4">
      <div className="w-full max-w-md bg-[#3a4a25] rounded-3xl shadow-2xl p-10 border border-[#5a703a]">
        <h1 className="text-4xl font-extrabold text-[#b8c67a] mb-8 text-center">
          Login
        </h1>

        <Formik
          initialValues={initialValues}
          validate={validateLogin}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#b8c67a] font-semibold mb-1"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className={`w-full p-3 rounded-md border bg-[#283618] text-[#d9e4c8] placeholder-[#a5b38a] ${
                    errors.email && touched.email
                      ? "border-red-600"
                      : "border-[#5a703a]"
                  } focus:outline-none focus:ring-2 focus:ring-[#9caf6f]`}
                />
                {errors.email && touched.email && (
                  <div className="text-red-600 mt-1 text-sm">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-[#b8c67a] font-semibold mb-1"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className={`w-full p-3 rounded-md border bg-[#283618] text-[#d9e4c8] placeholder-[#a5b38a] ${
                    errors.password && touched.password
                      ? "border-red-600"
                      : "border-[#5a703a]"
                  } focus:outline-none focus:ring-2 focus:ring-[#9caf6f]`}
                />
                {errors.password && touched.password && (
                  <div className="text-red-600 mt-1 text-sm">
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="flex items-center">
                <Field
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="h-5 w-5 text-[#9caf6f] focus:ring-[#9caf6f] border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-[#b8c67a] font-semibold"
                >
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#6b7b3a] hover:bg-[#4a5a20] text-[#d9e4c8] font-bold py-3 rounded-xl transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginView;
