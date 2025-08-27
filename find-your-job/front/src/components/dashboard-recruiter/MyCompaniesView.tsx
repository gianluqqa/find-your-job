"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "src/context/useAuth";
import { getCompaniesByUserId } from "src/api/recruiterApi";
import { ICompany } from "src/interfaces/ICompany";

const MyCompaniesView = () => {
  const { user } = useAuth();
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Obtener companies del recruiter
  const fetchCompaniesByUserId = async () => {
    if (!user?.id) return;

    try {
      const companiesData = await getCompaniesByUserId(user.id);
      setCompanies(companiesData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching companies:", error);
      setLoading(false);
    }
  };

  // 🔹 useEffect que se ejecuta cuando el usuario esté disponible
  useEffect(() => {
    if (user?.id) {
      fetchCompaniesByUserId();
    }
  }, [user?.id]);

  // 🔹 Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0D1F23] via-[#132E35] to-[#2D4A53] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center p-8 flex items-center justify-center">
          <div>
            <div className="animate-spin w-8 h-8 border-2 border-[#69818D]/30 border-t-[#AFB3B7] rounded-full mx-auto mb-4"></div>
            <p className="text-[#69818D]">Loading companies...</p>
          </div>
        </div>
      </div>
    );
  }

  // 🔹 No companies found
  if (companies.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0D1F23] via-[#132E35] to-[#2D4A53] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center p-8 flex items-center justify-center">
          <p className="text-[#69818D]">No companies found for this recruiter.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1F23] via-[#132E35] to-[#2D4A53] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#69818D]/20 to-[#AFB3B7]/10 backdrop-blur-xl rounded-sm shadow-2xl border border-[#5A636A]/30 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-[#0D1F23] to-[#132E35] px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-7 md:py-8 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#AFB3B7] to-white bg-clip-text text-transparent mb-2">
              My Companies
            </h1>
            <p className="text-[#69818D] text-sm sm:text-base lg:text-lg">
              Manage and monitor your companies
            </p>
            <div className="mt-4 text-[#AFB3B7]">
              <span className="text-2xl font-bold text-white">{companies.length}</span> company{companies.length !== 1 ? 'ies' : 'y'}
            </div>
          </div>
        </div>

        {/* Companies List */}
        <div className="space-y-6 sm:space-y-8">
          {companies.map((company) => (
            <div key={company.id} className="bg-gradient-to-br from-[#69818D]/20 to-[#AFB3B7]/10 backdrop-blur-xl rounded-sm shadow-2xl border border-[#5A636A]/30 overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Company Info */}
                  <div className="flex-1 space-y-4">
                    {/* Company Name */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      {company.name}
                    </h2>
                    
                    {/* Company Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-[#132E35]/30 rounded-sm p-4 border border-[#2D4A53]/50">
                        <p className="text-[#69818D] text-sm uppercase tracking-wider mb-2 font-semibold">Jobs Count</p>
                        <p className="text-[#AFB3B7] font-medium text-lg">{company.jobs?.length || 0}</p>
                      </div>
                      
                      {company.image && (
                        <div className="bg-[#132E35]/30 rounded-sm p-4 border border-[#2D4A53]/50">
                          <p className="text-[#69818D] text-sm uppercase tracking-wider mb-2 font-semibold">Image</p>
                          <p className="text-[#AFB3B7] font-medium text-base">{company.image}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCompaniesView;
