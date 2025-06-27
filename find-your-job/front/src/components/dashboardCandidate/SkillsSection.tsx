import React from "react";
import { Award } from "lucide-react";

import { ISkills } from "src/interfaces/ISkills";

interface SkillsSectionProps {
  skills: ISkills[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-slate-600/30 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-green-800/60 to-green-700/60 p-4 sm:p-6 border-b border-slate-600/30">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-700 rounded-lg sm:rounded-xl flex items-center justify-center">
            <Award className="w-4 h-4 sm:w-6 sm:h-6 text-green-100" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">Skills</h3>
            <p className="text-green-200 text-sm sm:text-base">Professional competencies</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 max-h-80 sm:max-h-96 overflow-y-auto">
        {skills && skills.length > 0 ? (
          <div className="grid grid-cols-1 gap-3">
            {skills.map((skillItem, skillIndex) => (
              <div
                key={skillIndex}
                className="group p-3 sm:p-4 bg-slate-700/40 hover:bg-slate-600/40 rounded-lg sm:rounded-xl border border-slate-600/30 hover:border-green-600/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base font-medium group-hover:text-green-200 transition-colors">
                    {skillItem.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <Award className="w-12 h-12 sm:w-16 sm:h-16 text-slate-500 mx-auto mb-3 sm:mb-4" />
            <p className="text-slate-400 text-base sm:text-lg">No skills registered</p>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">Add your professional skills to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;