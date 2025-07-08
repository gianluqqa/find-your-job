import React from 'react';
import { CompaniesArray } from 'src/helpers/companiesArray';
import CompanyCard from '../components/ui/CompanyCard';

const CompaniesView = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-28 px-4 sm:px-6 lg:px-8">
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 z-0" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-800 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-teal-700 rounded-full opacity-20 blur-2xl animate-pulse-fast"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-slate-700 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CompaniesArray.map((company, index) => (
            <CompanyCard key={company.id} company={company} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 bg-gradient-to-t from-emerald-950 to-transparent pointer-events-none z-0"></div>
    </div>
  );
};

export default CompaniesView;
