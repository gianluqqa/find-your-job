"use client";
import React, { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import { IUser } from "src/interfaces/IUser";
import ProfileHeroSection from "src/components/dashboardCandidate/ProfileHeroSection";
import SkillsSection from "src/components/dashboardCandidate/SkillsSection";
import ApplicationsSection from "src/components/dashboardCandidate/ApplicationsSection";
import LoadingSpinner from "src/components/dashboardCandidate/LoadingSpinner";
import ProfessionalExperience from "src/components/dashboardCandidate/ProfessionalExperience";

const DashboardCandidateView: React.FC = () => {
  const [candidateData, setCandidateData] = useState<IUser | null>(null);

  useEffect(() => {
    const registeredUserData = localStorage.getItem("registeredUser");
    if (registeredUserData) {
      const parsedUserData = JSON.parse(registeredUserData);

      const formattedCandidateData: IUser = {
        id: parsedUserData.id || parsedUserData.email || "no-id",
        name: parsedUserData.name || "No Name",
        email: parsedUserData.email || "No Email",
        role: "candidate",
        phone: parsedUserData.phone || "No Phone",
        country: parsedUserData.country || "No Country",
        state: parsedUserData.state || "No State",
        city: parsedUserData.city || "No City",
        about: parsedUserData.about || "No description available",
        image: parsedUserData.image || "https://via.placeholder.com/150",
        skills: parsedUserData.skills || [],
        postulations: parsedUserData.postulations || [],
      };

      setCandidateData(formattedCandidateData);
    }
  }, []);

  if (!candidateData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen pt-8 bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-700 to-green-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
              <Briefcase className="w-5 h-5 sm:w-7 sm:h-7 text-green-100" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 tracking-tight">
                Professional Dashboard
              </h1>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg mt-1">Your career at a glance</p>
            </div>
          </div>
        </div>

        {/* Profile Hero Section */}
        <ProfileHeroSection candidateData={candidateData} />

        {/* Skills & Applications Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          <SkillsSection skills={candidateData.skills || []} />
          <ApplicationsSection postulations={candidateData.postulations || []} />
          <ProfessionalExperience />
        </div>
      </div>
    </div>
  );
};

export default DashboardCandidateView;