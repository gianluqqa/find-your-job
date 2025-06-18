"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IRegister } from "src/interfaces/IRegister";

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

const RegisterView: React.FC = () => {
  const handleSubmit = (values: IRegister) => {
    console.log("Form data:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f9f4] px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 border border-[#d4eac7]">
        <h1 className="text-3xl font-bold text-[#3a5a40] mb-6 text-center">Create Your Account</h1>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#3a5a40]">Full Name</label>
                <Field name="name" className="w-full p-2 border border-[#a3b18a] rounded-md focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3a5a40]">Email</label>
                <Field name="email" type="email" className="w-full p-2 border border-[#a3b18a] rounded-md focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3a5a40]">Password</label>
                <Field name="password" type="password" className="w-full p-2 border border-[#a3b18a] rounded-md focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3a5a40]">Confirm Password</label>
                <Field name="confirmPassword" type="password" className="w-full p-2 border border-[#a3b18a] rounded-md focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3a5a40]">Role</label>
                <Field as="select" name="role" className="w-full p-2 border border-[#a3b18a] rounded-md">
                  <option value="candidate">Candidate</option>
                  <option value="recruiter">Recruiter</option>
                </Field>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3a5a40]">Phone (Optional)</label>
                <Field name="phone" className="w-full p-2 border border-[#a3b18a] rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3a5a40]">Country</label>
                <Field name="country" className="w-full p-2 border border-[#a3b18a] rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3a5a40]">State / Province</label>
                <Field name="state" className="w-full p-2 border border-[#a3b18a] rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3a5a40]">City</label>
                <Field name="city" className="w-full p-2 border border-[#a3b18a] rounded-md" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#3a5a40]">About You (Optional)</label>
                <Field as="textarea" name="about" rows={3} className="w-full p-2 border border-[#a3b18a] rounded-md" />
              </div>
              <div className="md:col-span-2 flex items-center space-x-2">
                <Field type="checkbox" name="termsAccepted" className="w-4 h-4 text-[#3a5a40]" />
                <label className="text-sm text-[#3a5a40]">I accept the Terms and Conditions</label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-[#588157] hover:bg-[#3a5a40] text-white font-semibold py-2 rounded-md transition-all duration-200"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterView;
