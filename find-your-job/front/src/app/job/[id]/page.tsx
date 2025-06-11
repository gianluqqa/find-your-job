import { JobsArray } from "src/helpers/JobsArray";


const JobDetailPage: React.FC = ({ params }) => {
  const jobById = JobsArray.find((j) => j.id === params.id);

  if (!jobById) {
    return <p>No se encontró el trabajo con ID {params.id}</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{jobById.title}</h1>
      <p>{jobById.description}</p>
      <p>Company: {jobById.company}</p>
      <p>Location: {jobById.location}</p>
      <p>Category: {jobById.category}</p>
      <p>Salary: {jobById.salary}</p>
      <p>Created At: {jobById.createdAt}</p>
      
    </main>
  );
};

export default JobDetailPage;
