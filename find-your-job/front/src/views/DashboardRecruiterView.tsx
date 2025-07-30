"use client";
import React from "react";
import LoadingSpinner from "src/components/dashboardCandidate/LoadingSpinner";
import { useAuth } from "src/context/useAuth";

const DashboardRecruiterView: React.FC = () => {
  const { user } = useAuth(); // sacamos el user del contexto

  // Si todavía no cargó el user, mostramos el loader
  if (!user) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#3a4a25] rounded-3xl shadow-lg text-[#d9e4c8] space-y-8">
      {/* Header del Dashboard */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-[#b8c67a]">Recruiter Dashboard</h1>
        <p className="text-[#a5b38a]">Manage your profile and job postings</p>
      </div>

      {/* Perfil Principal */}
      <div className="bg-[#2a3a1a] rounded-2xl p-6 border border-[#5a703a]">
        <h2 className="text-2xl font-semibold mb-4 text-[#b8c67a]">Profile Information</h2>
        <div className="flex items-start space-x-6">
          <img 
            src={user.image || "https://via.placeholder.com/150"} 
            alt={user.name} 
            className="w-32 h-32 rounded-full border-4 border-[#5a703a] object-cover" 
          />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#d9e4c8]">{user.name}</h3>
            <p className="text-[#a5b38a] mt-1">Role: {user.role}</p>
            <div className="mt-3">
              <p className="text-[#93a878] italic">{user.about || "No description available"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Información de Ubicación */}
      <div className="bg-[#2a3a1a] rounded-2xl p-6 border border-[#5a703a]">
        <h2 className="text-2xl font-semibold mb-4 text-[#b8c67a]">Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#3a4a25] p-4 rounded-lg">
            <p className="text-[#a5b38a] text-sm">Country</p>
            <p className="text-[#d9e4c8] font-semibold">{user.country || "Not specified"}</p>
          </div>
          <div className="bg-[#3a4a25] p-4 rounded-lg">
            <p className="text-[#a5b38a] text-sm">State</p>
            <p className="text-[#d9e4c8] font-semibold">{user.state || "Not specified"}</p>
          </div>
          <div className="bg-[#3a4a25] p-4 rounded-lg">
            <p className="text-[#a5b38a] text-sm">City</p>
            <p className="text-[#d9e4c8] font-semibold">{user.city || "Not specified"}</p>
          </div>
        </div>
      </div>

      {/* Grid de dos columnas para el resto del contenido */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Columna Izquierda */}
        <div className="space-y-6">
          {/* Compañías */}
          <div className="bg-[#2a3a1a] rounded-2xl p-6 border border-[#5a703a]">
            <h2 className="text-2xl font-semibold mb-4 text-[#b8c67a]">Companies</h2>
            {Array.isArray(user.companies) && user.companies.length > 0 ? (
              <div className="space-y-3">
                {user.companies.map((comp, index) => (
                  <div key={index} className="bg-[#3a4a25] p-4 rounded-lg">
                    <p className="text-[#d9e4c8] font-semibold">{comp.name || `Company ${index + 1}`}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#a5b38a] italic">No companies registered</p>
            )}
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="space-y-6">
          {/* Jobs Posted */}
          <div className="bg-[#2a3a1a] rounded-2xl p-6 border border-[#5a703a]">
            <h2 className="text-2xl font-semibold mb-4 text-[#b8c67a]">Job Postings</h2>
            {Array.isArray(user.jobs) && user.jobs.length > 0 ? (
              <div className="space-y-3">
                {user.jobs.map((job, index) => (
                  <div key={index} className="bg-[#3a4a25] p-4 rounded-lg">
                    <p className="text-[#d9e4c8] font-semibold">{job.title || `Job ${index + 1}`}</p>
                    {job.description && (
                      <p className="text-[#a5b38a] text-sm mt-1">{job.description}</p>
                    )}
                    {job.salary && (
                      <p className="text-[#b8c67a] text-sm mt-1">Salary: {job.salary}</p>
                    )}
                    {job.location && (
                      <p className="text-[#93a878] text-xs mt-1">Location: {job.location}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#a5b38a] italic">No job postings yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRecruiterView;
