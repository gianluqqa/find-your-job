"use client"
import React, { useEffect, useState } from 'react';
import { ICandidate } from 'src/interfaces/ICandidate';

const DashboardCandidateView: React.FC = () => {
  const [candidate, setCandidate] = useState<ICandidate | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('registeredUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);

      const candidateData: ICandidate = {
        id: userData.email || 'no-id',
        name: userData.name || 'No Name',
        email: userData.email || 'No Email',
        phone: userData.phone || 'No Phone',
        country: userData.country || 'No Country',
        state: userData.state || 'No State',
        city: userData.city || 'No City',
        about: userData.about || 'No description available',
      };

      setCandidate(candidateData);
    }
  }, []);

  if (!candidate) return <div>Loading candidate profile...</div>;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#3a4a25] rounded-3xl shadow-lg text-[#d9e4c8]">
      <h1 className="text-3xl font-bold mb-6 text-[#b8c67a]">Candidate Profile</h1>

      <div className="space-y-4">
        <div>
          <span className="font-semibold text-[#b8c67a]">Name: </span>
          {candidate.name}
        </div>
        <div>
          <span className="font-semibold text-[#b8c67a]">Email: </span>
          {candidate.email}
        </div>
        <div>
          <span className="font-semibold text-[#b8c67a]">Phone: </span>
          {candidate.phone}
        </div>
        <div>
          <span className="font-semibold text-[#b8c67a]">Location: </span>
          {candidate.city}, {candidate.state}, {candidate.country}
        </div>
        <div>
          <span className="font-semibold text-[#b8c67a]">About: </span>
          <p className="mt-1 text-[#a5b38a]">{candidate.about}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCandidateView;
