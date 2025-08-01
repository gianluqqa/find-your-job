"use client";
import React from "react";
import { Briefcase } from "lucide-react";
import LoadingSpinner from "src/components/dashboardCandidate/LoadingSpinner";
import ProfileHeroSection from "src/components/dashboardCandidate/ProfileHeroSection";
import ProfessionalExperience from "src/components/dashboardCandidate/ProfessionalExperience";
import StudiesSection from "src/components/dashboardCandidate/StudiesSection";
import CertificatesSection from "src/components/dashboardCandidate/CertificatesSection";
import SkillsSection from "src/components/dashboardCandidate/SkillsSection";
import { useAuth } from "src/context/useAuth";

const DashboardCandidateView: React.FC = () => {
  const { user } = useAuth(); // sacamos el user del contexto

  // Si todavía no cargó el user, mostramos el loader
  if (!user) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-700 to-green-800 rounded-2xl flex items-center justify-center shadow-lg">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-green-100" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 tracking-tight">
                Professional Dashboard
              </h1>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg mt-1">
                Your career at a glance
              </p>
            </div>
          </div>
        </div>

        {/* Profile Hero Section */}
        <ProfileHeroSection candidateData={user} />

        {/* Applications Section - Full Width */}
        {/* <div className="mt-6">
          <ApplicationsSection postulations={user.postulations || []} />
        </div> */}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mt-6">
          {/* Left Column - Professional Experience */}
          <div>
            <ProfessionalExperience />
          </div>

          {/* Right Column - Studies, Certificates, Skills */}
          <div className="space-y-6">
            <StudiesSection studies={user.studies || []} />
            <CertificatesSection certificates={user.certificates || []} />
            <SkillsSection skills={user.skills || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCandidateView;
