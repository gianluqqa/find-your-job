"use client";
import React, { useState, useEffect } from "react";
import { ICategory } from "src/interfaces/ICategory";
import { useAuth } from "src/context/useAuth";
import { createCompany, getAllCategories } from "src/api/recruiterApi";
import { ICreateCompany } from "src/interfaces/ICompany";

const CreateCompanyView: React.FC = () => {
  const { user } = useAuth();

  // Estados para manejar las categorías y UI
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Estado del formulario
  const [formData, setFormData] = useState<ICreateCompany>({
    name: "",
    description: "",
    image: "",
    category: "",
    userId: "",
  });

  // Sincronizar userId cuando se cargue el user
  useEffect(() => {
    if (user?.id) {
      setFormData((prev) => ({ ...prev, userId: user.id }));
    }
  }, [user]);

  // Traer categorías al cargar el componente
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (err) {
        console.error(err);
        setError("Could not load categories");
      }
    };
    fetchCategories();
  }, []);

  // Manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validaciones básicas
    if (!formData.name || !formData.category) {
      setError("Company name and category are required");
      return;
    }

    if (!formData.userId) {
      setError("User not found or not authorized");
      return;
    }

    // Enviar datos al servidor
    try {
      setLoading(true);
      console.log("Payload a enviar:", formData); // Depuración
      await createCompany(formData);
      setLoading(false);
      alert("Company created successfully!");

      // Resetear formulario
      setFormData({
        name: "",
        description: "",
        image: "",
        category: "",
        userId: user?.id || "",
      });
    } catch (err: any) {
      setLoading(false);
      const msg = err.response?.data?.message || "Error creating company";
      setError(msg);
      console.error("Error API:", err.response || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2M7 21h2m3-18v18m3-18v18m3-18v18"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Create Company</h2>
          <p className="text-gray-300 text-sm sm:text-base">Build your company profile to attract top talent</p>
        </div>

        {/* Form Container */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6 sm:p-8">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg backdrop-blur-sm">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-400 mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-300 text-sm font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter company name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-all duration-200 text-gray-100 placeholder-gray-400"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Tell us about your company..."
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-all duration-200 text-gray-100 placeholder-gray-400 resize-none"
              />
            </div>

            {/* Company Image URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Company Logo URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/logo.png (optional)"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-all duration-200 text-gray-100 placeholder-gray-400"
              />
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Industry Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-all duration-200 text-gray-100 cursor-pointer"
              >
                <option value="" className="text-gray-400 bg-gray-700">
                  Select an industry category
                </option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name} className="text-gray-100 bg-gray-700">
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 hover:bg-green-600 disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed mt-6"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Creating Company...</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span>Create Company</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-400 mt-4 sm:mt-6">
          Fields marked with * are required
        </p>
      </div>
    </div>
  );
};

export default CreateCompanyView;