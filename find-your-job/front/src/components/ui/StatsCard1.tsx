import React from "react"

interface StatsCard1Props {
  value: string
  label: string
  delay?: number
}

const StatsCard1: React.FC<StatsCard1Props> = ({ value, label, delay = 0 }) => {
  return (
    <div 
      className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl font-bold text-emerald-700 mb-3">{value}</div>
      <div className="text-base text-slate-600">{label}</div>
    </div>
  )
}

export default StatsCard1