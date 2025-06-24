import React from 'react';
import { CompaniesArray } from 'src/helpers/companiesArray';

const CompaniesView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-700/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-slate-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 p-8 pt-32 pb-20">
        {/* Floating header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-emerald-400/10 to-teal-400/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/20">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-300 via-teal-300 to-slate-300 bg-clip-text text-transparent mb-4">
              Companies
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Two-column strip layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CompaniesArray.map((company, index) => {
              const totalVacantes = company.jobs
                ? company.jobs.reduce((acc, job) => acc + (job.vacancies || 0), 0)
                : 0;

              // Create staggered animation delays
              const animationDelay = `${index * 100}ms`;
              
              // Alternate strip styles for visual interest
              const isEven = index % 2 === 0;
              const isLeft = index % 2 === 0; // Left column gets even indices

              return (
                <div
                  key={company.id}
                  className={`group relative transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}
                  style={{ animationDelay }}
                >
                  {/* Floating glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Main strip container */}
                  <div className={`
                    relative h-32 overflow-hidden rounded-2xl border border-emerald-400/20 backdrop-blur-xl
                    ${isEven ? 'bg-gradient-to-r from-emerald-900/40 via-teal-800/30 to-slate-800/40' : 
                               'bg-gradient-to-l from-teal-900/40 via-emerald-800/30 to-slate-800/40'}
                    shadow-2xl group-hover:shadow-emerald-500/25 transition-all duration-500
                  `}>
                    
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className={`w-full h-full transform transition-transform duration-700 group-hover:scale-105`}>
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent ${isEven ? 'skew-x-12' : '-skew-x-12'}`}></div>
                      </div>
                    </div>

                    {/* Content container - horizontal layout */}
                    <div className="relative z-10 h-full flex items-center px-6">
                      
                      {/* Logo section */}
                      <div className="flex-shrink-0 mr-6">
                        <div className="relative">
                          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                            <img
                              src={company.src}
                              alt={company.alt || company.name}
                              className="w-full h-full object-contain filter brightness-110 contrast-125"
                            />
                          </div>
                          {/* Floating ring effect */}
                          <div className="absolute -inset-1 border border-emerald-400/30 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                        </div>
                      </div>

                      {/* Company info section */}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent truncate">
                          {company.name}
                        </h2>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-emerald-200/80 text-sm">Available Positions:</span>
                            <span className="text-white font-semibold">{totalVacantes}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action button section */}
                      <div className="flex-shrink-0 ml-4">
                        <button className={`
                          px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300
                          ${isEven 
                            ? 'bg-gradient-to-r from-emerald-600/80 to-emerald-700/80 hover:from-emerald-500 hover:to-emerald-600 text-white'
                            : 'bg-gradient-to-r from-teal-600/80 to-teal-700/80 hover:from-teal-500 hover:to-teal-600 text-white'
                          }
                          shadow-lg hover:shadow-xl hover:scale-105 border border-white/20
                          backdrop-blur-sm group-hover:border-white/40
                        `}>
                          {totalVacantes > 0 ? 'View Jobs' : 'View Company'}
                        </button>
                      </div>

                      {/* Floating particles */}
                      <div className="absolute top-2 right-4 w-2 h-2 bg-emerald-400/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                      <div className="absolute bottom-2 right-8 w-1.5 h-1.5 bg-teal-400/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce delay-300"></div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-emerald-400/60 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-teal-400/60 rounded-full animate-pulse delay-300"></div>
            <div className="w-3 h-3 bg-slate-400/60 rounded-full animate-pulse delay-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesView;