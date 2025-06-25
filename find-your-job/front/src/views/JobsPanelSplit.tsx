"use client";
import React, { useState } from "react";
import { jobsArray } from "src/helpers/jobsArray";
import JobCard from "src/components/ui/JobCard";
import JobDetailView from "./JobDetailView";
import { IJob } from "src/interfaces/IJob";

const JobPanelSplit: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<IJob | null>(null);

  return (
    <div className="flex min-h-full pt-30 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Panel izquierdo - lista */}
      <div className="w-1/3 overflow-y-auto border-r border-white/10 bg-slate-900 p-6 space-y-4">
        {jobsArray.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="cursor-pointer transition-all duration-200 hover:scale-[1.01]"
          >
            <JobCard job={job} />
          </div>
        ))}
      </div>

      {/* Panel derecho - detalle */}
      <div className="w-2/3 overflow-y-auto">
        {selectedJob ? (
          <JobDetailView job={selectedJob} />
        ) : (
          <div className="h-full flex items-center justify-center text-white text-xl">
            Selecciona una oferta para ver los detalles
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPanelSplit;
