"use client"
import React from "react";
import { IJob } from "src/interfaces/IJob";
import Button2 from "./Button2";

const JobCard: React.FC<{ job: IJob }> = ({ job }) => {
  return (
    <div className="group relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 border border-slate-700/50 hover:border-emerald-500/50 rounded-xl p-6 mb-4 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
      {/* Gradiente animado de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Línea lateral animada */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
      
      {/* Contenido */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-white font-bold text-xl mb-1 group-hover:text-emerald-300 transition-colors duration-300">
            {job.title}
          </h2>
          <div className="w-2 h-2 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-3 opacity-70"></div>
          <p className="text-emerald-300 font-medium text-sm tracking-wide">
            {job.company}
          </p>
        </div>
        
        <p className="text-slate-300 text-base mb-4 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
          {job.description}
        </p>
        
        <div className="flex items-center text-sm mb-6">
          <span className="text-blue-300 font-medium">
            {job.location}
          </span>
          <div className="w-1 h-1 bg-slate-500 rounded-full mx-3"></div>
          <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
            {job.modality}
          </span>
        </div>

        {/* Botón Apply con el componente Button2 */}
        <div className="flex justify-end">
          <Button2 href={`/job/${job.id}`}>
            Apply
          </Button2>
        </div>
      </div>
      
      {/* Efecto brillo sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
    </div>
  );
};

export default JobCard;