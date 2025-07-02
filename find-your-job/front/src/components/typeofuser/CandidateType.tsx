import React from 'react'
import { Users, CheckCircle, ArrowRight } from 'lucide-react'

interface CandidateTypeProps {
  isSelected: boolean
  onSelect: () => void
}

const CANDIDATE_DATA = {
  icon: Users,
  title: "Candidate",
  subtitle: "Looking for job opportunities",
  description: "Access thousands of job offers, create your professional profile and connect with recruiters from the best companies.",
  features: [
    "Complete professional profile",
    "Unlimited applications", 
    "Personalized alerts"
  ],
  colors: {
    gradient: "from-slate-900 via-slate-800 to-slate-700",
    border: "border-blue-600/30 hover:border-blue-500/60",
    icon: "text-blue-300",
    subtitle: "text-blue-300",
    bullet: "bg-blue-300"
  }
}

const CandidateType: React.FC<CandidateTypeProps> = ({ isSelected, onSelect }) => {
  const { icon: Icon, title, subtitle, description, features, colors } = CANDIDATE_DATA

  return (
    <div 
      onClick={onSelect}
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      <div className={`relative h-80 sm:h-96 lg:h-[28rem] rounded-lg p-6 sm:p-8 overflow-hidden bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} shadow-2xl hover:shadow-3xl transition-all duration-300`}>
        
        {isSelected && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
          </div>
        )}

        <div className="relative z-10 h-full flex flex-col">
          
          <div className={`mb-4 sm:mb-6 ${colors.icon}`}>
            <Icon size={48} className="sm:w-16 sm:h-16" />
          </div>

          <div className="mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {title}
            </h2>
            <p className={`text-base sm:text-lg font-medium ${colors.subtitle}`}>
              {subtitle}
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            {description}
          </p>

          <div className="space-y-2 flex-grow">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-xs sm:text-sm text-slate-400">
                <div className={`w-1.5 h-1.5 rounded-full ${colors.bullet} mr-3`}></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-white/10 group-hover:bg-white/15 transition-all duration-300">
            <span className="text-white font-semibold text-sm sm:text-base">
              {isSelected ? 'Selected' : 'Select'}
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateType