import React from "react";
import { IJob } from "src/interfaces/IJob";

const JobDetailView: React.FC<{ job: IJob }> = ({ job }) => {
  if (!job) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <p className="text-white text-lg">Job not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <main className="max-w-5xl mx-auto p-6">
        {/* Job Header */}
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 mb-6">
          <div className="mb-6">
            <span className="inline-block bg-emerald-900 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {job.company}
            </span>
            <h1 className="text-3xl font-bold text-white mb-4">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-slate-300 text-sm mb-4">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                {job.location}
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                {job.category}
              </span>
            </div>
            <button className="text-sm text-slate-400 hover:text-slate-300 underline transition-colors duration-200">
              View Company
            </button>
          </div>
          
          <div className="flex justify-end gap-3">
            <button className="p-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors duration-200" title="Save Job">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
            <button className="p-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors duration-200" title="Share Job">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Job Description */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
                Job Description
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-1 h-6 bg-emerald-500 rounded-full mr-3"></div>
                Requirements
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {job.requirements}
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-1 h-6 bg-teal-500 rounded-full mr-3"></div>
                Benefits
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {job.benefits}
              </p>
            </div>

            {/* Action Buttons */}
            <div>
              <div className="space-y-3">
                <button className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            </div>

          </div>

          {/* Right Column - Job Info */}
          <div className="space-y-3">
            
            {/* Salary */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h3 className="text-xs font-medium text-slate-400 mb-1">Salary</h3>
              <p className="text-lg font-bold text-white">{job.salary}</p>
              <p className="text-slate-400 text-xs mt-1">Per month</p>
            </div>

            {/* Company */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h3 className="text-xs font-medium text-slate-400 mb-1">Company</h3>
              <p className="text-white font-semibold text-sm">{job.company}</p>
            </div>

            {/* Location */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h3 className="text-xs font-medium text-slate-400 mb-1">Location</h3>
              <p className="text-white font-semibold text-sm">{job.location}</p>
            </div>

            {/* Category */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h3 className="text-xs font-medium text-slate-400 mb-1">Category</h3>
              <p className="text-white font-semibold text-sm">{job.category}</p>
            </div>

      
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobDetailView;