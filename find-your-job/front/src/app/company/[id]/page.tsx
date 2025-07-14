import React from "react";
import { IPropsId } from "src/interfaces/IPropsId";
import CompanyView from "src/views/CompanyView";

const RecruiterPage = ({ params }: IPropsId) => {
  return (
    <div>
      <CompanyView params={params} />
    </div>
  );
};

export default RecruiterPage;
