"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ICompany } from "src/interfaces/ICompany";
import Button1 from "./Button1";

interface Props {
  company: ICompany;
  index: number;
}

const CompanyCard = ({ company, index }: Props) => {
  const router = useRouter();

  const totalVacantes = company.jobs
    ? company.jobs.reduce((acc, job) => acc + (job.vacancies || 0), 0)
    : 0;

  const animationDelay = `${index * 100}ms`;
  const isEven = index % 2 === 0;

  return (
    <div
      className="group relative transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 w-full"
      style={{ animationDelay }}
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className={`relative min-h-[7rem] sm:h-28 overflow-hidden rounded-sm border border-emerald-400/20 backdrop-blur-xl
        ${
          isEven
            ? "bg-gradient-to-r from-emerald-900/40 via-teal-800/30 to-slate-800/40"
            : "bg-gradient-to-l from-teal-900/40 via-emerald-800/30 to-slate-800/40"
        }
        shadow-2xl group-hover:shadow-emerald-500/25 transition-all duration-500
        flex flex-col sm:flex-row items-center sm:items-start px-4 sm:px-6 py-4 gap-4 sm:gap-0 text-center sm:text-left
      `}
      >
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center w-full gap-4 sm:gap-6 justify-center sm:justify-start items-center">
          <div className="flex-shrink-0">
            <div className="relative w-14 h-14 sm:w-14 sm:h-14 mx-auto sm:mx-0">
              <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-sm p-3 shadow-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                <img
                  src={company.image}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain filter brightness-110 contrast-125"
                />
              </div>
              <div className="absolute -inset-1 border border-emerald-400/30 rounded-sm opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-1 sm:flex-row sm:items-center justify-between w-full gap-3 sm:gap-0 items-center">
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent whitespace-normal">
                {company.name}
              </h2>
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-200/80 text-xs sm:text-sm">
                    Available Positions:
                  </span>
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {totalVacantes}
                  </span>
                </div>
              </div>
            </div>

            <div className="sm:ml-4">
              <Button1
                size="sm"
                onClick={() => router.push(`/company/${company.id}`)}
              >
                {totalVacantes > 0 ? "View Jobs" : "View Company"}
              </Button1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
