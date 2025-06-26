"use client";
import React from "react";
import { IJob } from "src/interfaces/IJob";

const JobCard: React.FC<{ job: IJob; isSelected: boolean; onSelect: () => void }> = ({
  job,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900
      border rounded-xl p-6 mb-4 transition-all duration-300 cursor-pointer transform
      ${isSelected ? "border-emerald-500/50 shadow-2xl shadow-emerald-500/10 -translate-y-1" : "border-slate-700/50 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1"}`}
    >
      {/* Fondo animado */}
      <div className={`absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-transparent to-blue-600/5 transition-opacity duration-500 ${isSelected ? "opacity-100" : "group-hover:opacity-100 opacity-0"}`} />

      {/* Línea lateral */}
      <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500 transition-transform duration-300 origin-top ${isSelected ? "scale-y-100" : "group-hover:scale-y-100 scale-y-0"}`} />

      {/* Contenido */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <h2 className={`text-white font-bold text-xl mb-1 transition-colors duration-300 ${isSelected ? "text-emerald-300" : "group-hover:text-emerald-300"}`}>
            {job.title}
          </h2>
          <div className={`w-2 h-2 bg-emerald-500 rounded-full animate-pulse transition-opacity duration-300 ${isSelected ? "opacity-100" : "group-hover:opacity-100 opacity-0"}`} />
        </div>

        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-3 opacity-70" />
          <p className="text-emerald-300 font-medium text-sm tracking-wide">{job.company}</p>
        </div>

        <p className={`text-base mb-4 leading-relaxed transition-colors duration-300 ${isSelected ? "text-slate-200" : "text-slate-300 group-hover:text-slate-200"}`}>
          {job.description}
        </p>

        <div className="flex items-center text-sm mb-6">
          <span className="text-blue-300 font-medium">{job.location}</span>
          <div className="w-1 h-1 bg-slate-500 rounded-full mx-3" />
          <span className={`transition-colors duration-300 ${isSelected ? "text-slate-300" : "text-slate-400 group-hover:text-slate-300"}`}>
            {job.modality}
          </span>
        </div>
      </div>

      {/* Brillo */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ${isSelected ? "translate-x-0" : "translate-x-full group-hover:translate-x-0"}`} />
    </div>
  );
};

export default JobCard;
