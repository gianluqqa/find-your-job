import React, { useState } from "react";
import { IFilterNavbar } from "src/interfaces/IFilterNavbar";

const NavbarFilterJob = ({
  onFilterChange,
}: {
  onFilterChange: (filters: IFilterNavbar) => void;
}) => {
  const [filters, setFilters] = useState<IFilterNavbar>({
    search: "",
    location: "",
    modality: "",
    salary: "",
    createdAt: "",
    type: "",
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const locations = [
    "", "Buenos Aires", "Córdoba", "Catamarca", "Chaco", "Chubut", "Corrientes", 
    "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", 
    "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", 
    "Santiago del Estero", "Tierra del Fuego", "Tucumán"
  ];

  const modalities = ["", "On-site", "Remote", "Hybrid"];
  const salaries = ["", "All", "0-30000", "30000-50000", "50000-70000", "70000-100000", "100000+"];
  const createdAtOptions = ["", "All", "Last 7 days", "Last 30 days", "Last 90 days"];
  const types = ["", "Full-Time", "Part-Time", "Freelance", "Internship", "Temporary"];
  const categories = ["", "IT & Software", "Marketing", "Design", "Sales", "Finance"];

  return (
    <nav className="bg-slate-900 p-4 shadow-lg rounded-lg border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          
          {/* Search Input */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <input
              name="search"
              value={filters.search}
              onChange={handleChange}
              placeholder="Search jobs..."
              className="w-full bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 p-3 rounded-lg transition-all duration-200 outline-none"
            />
          </div>

          {/* Location Select */}
          <div>
            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="w-full bg-slate-800 text-slate-100 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg transition-all duration-200 outline-none cursor-pointer"
            >
              <option value="">All Locations</option>
              {locations.slice(1).map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Modality Select */}
          <div>
            <select
              name="modality"
              value={filters.modality}
              onChange={handleChange}
              className="w-full bg-slate-800 text-slate-100 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg transition-all duration-200 outline-none cursor-pointer"
            >
              <option value="">All Modalities</option>
              {modalities.slice(1).map((modality) => (
                <option key={modality} value={modality}>
                  {modality}
                </option>
              ))}
            </select>
          </div>

          {/* Type Select */}
          <div>
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full bg-slate-800 text-slate-100 border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 p-3 rounded-lg transition-all duration-200 outline-none cursor-pointer"
            >
              <option value="">All Types</option>
              {types.slice(1).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Category Select */}
          <div>
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="w-full bg-slate-800 text-slate-100 border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 p-3 rounded-lg transition-all duration-200 outline-none cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.slice(1).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Salary Select */}
          <div>
            <select
              name="salary"
              value={filters.salary}
              onChange={handleChange}
              className="w-full bg-slate-800 text-slate-100 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg transition-all duration-200 outline-none cursor-pointer"
            >
              <option value="">All Salaries</option>
              {salaries.slice(1).map((salary) => (
                <option key={salary} value={salary}>
                  {salary === "100000+" ? "$100,000+" : 
                   salary === "All" ? "All Ranges" :
                   `$${salary.replace("-", " - $")}`}
                </option>
              ))}
            </select>
          </div>

          {/* Created At Select */}
          <div>
            <select
              name="createdAt"
              value={filters.createdAt}
              onChange={handleChange}
              className="w-full bg-slate-800 text-slate-100 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg transition-all duration-200 outline-none cursor-pointer"
            >
              <option value="">Any Time</option>
              {createdAtOptions.slice(1).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-center">
            <button
              onClick={() => onFilterChange(filters)}
              className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold p-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Search Jobs
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavbarFilterJob;