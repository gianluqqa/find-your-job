import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { IUser } from "src/interfaces/IUser";

interface ContactGridProps {
  candidateData: IUser;
}

const ContactGrid: React.FC<ContactGridProps> = ({ candidateData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <div className="flex items-center gap-3 p-3 sm:p-4 bg-slate-700/50 rounded-lg sm:rounded-xl border border-slate-600/30">
        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-slate-400 text-xs sm:text-sm font-medium">Email</p>
          <p className="text-slate-200 text-sm sm:text-base font-medium truncate">{candidateData.email}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-3 sm:p-4 bg-slate-700/50 rounded-lg sm:rounded-xl border border-slate-600/30">
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-slate-400 text-xs sm:text-sm font-medium">Phone</p>
          <p className="text-slate-200 text-sm sm:text-base font-medium truncate">{candidateData.phone}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-3 sm:p-4 bg-slate-700/50 rounded-lg sm:rounded-xl border border-slate-600/30 sm:col-span-2">
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-slate-400 text-xs sm:text-sm font-medium">Location</p>
          <p className="text-slate-200 text-sm sm:text-base font-medium">
            {candidateData.city}, {candidateData.state}, {candidateData.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactGrid;