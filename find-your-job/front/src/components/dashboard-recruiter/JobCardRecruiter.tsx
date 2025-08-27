"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "src/context/useAuth";
import { getJobsByRecruiter } from "src/api/recruiterApi";
import { IJob } from "src/interfaces/IJob";

const JobCardRecruiter: React.FC = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Obtener jobs del recruiter
  const fetchJobsByRecruiter = async () => {
    if (!user?.id) return;
    
    try {
      const jobsData = await getJobsByRecruiter(user.id);
      setJobs(jobsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };

  // 🔹 useEffect que se ejecuta cuando el usuario esté disponible
  useEffect(() => {
    if (user?.id) {
      fetchJobsByRecruiter();
    }
  }, [user?.id]);

  // 🔹 Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0D1F23] via-[#132E35] to-[#2D4A53] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center p-8 flex items-center justify-center">
          <div>
            <div className="animate-spin w-8 h-8 border-2 border-[#69818D]/30 border-t-[#AFB3B7] rounded-full mx-auto mb-4"></div>
            <p className="text-[#69818D]">Loading jobs...</p>
          </div>
        </div>
      </div>
    );
  }

  // 🔹 No jobs found
  if (jobs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0D1F23] via-[#132E35] to-[#2D4A53] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center p-8 flex items-center justify-center">
          <p className="text-[#69818D]">No jobs found for this recruiter.</p>
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
              My Job Postings
            </h1>
            <p className="text-[#69818D] text-sm sm:text-base lg:text-lg">
              Manage and monitor your job listings
            </p>
            <div className="mt-4 text-[#AFB3B7]">
              <span className="text-2xl font-bold text-white">{jobs.length}</span> active listing{jobs.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4 sm:space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-gradient-to-br from-[#69818D]/20 to-[#AFB3B7]/10 backdrop-blur-xl rounded-sm shadow-2xl border border-[#5A636A]/30 overflow-hidden">
              <div className="p-3 sm:p-4 lg:p-5">
                <div className="flex-1 space-y-3">
                  {/* Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">
                      {job.title}
                    </h3>
                  </div>

                  {/* Job Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                    <div className="bg-[#132E35]/30 rounded-sm p-2 border border-[#2D4A53]/50">
                      <p className="text-[#69818D] text-xs uppercase tracking-wider mb-1">Company</p>
                      <p className="text-[#AFB3B7] font-medium text-xs sm:text-sm">{job.company?.name || 'N/A'}</p>
                    </div>

                    <div className="bg-[#132E35]/30 rounded-sm p-2 border border-[#2D4A53]/50">
                      <p className="text-[#69818D] text-xs uppercase tracking-wider mb-1">Location</p>
                      <p className="text-[#AFB3B7] font-medium text-xs sm:text-sm">{job.location}</p>
                    </div>

                    <div className="bg-[#132E35]/30 rounded-sm p-2 border border-[#2D4A53]/50">
                      <p className="text-[#69818D] text-xs uppercase tracking-wider mb-1">Modality</p>
                      <p className="text-[#AFB3B7] font-medium text-xs sm:text-sm">{job.modality}</p>
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

export default JobCardRecruiter;