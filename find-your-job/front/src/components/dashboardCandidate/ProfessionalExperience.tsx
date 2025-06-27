import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { IExperience } from 'src/interfaces/IExperience'
import ExperienceCard from './ExperienceCard'
import ExperienceForm from './ExperienceForm'

const ProfessionalExperience: React.FC = () => {
  const [experiences, setExperiences] = useState<(IExperience & { id: string })[]>([
    {
      id: '1',
      title: 'Full Stack Web Developer',
      company: 'soyHenry',
      startDate: '2024-04',
      endDate: '',
      description: 'Desarrollo de interfaces responsivas con HTML, CSS, JavaScript, React y Next.js. Dashboards con Tailwind y TypeScript. Autenticación con Firebase. Trabajé en múltiples proyectos colaborativos mejorando mis habilidades técnicas y de trabajo en equipo.',
      location: 'Remoto'
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<IExperience>({
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    location: ''
  })

  const handleAddNew = () => {
    setFormData({
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
      location: ''
    })
    setEditingId(null)
    setShowForm(true)
  }

  const handleEdit = (experience: IExperience & { id: string }) => {
    setFormData({
      title: experience.title,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate,
      description: experience.description,
      location: experience.location
    })
    setEditingId(experience.id)
    setShowForm(true)
  }

  const handleSave = () => {
    if (editingId) {
      setExperiences(prev => 
        prev.map(exp => 
          exp.id === editingId 
            ? { ...formData, id: editingId }
            : exp
        )
      )
    } else {
      const newExperience = {
        ...formData,
        id: Date.now().toString()
      }
      setExperiences(prev => [...prev, newExperience])
    }
    
    setShowForm(false)
    setEditingId(null)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingId(null)
  }

  const handleDelete = (id: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id))
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 mb-6 sm:mb-8">
        Mis experiencias profesionales
      </h2>
      
      {/* Lista de experiencias */}
      <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            onEdit={() => handleEdit(experience)}
            onDelete={() => handleDelete(experience.id)}
          />
        ))}
        
        {experiences.length === 0 && !showForm && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-slate-400 text-sm sm:text-base mb-4">
              No tienes experiencias profesionales registradas
            </p>
            <button
              onClick={handleAddNew}
              className="inline-flex items-center gap-2 px-4 py-2 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors font-medium text-sm sm:text-base"
            >
              <Plus size={16} className="sm:w-5 sm:h-5" />
              Añadir primera experiencia
            </button>
          </div>
        )}
      </div>

      {/* Formulario */}
      {showForm && (
        <ExperienceForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={handleCancel}
          isEditing={!!editingId}
        />
      )}

      {/* Botón para añadir nueva experiencia */}
      {!showForm && experiences.length > 0 && (
        <div className="flex justify-center sm:justify-start">
          <button
            onClick={handleAddNew}
            className="flex items-center gap-2 px-4 py-2 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors font-medium text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
          >
            <Plus size={16} className="sm:w-5 sm:h-5" />
            Añadir nueva experiencia
          </button>
        </div>
      )}
    </div>
  )
}

export default ProfessionalExperience