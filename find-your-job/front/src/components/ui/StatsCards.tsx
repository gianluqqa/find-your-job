interface StatsCardProps {
  value: string
  label: string
  delay?: number
  className?: string
}

const StatsCard = ({ value, label, delay = 0, className = '' }: StatsCardProps) => {
  return (
    <div className={`bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-emerald-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`} 
         style={{ animationDelay: `${delay}ms` }}>
      <div className="text-2xl font-bold text-emerald-700">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  )
}

export default StatsCard