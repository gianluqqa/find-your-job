"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "src/context/useAuth";
import { getAllJobs, deleteJob, editJob } from "src/api/recruiterApi";
import { IJob } from "src/interfaces/IJob";

const JobsApplicationsView = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingJobId, setEditingJobId] = useState<string | null>(null);

  // 🔹 Traer jobs
  const fetchJobs = async () => {
    try {
      const jobsData = await getAllJobs();
      setJobs(jobsData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // 🔹 Eliminar job
  const handleDeleteJob = async (jobId: string) => {
    if (!user?.id) return;
    if (!confirm("Are you sure you want to delete this job? This action cannot be undone.")) return;
    
    try {
      await deleteJob(jobId, user.id);
      fetchJobs();
    } catch (err) {
      console.error("Error al eliminar el trabajo:", err);
      alert("Failed to delete job");
    }
  };

  // 🔹 Cambiar status
  const handleChangeStatus = async (job: IJob, newStatus: "Active" | "Expired" | "Urgent") => {
    if (!user?.id) return;

    try {
      const updatedJob: IJob = {
        ...job,
        status: newStatus,
        userId: user.id,
      };

      await editJob(job.id, updatedJob);
      setEditingJobId(null);
      fetchJobs();
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status");
    }
  };

  // 🔹 Función para obtener el color del status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Urgent':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Expired':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-[#69818D]/20 text-[#69818D] border-[#69818D]/30';
    }
  };

  // 🔹 Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0D1F23] via-[#132E35] to-[#2D4A53] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#69818D]/20 to-[#AFB3B7]/10 backdrop-blur-xl rounded-sm shadow-2xl border border-[#5A636A]/30 p-8 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-[#69818D] border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-[#AFB3B7] text-lg">Loading jobs...</p>
          </div>
        </div>
      </div>
    );
  }

  // 🔹 Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0D1F23] via-[#132E35] to-[#2D4A53] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-red-500/20 to-red-400/10 backdrop-blur-xl rounded-sm shadow-2xl border border-red-500/30 p-8 text-center">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h2 className="text-red-400 text-xl font-bold mb-2">Error Loading Jobs</h2>
            <p className="text-red-300">{error}</p>
            <button 
              onClick={fetchJobs}
              className="mt-4 px-6 py-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-sm hover:bg-red-500/30 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
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
        {jobs.length === 0 ? (
          <div className="bg-gradient-to-br from-[#69818D]/20 to-[#AFB3B7]/10 backdrop-blur-xl rounded-sm shadow-2xl border border-[#5A636A]/30 p-8 sm:p-12 text-center">
            <div className="text-[#69818D] text-6xl mb-6">📋</div>
            <h2 className="text-[#AFB3B7] text-xl sm:text-2xl font-bold mb-4">No Job Postings Found</h2>
            <p className="text-[#69818D] mb-6">You haven't created any job postings yet.</p>
            <button className="px-6 py-3 bg-gradient-to-r from-[#69818D] to-[#AFB3B7] text-[#0D1F23] font-semibold rounded-sm hover:from-[#AFB3B7] hover:to-[#69818D] transition-all duration-200">
              Create Your First Job
            </button>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-gradient-to-br from-[#69818D]/20 to-[#AFB3B7]/10 backdrop-blur-xl rounded-sm shadow-2xl border border-[#5A636A]/30 overflow-hidden">
                <div className="p-3 sm:p-4 lg:p-5">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 lg:gap-6">
                    {/* Job Info */}
                    <div className="flex-1 space-y-3">
                      {/* Title and Status */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">
                          {job.title}
                        </h3>
                        
                        {/* Status Management */}
                        <div className="flex items-center gap-2">
                          {editingJobId === job.id ? (
                            <div className="flex items-center gap-2">
                              <select
                                value={job.status}
                                onChange={(e) => handleChangeStatus(job, e.target.value as "Active" | "Expired" | "Urgent")}
                                className="px-3 py-2 bg-[#132E35]/50 border border-[#2D4A53] rounded-sm text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#69818D] focus:border-transparent"
                                autoFocus
                              >
                                <option value="Active">Active</option>
                                <option value="Expired">Expired</option>
                                <option value="Urgent">Urgent</option>
                              </select>
                              <button
                                onClick={() => setEditingJobId(null)}
                                className="px-3 py-2 text-[#69818D] hover:text-[#AFB3B7] text-sm transition-colors duration-200"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setEditingJobId(job.id)}
                              className={`px-3 py-2 rounded-sm border text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 ${getStatusColor(job.status)}`}
                            >
                              {job.status}
                            </button>
                          )}
                        </div>
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
                          <p className="text-[#69818D] text-xs uppercase tracking-wider mb-1">Type</p>
                          <p className="text-[#AFB3B7] font-medium text-xs sm:text-sm">{job.type}</p>
                        </div>

                        <div className="bg-[#132E35]/30 rounded-sm p-2 border border-[#2D4A53]/50">
                          <p className="text-[#69818D] text-xs uppercase tracking-wider mb-1">Modality</p>
                          <p className="text-[#AFB3B7] font-medium text-xs sm:text-sm">{job.modality}</p>
                        </div>

                        {job.salary && (
                          <div className="bg-[#132E35]/30 rounded-sm p-2 border border-[#2D4A53]/50">
                            <p className="text-[#69818D] text-xs uppercase tracking-wider mb-1">Salary</p>
                            <p className="text-[#AFB3B7] font-medium text-xs sm:text-sm">{job.salary}</p>
                          </div>
                        )}

                        <div className="bg-[#132E35]/30 rounded-sm p-2 border border-[#2D4A53]/50">
                          <p className="text-[#69818D] text-xs uppercase tracking-wider mb-1">Vacancies</p>
                          <p className="text-[#AFB3B7] font-medium text-xs sm:text-sm">{job.vacancies}</p>
                        </div>

                        {job.category && (
                          <div className="bg-[#132E35]/30 rounded-sm p-2 border border-[#2D4A53]/50 col-span-2 sm:col-span-1">
                            <p className="text-[#69818D] text-xs uppercase tracking-wider mb-1">Category</p>
                            <p className="text-[#AFB3B7] font-medium text-xs sm:text-sm">{job.category}</p>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      {job.description && (
                        <div className="bg-[#132E35]/30 rounded-sm p-4 border border-[#2D4A53]/50">
                          <p className="text-[#69818D] text-xs uppercase tracking-wider mb-2">Description</p>
                          <p className="text-[#AFB3B7] leading-relaxed line-clamp-3">{job.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end">
                      <button 
                        onClick={() => handleDeleteJob(job.id)}
                        className="px-3 py-2 bg-gradient-to-r from-red-500/20 to-red-400/20 border border-red-500/30 text-red-400 rounded-sm hover:from-red-500/30 hover:to-red-400/30 hover:border-red-500/50 transition-all duration-200 text-xs font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsApplicationsView;