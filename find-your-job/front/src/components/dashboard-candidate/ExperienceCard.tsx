import React from 'react'
import { Edit3, Trash2, MapPin } from 'lucide-react'
import { IExperience } from 'src/interfaces/IExperience'

interface ExperienceCardProps {
  experience: IExperience & { id: string }
  onEdit: () => void
  onDelete: () => void
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onEdit, onDelete }) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const [year, month] = dateString.split('-')
    const monthNames = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ]
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  return (
    <div className="bg-slate-800 rounded-lg p-4 sm:p-6 border border-slate-700 hover:border-slate-600 transition-colors group">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-100 text-lg sm:text-xl truncate pr-2">{experience.title}</h3>
          <p className="text-emerald-400 font-medium text-sm sm:text-base">{experience.company}</p>
        </div>
        <div className="flex gap-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity self-start">
          <button
            onClick={onEdit}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-700 rounded transition-colors"
          >
            <Edit3 size={14} className="sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded transition-colors"
          >
            <Trash2 size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
      
      <div className="text-xs sm:text-sm text-slate-400 mb-3">
        {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Actualmente'}
      </div>
      
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3 line-clamp-3">
        {experience.description}
      </p>
      
      {experience.location && (
        <div className="flex items-center gap-1 text-xs sm:text-sm text-slate-400">
          <MapPin size={12} className="sm:w-3 sm:h-3 flex-shrink-0" />
          <span className="truncate">{experience.location}</span>
        </div>
      )}
    </div>
  )
}

export default ExperienceCard