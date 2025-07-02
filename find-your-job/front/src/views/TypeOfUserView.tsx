"use client"
import React, { useState } from 'react'
import RecruiterType from 'src/components/typeofuser/RecruiterType'
import CandidateType from 'src/components/typeofuser/CandidateType'

const TypeOfUserView: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<"candidate" | "recruiter" | null>(null)

  const handleRoleSelect = (roleType: "candidate" | "recruiter") => {
    setSelectedRole(roleType)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-16 sm:pt-20 lg:pt-24">
      <div className="w-full max-w-7xl">
        
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            How do you want to use our platform?
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
            Select your profile to personalize your experience and access the tools you need
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
            <a 
              href={selectedRole === 'candidate' ? '/registerCandidate' : '/registerRecruiter'} 
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-700 to-emerald-700 text-white font-bold text-base sm:text-lg rounded-lg hover:from-blue-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Continue as {selectedRole === 'candidate' ? 'Candidate' : 'Recruiter'}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default TypeOfUserView
