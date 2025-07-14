import React from "react";
import { CompaniesArray } from "src/helpers/companiesArray";
import { IPropsId } from "src/interfaces/IPropsId";

const CompanyView = ({ params }: IPropsId) => {
  const company = CompaniesArray.find((c) => c.id === params.id);

  if (!company) {
    return (
      <div className="flex justify-center items-center h-screen text-emerald-400">
        Company not found
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-28 p-4 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src={company.image}
          alt={company.name}
          className="w-32 h-32 object-contain rounded shadow-lg border border-emerald-400/40 bg-slate-800"
        />
        <h1 className="text-2xl md:text-4xl font-bold text-emerald-400">{company.name}</h1>
        <p className="text-slate-300 max-w-2xl">{company.description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {company.jobs?.length ? (
          company.jobs.map((job, index) => (
            <div
              key={index}
              className="bg-emerald-900/50 border border-emerald-400/20 rounded-lg p-4 shadow-md hover:shadow-emerald-500/30 transition-shadow duration-300 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-emerald-200 mb-2">{job.title}</h3>
              <p className="text-slate-200 mb-1"><span className="font-medium text-emerald-300">Description:</span> {job.description}</p>
              <p className="text-slate-200 mb-1"><span className="font-medium text-emerald-300">Location:</span> {job.location}</p>
              <p className="text-slate-200 mb-1"><span className="font-medium text-emerald-300">Type:</span> {job.type}</p>
              <p className="text-slate-200"><span className="font-medium text-emerald-300">Modality:</span> {job.modality}</p>
            </div>
          ))
        ) : (
          <p className="text-emerald-200 col-span-full text-center">No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default CompanyView;
