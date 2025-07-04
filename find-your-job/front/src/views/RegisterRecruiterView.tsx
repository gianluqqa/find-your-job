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
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Register Recruiter</h2>

          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                {errors.state && <p className="text-red-400 text-sm mt-1">{errors.state}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city}</p>}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <textarea
                name="about"
                placeholder="About you"
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
              />
              {errors.about && <p className="text-red-400 text-sm mt-1">{errors.about}</p>}
            </div>

            <div>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
            </div>

            <div>
              <select
                name="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="" className="text-gray-400">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category} className="text-white">
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={(e) =>
                  setFormData({ ...formData, termsAccepted: e.target.checked })
                }
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label className="text-sm text-gray-300">
                Accept terms and conditions
              </label>
            </div>
            {errors.termsAccepted && <p className="text-red-400 text-sm">{errors.termsAccepted}</p>}

            <button 
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRecruiterView;