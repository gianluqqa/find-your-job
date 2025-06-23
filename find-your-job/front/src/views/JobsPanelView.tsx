import React from "react";
import JobCard from "src/components/ui/JobCard";
import { JobsArray } from "src/helpers/jobsArray";

const JobsPanelView: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto  min-h-[120vh] pt-32 pb-20 px-6 ">
      {JobsArray.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobsPanelView;
