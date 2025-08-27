import React from "react";
import { Building } from "lucide-react";
import ApplicationCard from "./ApplicationCard";

interface Postulation {
  title: string;
  company: string;
  status: string;
}

interface ApplicationsSectionProps {
  postulations: Postulation[];
}

const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ postulations }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-lg border border-slate-600/30 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-800/60 to-slate-700/60 p-4 sm:p-6 border-b border-slate-600/30">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center">
            <Building className="w-4 h-4 sm:w-6 sm:h-6 text-blue-100" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">Applications</h3>
            <p className="text-blue-200 text-sm sm:text-base">Job applications status</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 max-h-80 sm:max-h-96 overflow-y-auto">
        {postulations && postulations.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {postulations.map((postulationItem, postulationIndex) => (
              <ApplicationCard
                key={postulationIndex}
                postulation={postulationItem}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <Building className="w-12 h-12 sm:w-16 sm:h-16 text-slate-500 mx-auto mb-3 sm:mb-4" />
            <p className="text-slate-400 text-base sm:text-lg">No applications yet</p>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">Start applying to jobs to see your progress here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationsSection;