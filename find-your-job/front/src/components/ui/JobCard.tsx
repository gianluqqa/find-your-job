import React from "react";
import Link from "next/link";
import { IJob } from "src/interfaces/IJob";

const JobCard: React.FC<{ job: IJob }> = ({ job }) => {
  return (
    <Link href={`/job/${job.id}`}>
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
  );
};

export default JobCard;
