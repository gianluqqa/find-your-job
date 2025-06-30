import React from "react";
import { User, FileText } from "lucide-react";
import { IUser } from "src/interfaces/IUser";
import ContactGrid from "./ContactGrid";

interface ProfileHeroSectionProps {
  candidateData: IUser;
}

const ProfileHeroSection: React.FC<ProfileHeroSectionProps> = ({ candidateData }) => {
  return (
    <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-lg sm:rounded-lg border border-slate-600/30 shadow-2xl overflow-hidden mb-6 sm:mb-8">
      <div className="p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
          {/* Profile Image Section */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={candidateData.image}
                alt={candidateData.name}
                className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-lg object-cover border-4 border-slate-600/50 shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg sm:rounded-xl flex items-center justify-center border-3 sm:border-4 border-slate-800 shadow-lg">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-4 sm:space-y-6 w-full">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-2 sm:mb-3">
                {candidateData.name}
              </h2>
            </div>

            {/* Contact Grid */}
            <ContactGrid candidateData={candidateData} />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-600/30">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
            <h3 className="text-lg sm:text-xl font-semibold text-slate-200">About</h3>
          </div>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            {candidateData.about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeroSection;