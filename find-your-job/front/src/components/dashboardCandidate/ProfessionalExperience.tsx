"use client";
import React, { useState, useEffect } from "react";
import { Plus, Edit3, Trash2, MapPin } from "lucide-react";
import { IExperience } from "src/interfaces/IExperience";
import { createExperience, getExperiencesByUserId, deleteExperience, editExperience } from "src/api/candidateApi";
import { useAuth } from "src/context/useAuth";

const ProfessionalExperienceSection: React.FC = () => {
  const { user } = useAuth();
  const [experiences, setExperiences] = useState<(IExperience & { id: string })[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<IExperience>({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    location: "",
  });

  // TODO: reemplazar con llamada real a la API
  useEffect(() => {
    const fetchExperiences = async () => {
      if (!user) return;
      // const data = await getExperiencesByUserId(user.id);
      // setExperiences(data);
    };
    fetchExperiences();
  }, [user]);

  const handleAddNew = () => {
    setFormData({ title: "", company: "", startDate: "", endDate: "", description: "", location: "" });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (exp: IExperience & { id: string }) => {
    setFormData({ ...exp });
    setEditingId(exp.id);
    setShowForm(true);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.company || !formData.startDate || !formData.description) return;

    if (editingId) {
      // TODO: llamar a editExperience API
      // await editExperience(editingId, formData);
      setExperiences((prev) => prev.map((exp) => (exp.id === editingId ? { ...formData, id: editingId } : exp)));
    } else {
      // TODO: llamar a createExperience API
      // const newExp = await createExperience(formData);
      const newExp = { ...formData, id: Date.now().toString() }; // placeholder temporal
      setExperiences((prev) => [...prev, newExp]);
    }

    setShowForm(false);
    setEditingId(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
  };

  const handleDelete = async (id: string) => {
    // TODO: llamar a deleteExperience API
    // await deleteExperience(id);
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 mb-6 sm:mb-8">Mis experiencias profesionales</h2>

      {/* Lista de experiencias */}
      <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-slate-800 rounded-lg p-4 sm:p-6 border border-slate-700 hover:border-slate-600 transition-colors group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-slate-100 text-lg sm:text-xl truncate pr-2">{exp.title}</h3>
                <p className="text-emerald-400 font-medium text-sm sm:text-base">{exp.company}</p>
              </div>
              <div className="flex gap-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity self-start">
                <button onClick={() => handleEdit(exp)} className="p-1.5 sm:p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-700 rounded transition-colors">
                  <Edit3 size={14} className="sm:w-4 sm:h-4" />
                </button>
                <button onClick={() => handleDelete(exp.id)} className="p-1.5 sm:p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded transition-colors">
                  <Trash2 size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-400 mb-3">
              {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Actualmente"}
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3 line-clamp-3">{exp.description}</p>

            {exp.location && (
              <div className="flex items-center gap-1 text-xs sm:text-sm text-slate-400">
                <MapPin size={12} className="sm:w-3 sm:h-3 flex-shrink-0" />
                <span className="truncate">{exp.location}</span>
              </div>
            )}
          </div>
        ))}

        {experiences.length === 0 && !showForm && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-slate-400 text-sm sm:text-base mb-4">No tienes experiencias profesionales registradas</p>
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
        <div className="bg-slate-800 rounded-lg p-4 sm:p-6 border border-slate-700 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-4 sm:mb-6">{editingId ? "Editar experiencia" : "Nueva experiencia"}</h3>
          {/* Form inputs idénticos al código que ya tienes */}
          {/* ... */}
        </div>
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
    </section>
  );
};

export default ProfessionalExperienceSection;
