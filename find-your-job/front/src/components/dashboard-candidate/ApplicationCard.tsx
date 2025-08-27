import React from "react";
import { Building, CheckCircle, Clock, X } from "lucide-react";

interface Postulation {
  title: string;
  company: string;
  status: string;
}

interface ApplicationCardProps {
  postulation: Postulation;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ postulation }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "from-emerald-700/40 to-green-800/40 text-emerald-200 border-emerald-600/30";
      case "rejected":
        return "from-red-800/40 to-red-900/40 text-red-200 border-red-600/30";
      case "pending":
      default:
        return "from-amber-700/40 to-yellow-800/40 text-amber-200 border-amber-600/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />;
      case "rejected":
        return <X className="w-3 h-3 sm:w-4 sm:h-4" />;
      case "pending":
      default:
        return <Clock className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
  };

  return (
    <div className="group p-4 sm:p-5 bg-slate-700/40 hover:bg-slate-600/40 rounded-lg sm:rounded-xl border border-slate-600/30 hover:border-blue-600/40 transition-all duration-300">
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
            <Building className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-slate-200 font-semibold text-sm sm:text-lg group-hover:text-blue-200 transition-colors truncate">
              {postulation.title}
            </h4>
            <p className="text-slate-400 font-medium text-xs sm:text-base truncate">{postulation.company}</p>
          </div>
        </div>
        <div className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r ${getStatusColor(postulation.status)} border backdrop-blur-sm flex-shrink-0`}>
          {getStatusIcon(postulation.status)}
          <span className="text-xs sm:text-sm font-medium capitalize">
            {postulation.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;