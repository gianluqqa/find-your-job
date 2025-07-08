"use client";
import React, { useState } from "react";
import RecruiterType from "src/components/typeofuser/RecruiterType";
import CandidateType from "src/components/typeofuser/CandidateType";
import Button1 from "src/components/ui/Button1";

const TypeOfUserView: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<
    "candidate" | "recruiter" | null
  >(null);

  const handleRoleSelect = (roleType: "candidate" | "recruiter") => {
    setSelectedRole(roleType);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-transparent to-emerald-700/50"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-emerald-800/30 to-emerald-600/40"></div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-emerald-500/70 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-emerald-400/60 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-emerald-600/70 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-1/5 w-2 h-2 bg-emerald-600/70 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-10 w-5 h-5 bg-emerald-500/50 rounded-full animate-bounce"></div>

      {/* Larger geometric shapes */}
      <div className="absolute top-16 right-1/4 w-16 h-16 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-tr from-emerald-600/10 to-emerald-500/15 rounded-lg -rotate-12 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/6 w-12 h-12 bg-gradient-to-bl from-emerald-400/20 to-emerald-700/15 rounded-lg rotate-12 animate-bounce"></div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-16 sm:pt-20 lg:pt-24 min-h-screen">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent mb-3 sm:mb-4 px-4 drop-shadow-lg">
              How do you want to use our platform?
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300/90 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
              Select your profile to personalize your experience and access the
              tools you need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <CandidateType
              isSelected={selectedRole === "candidate"}
              onSelect={() => handleRoleSelect("candidate")}
            />

            <RecruiterType
              isSelected={selectedRole === "recruiter"}
              onSelect={() => handleRoleSelect("recruiter")}
            />
          </div>

          {selectedRole && (
            <div className="text-center mt-8">
              <Button1>
                <a
                  href={
                    selectedRole === "candidate"
                      ? "/registerCandidate"
                      : "/registerRecruiter"
                  }                >
                  Continue as{" "}
                  {selectedRole === "candidate" ? "Candidate" : "Recruiter"}
                </a>
              </Button1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypeOfUserView;
