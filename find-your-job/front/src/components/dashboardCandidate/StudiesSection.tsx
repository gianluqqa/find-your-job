"use client";
import React, { useState } from "react";
import { IStudy } from "src/interfaces/IStudy";
import { useAuth } from "src/context/useAuth";
import { GraduationCap, Calendar } from "lucide-react";
import AddStudyForm from "../forms/AddStudyForm";

const StudiesSection: React.FC<{ studies: IStudy[] }> = ({ studies }) => {
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-lg border border-slate-600/30 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-green-800/60 to-green-700/60 p-4 sm:p-6 border-b border-slate-600/30 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-green-700 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-green-100" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-100">Studies</h3>
            <p className="text-green-200 text-xs md:text-sm lg:text-base">Academic formation</p>
          </div>
        </div>

        {user && (
          <button onClick={toggleForm} className="bg-green-600 hover:bg-green-700 text-white rounded px-3 py-1 text-sm">
            {showForm ? "Close" : "Add Study"}
          </button>
        )}
      </div>

      {showForm && <AddStudyForm onClose={() => setShowForm(false)} />}

      <div className="p-4 md:p-6 max-h-80 md:max-h-96 overflow-y-auto">
        {studies && studies.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {studies.map((study, index) => (
              <div
                key={index}
                className="group p-3 md:p-4 bg-slate-700/40 hover:bg-slate-600/40 rounded-lg border border-slate-600/30 hover:border-green-600/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mt-1">
                    <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-200 text-sm md:text-base font-medium group-hover:text-green-200 transition-colors mb-1 truncate">{study.degree}</h4>
                    <p className="text-green-300 text-xs md:text-sm font-medium mb-1 truncate">{study.institution}</p>
                    {study.field && <p className="text-slate-400 text-xs md:text-sm mb-2 truncate">{study.field}</p>}

                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-2 flex-wrap">
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      <span className="text-xs">
                        {study.startDate} - {study.endDate || "Presente"}
                      </span>
                    </div>

                    {study.description && <p className="text-slate-300 text-xs md:text-sm leading-relaxed line-clamp-3">{study.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-slate-500 mx-auto mb-3 sm:mb-4" />
            <p className="text-slate-400 text-base sm:text-lg">No studies registered</p>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">Add your academic formation to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudiesSection;
