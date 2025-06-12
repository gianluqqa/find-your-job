import React from "react";
import Link from "next/link";

const ProfessionalDPreview = () => {
  return (
    <div>
      <Link href={"/professionaldev"}>
        <button> GO TO PROFESSIONAL DEVELOPMENT VIEW</button>
      </Link>
    </div>
  );
};

export default ProfessionalDPreview;
