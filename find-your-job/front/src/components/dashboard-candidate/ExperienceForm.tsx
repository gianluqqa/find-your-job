import React from 'react'
import { IExperience } from 'src/interfaces/IExperience'

interface ExperienceFormProps {
  formData: IExperience
  setFormData: (data: IExperience) => void
  onSave: () => void
  onCancel: () => void
  isEditing: boolean
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({
  formData,
  setFormData,
  onSave,
  onCancel,
  isEditing
}) => {
  const isFormValid = formData.title && formData.company && formData.startDate && formData.description

  return (
    <div className="bg-slate-800 rounded-lg p-4 sm:p-6 border border-slate-700 mb-6">
      <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-4 sm:mb-6">
        {isEditing ? 'Editar experiencia' : 'Nueva experiencia'}
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 sm:mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Cargo / Posición *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full px-3 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-sm sm:text-base"
            placeholder="ej. Desarrollador Frontend"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Empresa *
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full px-3 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-sm sm:text-base"
            placeholder="ej. Tech Solutions"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 sm:mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Fecha de inicio *
          </label>
          <input
            type="month"
            value={formData.startDate}
            onChange={(e) => setFormData({...formData, startDate: e.target.value})}
            className="w-full px-3 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-sm sm:text-base"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Fecha de fin
          </label>
          <input
            type="month"
            value={formData.endDate}
            onChange={(e) => setFormData({...formData, endDate: e.target.value})}
            className="w-full px-3 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-sm sm:text-base"
          />
          <p className="text-xs text-slate-400 mt-1">Deja vacío si es tu trabajo actual</p>
        </div>
        
        <div className="sm:col-span-2 lg:col-span-1">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Ubicación
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="w-full px-3 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors text-sm sm:text-base"
            placeholder="ej. Buenos Aires, Argentina"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Descripción *
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          rows={4}
          className="w-full px-3 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-colors text-sm sm:text-base"
          placeholder="Describe tus responsabilidades, logros y tecnologías utilizadas..."
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onSave}
          disabled={!isFormValid}
          className="w-full sm:w-auto px-4 py-2 sm:py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md transition-colors font-medium text-sm sm:text-base"
        >
          {isEditing ? 'Actualizar' : 'Guardar'}
        </button>
        <button
          onClick={onCancel}
          className="w-full sm:w-auto px-4 py-2 sm:py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-md transition-colors text-sm sm:text-base"
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default ExperienceForm