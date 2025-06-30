import React from 'react';
import { CompaniesArray } from 'src/helpers/companiesArray';
import CompanyCard from '../components/ui/CompanyCard'; // Asegurate que la ruta sea correcta

const CompaniesView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Fondo animado decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-800 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-teal-700 rounded-full opacity-20 blur-2xl animate-pulse-fast"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-slate-700 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {CompaniesArray.map((company, index) => (
            <CompanyCard key={company.id} company={company} index={index} />
          ))}
        </div>
      </div>

      {/* Decorativo inferior */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-gradient-to-t from-emerald-950 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default CompaniesView;
