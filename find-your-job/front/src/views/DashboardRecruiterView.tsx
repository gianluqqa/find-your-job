"use client";
import React, { useEffect, useState } from "react";
import { IUser } from "src/interfaces/IUser";

const DashboardRecruiterView: React.FC = () => {
  const [recruiter, setRecruiter] = useState<IUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("registeredUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);

      const recruiterData: IUser = {
        id: userData.id || userData.email || "no-id",
        name: userData.name || "No Name",
        email: userData.email || "no-email",
        role: "recruiter",
        country: userData.country || "",
        state: userData.state || "",
        city: userData.city || "",
        about: userData.about || "No description available",
        image: userData.image || "https://via.placeholder.com/150",
        company: userData.company || "Unnamed Company",
        jobs: userData.jobs || [],
      };

      setRecruiter(recruiterData);
    }
  }, []);

  if (!recruiter) return <div>Loading recruiter profile...</div>;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#3a4a25] rounded-3xl shadow-lg text-[#d9e4c8]">
      <h1 className="text-3xl font-bold mb-6 text-[#b8c67a]">Recruiter Profile</h1>

      <div className="flex items-center space-x-6">
        <img
          src={recruiter.image}
          alt={recruiter.name}
          className="w-32 h-32 rounded-full border-4 border-[#5a703a]"
        />
        <div>
          <h2 className="text-2xl font-semibold">{recruiter.name}</h2>
          <p className="mt-2 text-[#a5b38a]">{recruiter.about}</p>
          <p className="text-sm text-[#93a878] mt-1 italic">{recruiter.company}</p>
        </div>
      </div>

      {recruiter.jobs && recruiter.jobs.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-[#b8c67a]">Jobs Posted</h3>
          <ul className="list-disc list-inside space-y-2">
            {recruiter.jobs.map((job, index) => (
              <li key={index} className="text-[#d9e4c8]">{job.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DashboardRecruiterView;
