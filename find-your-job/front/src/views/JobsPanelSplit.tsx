"use client";
import React, { useState } from "react";
import { jobsArray } from "src/helpers/jobsArray";
import JobCard from "src/components/ui/JobCard";
import JobDetailView from "./JobDetailView";
import { IJob } from "src/interfaces/IJob";
import NavbarFilterJob from "src/components/navbarfilterjob/NavbarFilterJob";
import { IFilterNavbar } from "src/interfaces/IFilterNavbar";

const JobPanelSplit: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<IJob | null>(
    jobsArray[0] || null
  );
  const [isDetailOpen, setIsDetailOpen] = useState(false); // control para móvil

  const [filters, setFilters] = useState<IFilterNavbar>({
    search: "",
    location: "",
    modality: "",
    salary: "",
    createdAt: "",
    type: "",
    category: "",
  });

  const handleFilterChange = (updatedFilters: IFilterNavbar) => {
    setFilters(updatedFilters);
    // lógica de filtrado acá
  };

  // Al seleccionar un job en móvil abrimos el detalle
  const handleSelectJob = (job: IJob) => {
    setSelectedJob(job);
    setIsDetailOpen(true);
  };

  // Para detectar tamaño y aplicar estilos específicos, uso Tailwind + media queries para renderizado condicional:
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 flex items-center justify-center p-4 pt-24 px-2 sm:px-4">
      <div className="w-full max-w-[1060px]">
        <NavbarFilterJob onFilterChange={handleFilterChange} />
        <div className="flex flex-col lg:flex-row h-[calc(100vh-7rem)] lg:h-[600px] bg-slate-900/80 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl overflow-hidden mt-4">
          
          {/* Lista - Visible siempre en desktop, en móvil depende del detalle */}
          <div
            className={`w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r overflow-y-auto bg-slate-900/90 p-4 space-y-3
            ${isDetailOpen ? "hidden lg:block" : "block"}`}
          >
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-white mb-2">
                Ofertas de Trabajo
              </h2>
              <p className="text-sm text-slate-400">
                {jobsArray.length} empleos disponibles
              </p>
            </div>
            {jobsArray.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isSelected={job.id === selectedJob?.id}
                onSelect={() => handleSelectJob(job)}
              />
            ))}
          </div>

          {/* Detalle - Visible siempre en desktop, en móvil solo si isDetailOpen */}
          <div
            className={`w-full lg:w-2/3 overflow-y-auto bg-slate-800/50
            ${isDetailOpen ? "block" : "hidden"} lg:block`}
          >
            {selectedJob ? (
              <div className="h-full flex flex-col">
                {/* Botón cerrar solo en móvil */}
                <button
                  className="lg:hidden self-end p-2 m-2 bg-slate-700 rounded-md text-white hover:bg-slate-600 transition"
                  onClick={() => setIsDetailOpen(false)}
                >
                  Volver a la lista
                </button>
                <JobDetailView job={selectedJob} />
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-white text-xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6M8 8v10l4-2 4 2V8"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-300">
                    Selecciona una oferta para ver los detalles
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPanelSplit;
