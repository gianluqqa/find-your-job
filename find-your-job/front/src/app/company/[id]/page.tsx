import React from "react";
import { CompaniesArray } from "src/helpers/CompaniesArray";
import { ICompany } from "src/interfaces/ICompany";
import { IPropsId } from "src/interfaces/IPropsId";

const CompanyDetail: React.FC<IPropsId> = ({ params }) => {
  const companyById: ICompany | undefined = CompaniesArray.find(
    (company) => company.id === params.id
  );

  if (!companyById) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <div>
        <img src={companyById.src} alt={companyById.alt || companyById.name} />
        <h1>{companyById.name}</h1>
      </div>

      <h2>Available Positions</h2>

      <div>
        {companyById.jobs?.map((job) => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <ul>
              <li>
                <strong>Location:</strong> {job.location}
              </li>
              <li>
                <strong>Category:</strong> {job.category}
              </li>
              <li>
                <strong>Modality:</strong> {job.modality}
              </li>
              <li>
                <strong>Type:</strong> {job.type}
              </li>
              <li>
                <strong>Status:</strong> {job.status}
              </li>
              <li>
                <strong>Salary:</strong> {job.salary}
              </li>
              <li>
                <strong>Vacancies:</strong> {job.vacancies}
              </li>
              <li>
                <strong>Posted on:</strong> {job.createdAt}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDetail;
