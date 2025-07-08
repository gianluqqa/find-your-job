"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IRegister } from "src/interfaces/IRegister";
import { validateRegisterRecruiter } from "src/helpers/validateRegisterRecruiter";
import { IRegisterErrors } from "src/interfaces/IRegisterErrorsRecruiter";
import { fakeLogin } from "src/helpers/authFunctions";

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
    about: "",
    company: "",
    category: "",
    termsAccepted: false,
    role: "recruiter",
  });

  const [errors, setErrors] = useState<IRegisterErrors>({});

  const categories = [
    "Tecnología y Desarrollo",
    "Marketing y Ventas",
    "Recursos Humanos",
    "Finanzas y Contabilidad",
    "Salud y Medicina"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRegisterRecruiter(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    localStorage.setItem("registeredUser", JSON.stringify(formData));
    fakeLogin(formData.role as "candidate" | "recruiter");

    alert("Registration successful! Check console for data.");
    router.push("/login");
  };

 return (
    <div className="min-h-screen relative overflow-hidden py-8 px-4">
      {/* Enhanced gradient background similar to the job site */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-emerald-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 via-transparent to-emerald-700/50"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-emerald-800/40 to-emerald-600/30"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-emerald-500/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-emerald-600/60 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-emerald-400/40 rounded-full animate-pulse"></div>
      
      {/* Larger subtle shapes */}
      <div className="absolute top-16 right-1/4 w-12 h-12 bg-gradient-to-br from-emerald-500/8 to-emerald-600/5 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute bottom-16 left-1/5 w-16 h-16 bg-gradient-to-tr from-emerald-600/6 to-emerald-500/8 rounded-lg -rotate-12 animate-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto mt-16 md:mt-24">
        <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-emerald-900/95 backdrop-blur-lg rounded-lg shadow-2xl p-8 md:p-12 border-2 border-emerald-500/50 shadow-emerald-500/30 ring-1 ring-emerald-400/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-3 drop-shadow-lg">
              Register Recruiter
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                />
                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                />
                {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="group">
                  <label className="block text-emerald-800 text-sm font-medium mb-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  />
                  {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
                </div>

                <div className="group">
                  <label className="block text-emerald-800 text-sm font-medium mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  />
                  {errors.state && <p className="text-red-400 text-sm mt-1">{errors.state}</p>}
                </div>

                <div className="group">
                  <label className="block text-emerald-800 text-sm font-medium mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                  />
                  {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city}</p>}
                </div>
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">About You</label>
                <textarea
                  name="about"
                  placeholder="Tell us about yourself and your recruiting experience..."
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 resize-none transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                />
                {errors.about && <p className="text-red-400 text-sm mt-1">{errors.about}</p>}
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 placeholder-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                />
                {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
              </div>

              <div className="group">
                <label className="block text-emerald-800 text-sm font-medium mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-4 bg-white/10 border border-emerald-400/30 rounded-lg text-emerald-900 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/15 group-hover:border-emerald-400/50"
                >
                  <option value="" className="bg-gray-800 text-gray-300">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-3 justify-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={(e) =>
                  setFormData({ ...formData, termsAccepted: e.target.checked })
                }
                className="w-5 h-5 text-emerald-400 bg-white/10 border-emerald-400/50 rounded focus:ring-emerald-400 focus:ring-2 accent-emerald-400"
              />
              <label className="text-emerald-900 text-sm md:text-base">
                I accept the <span className="text-emerald-800 underline cursor-pointer hover:text-emerald-900">terms and conditions</span>
              </label>
            </div>
            {errors.termsAccepted && <p className="text-red-400 text-sm text-center">{errors.termsAccepted}</p>}

            <div className="flex justify-center">
              <button 
                type="submit"
                onClick={handleSubmit}
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 shadow-lg hover:shadow-emerald-500/40 border border-emerald-500/50 min-w-[200px]"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRecruiterView;