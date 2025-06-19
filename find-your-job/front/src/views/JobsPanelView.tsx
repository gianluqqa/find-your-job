import React from "react";
import { JobsArray } from "../helpers/jobsArray";
import Link from "next/link";

const JobsPanelView: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-8">
      {JobsArray.map((job) => (
        <Link key={job.id} href={`/job/${job.id}`}>
          <div className="bg-white border border-green-800 shadow-md rounded-2xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer">
            <h2 className="text-green-900 font-semibold text-xl mb-2">
              {job.title}
            </h2>
            <p className="text-green-700 text-sm mb-1">{job.company}</p>
            <h2 className="text-gray-700 text-base mb-2">{job.description}</h2>
            <p className="text-green-600 text-sm">
              {job.location} • {job.modality}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JobsPanelView;
