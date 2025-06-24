
import React from 'react'
import { IPropsId } from 'src/interfaces/IPropsId';
import JobDetailView from "src/views/JobDetailView";

const JobDetailPage = ({ params }: IPropsId) => {
  return (
    <div>
      <JobDetailView params={params} />
    </div>
  );
};

export default JobDetailPage

