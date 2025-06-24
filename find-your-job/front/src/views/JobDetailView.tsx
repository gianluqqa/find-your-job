import React from "react";
import { jobsArray } from "src/helpers/jobsArray";
import { IPropsId } from "src/interfaces/IPropsId";

const JobDetailView: React.FC<IPropsId> = ({ params }) => {
  const jobById = jobsArray.find((j) => j.id === params.id);

  if (!jobById) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 flex items-center justify-center">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <p className="text-white text-lg">Job with ID {params.id} not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[120vh] pt-30 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-gray-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-slate-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 p-4 max-w-7xl mx-auto">
        {/* Job Header Card */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-xl mb-4">
          <h1 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-gray-300 to-slate-300 bg-clip-text text-transparent">
            {jobById.title}
          </h1>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/5 mb-4">
            <p className="text-gray-300 leading-relaxed text-sm">
              {jobById.description}
            </p>
          </div>

          {/* Call to Action Button */}
          <button className="w-full bg-gradient-to-r from-gray-700 to-slate-700 hover:from-gray-600 hover:to-slate-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.01]">
            Apply Now
          </button>
        </div>

        {/* Job Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Company Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <h3 className="text-sm font-semibold text-gray-300">Company</h3>
            </div>
            <p className="text-white font-bold text-lg">{jobById.company}</p>
          </div>

          {/* Location Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <h3 className="text-sm font-semibold text-slate-300">Location</h3>
            </div>
            <p className="text-white font-bold text-lg">{jobById.location}</p>
          </div>

          {/* Category Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <h3 className="text-sm font-semibold text-gray-400">Category</h3>
            </div>
            <p className="text-white font-bold text-lg">{jobById.category}</p>
          </div>

          {/* Salary Card */}
          <div className="bg-gradient-to-br from-gray-700/20 to-slate-700/20 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <h3 className="text-sm font-semibold text-green-400">Salary</h3>
            </div>
            <p className="text-white font-bold text-xl">{jobById.salary}</p>
            <p className="text-gray-400 text-xs mt-1">Annual • Negotiable</p>
          </div>

          {/* Date Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
              <h3 className="text-sm font-semibold text-yellow-400">Posted</h3>
            </div>
            <p className="text-white font-bold text-lg">{jobById.createdAt}</p>
            <p className="text-gray-400 text-xs mt-1">A few days ago</p>
          </div>

          {/* Actions Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-xl">
            <h3 className="text-sm font-semibold text-white mb-3">Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-gradient-to-r from-gray-600/30 to-gray-600/20 hover:from-gray-600/40 hover:to-gray-600/30 text-gray-300 font-medium py-2 px-3 rounded-lg border border-gray-500/20 transition-all duration-300 hover:scale-[1.02] text-sm">
                View Company
              </button>
              <button className="w-full bg-gradient-to-r from-slate-600/30 to-slate-600/20 hover:from-slate-600/40 hover:to-slate-600/30 text-slate-300 font-medium py-2 px-3 rounded-lg border border-slate-500/20 transition-all duration-300 hover:scale-[1.02] text-sm">
                Similar Jobs
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetailView;