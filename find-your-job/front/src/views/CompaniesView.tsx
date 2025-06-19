import React from 'react';
import { CompaniesArray } from 'src/helpers/companiesArray';

const CompaniesView = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CompaniesArray.map((company) => {
          const totalVacantes = company.jobs
            ? company.jobs.reduce((acc, job) => acc + (job.vacancies || 0), 0)
            : 0;

          return (
            <div
              key={company.id}
              className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center"
            >
              <img
                src={company.src}
                alt={company.alt || company.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h2 className="text-xl font-semibold">{company.name}</h2>
              <p className="text-gray-600 mt-2">
                Vacantes disponibles: {totalVacantes}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesView;
