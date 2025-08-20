"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "src/context/useAuth";
import { createJob, getAllCompanies, getAllCategories } from "src/api/recruiterApi";
import { ICreateJob } from "src/interfaces/IJob";
import { ICategory } from "src/interfaces/ICategory";
import { ICompany } from "src/interfaces/ICompany";

const PostAJobView = () => {
  const { user } = useAuth();

  // 🔹 estado para el formulario
  const [formData, setFormData] = useState<ICreateJob>({
    title: "",
    description: "",
    location: "",
    category: "",
    salary: "",
    status: "Active",
    modality: "On-site",
    type: "Full-Time",
    vacancies: 1,
    requirements: "",
    benefits: "",
    userId: user?.id || "", // recruiter id
    companyId: "", // seleccionada desde dropdown
  });

  // 🔹 estados para categorías y empresas
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [companies, setCompanies] = useState<ICompany[]>([]);

  // 🔹 traer categorías
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // 🔹 traer empresas
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getAllCompanies();
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    if (user?.id) {
      fetchCompanies();
    }
  }, [user]);

  // 🔹 manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 manejar el submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!formData.userId || !formData.companyId || !formData.category) {
        alert("You must select a company, category, and be logged in.");
        return;
      }

      await createJob(formData);
      alert("Job created successfully!");
      setFormData({
        ...formData,
        title: "",
        description: "",
        location: "",
        category: "",
        salary: "",
        status: "Active",
        vacancies: 1,
        requirements: "",
        benefits: "",
        companyId: "",
      });
    } catch (error) {
      console.error("Error creating job:", error);
      alert("Error creating job");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1F23] via-[#132E35] to-[#2D4A53] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#69818D]/20 to-[#AFB3B7]/10 backdrop-blur-xl rounded-sm shadow-2xl border border-[#5A636A]/30 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0D1F23] to-[#132E35] px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-7 md:py-8 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#AFB3B7] to-white bg-clip-text text-transparent mb-2">Create a Job</h2>
              <p className="text-[#69818D] text-sm sm:text-base lg:text-lg">Post your next opportunity</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Primera fila: Title, Location, Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {/* 🔹 Title */}
              <div>
                <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white placeholder-[#69818D] focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter job title..."
                />
              </div>

              {/* 🔹 Location */}
              <div>
                <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white placeholder-[#69818D] focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter location..."
                />
              </div>

              {/* 🔹 Category */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent text-sm sm:text-base"
                >
                  <option value="" className="bg-[#0D1F23] text-[#69818D]">
                    -- Select a Category --
                  </option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name} className="bg-[#0D1F23] text-white">
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Segunda fila: Company, Salary, Vacancies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {/* 🔹 Company */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Company</label>
                <select
                  name="companyId"
                  value={formData.companyId}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent text-sm sm:text-base"
                >
                  <option value="" className="bg-[#0D1F23] text-[#69818D]">
                    -- Select a Company --
                  </option>
                  {companies.map((comp) => (
                    <option key={comp.id} value={comp.id} className="bg-[#0D1F23] text-white">
                      {comp.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 🔹 Salary */}
              <div>
                <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Salary</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white placeholder-[#69818D] focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter salary range..."
                />
              </div>

              {/* 🔹 Vacancies */}
              <div>
                <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Vacancies</label>
                <input
                  type="number"
                  name="vacancies"
                  value={formData.vacancies}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white placeholder-[#69818D] focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Tercera fila: Modality, Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {/* 🔹 Modality */}
              <div>
                <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Modality</label>
                <select
                  name="modality"
                  value={formData.modality}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent text-sm sm:text-base"
                >
                  <option value="On-site" className="bg-[#0D1F23] text-white">
                    On-site
                  </option>
                  <option value="Remote" className="bg-[#0D1F23] text-white">
                    Remote
                  </option>
                  <option value="Hybrid" className="bg-[#0D1F23] text-white">
                    Hybrid
                  </option>
                </select>
              </div>

              {/* 🔹 Type */}
              <div>
                <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent text-sm sm:text-base"
                >
                  <option value="Full-Time" className="bg-[#0D1F23] text-white">
                    Full-Time
                  </option>
                  <option value="Part-Time" className="bg-[#0D1F23] text-white">
                    Part-Time
                  </option>
                  <option value="Freelance" className="bg-[#0D1F23] text-white">
                    Freelance
                  </option>
                  <option value="Internship" className="bg-[#0D1F23] text-white">
                    Internship
                  </option>
                  <option value="Temporary" className="bg-[#0D1F23] text-white">
                    Temporary
                  </option>
                </select>
              </div>
            </div>

            {/* Cuarta fila: Description (ancho completo) */}
            <div>
              <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white placeholder-[#69818D] focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent resize-none text-sm sm:text-base"
                placeholder="Describe the job position..."
              />
            </div>

            {/* Quinta fila: Requirements y Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {/* 🔹 Requirements */}
              <div>
                <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Requirements</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white placeholder-[#69818D] focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent resize-none text-sm sm:text-base"
                  placeholder="List job requirements..."
                />
              </div>

              {/* 🔹 Benefits */}
              <div>
                <label className="block text-[#AFB3B7] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Benefits</label>
                <textarea
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white placeholder-[#69818D] focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent resize-none text-sm sm:text-base"
                  placeholder="List job benefits..."
                />
              </div>
            </div>

            {/* 🔹 Submit */}
            <div className="flex justify-center pt-6 sm:pt-8">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#69818D] to-[#AFB3B7] text-[#0D1F23] font-bold text-base sm:text-lg rounded-sm shadow-2xl hover:shadow-[#69818D]/50 hover:from-[#AFB3B7] hover:to-[#69818D] focus:outline-none focus:ring-4 focus:ring-[#69818D]/50 transition-all duration-200"
              >
                Create Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAJobView;
