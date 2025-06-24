"use client"
import React from "react";
import JobCard from "src/components/ui/JobCard";
import { jobsArray } from "src/helpers/jobsArray";

const JobsPanelView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto min-h-[120vh] pt-32 pb-20 px-6">
      {/* Header opcional con gradiente */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          Oportunidades Laborales
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
      </div>
      
      {/* Lista de trabajos */}
      <div className="space-y-0">
        {jobsArray.map((job, index) => (
          <div 
            key={job.id}
            className="animate-fade-in-up"
            style={{ 
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            <JobCard job={job} />
          </div>
        ))}
      </div>
      
      {/* Gradiente de fade al final */}
      <div className="h-16 bg-gradient-to-t from-slate-900 to-transparent -mt-8 relative z-10"></div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JobsPanelView;