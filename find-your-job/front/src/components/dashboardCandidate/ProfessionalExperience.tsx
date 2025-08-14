"use client";
import React, { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react"; // 🔹 agregamos icono de borrar
import { IExperience } from "src/interfaces/IExperience";
import { createExperience, getExperiencesByUserId, deleteExperience, editExperience } from "src/api/candidateApi"; // 🔹 importamos deleteExperience
import { useAuth } from "src/context/useAuth";

const ProfessionalExperienceSection: React.FC = () => {
  const { user } = useAuth();
  const [experiences, setExperiences] = useState<(IExperience & { id: string })[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<IExperience>({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    location: "",
  });

  // 📥 Cargar experiencias cuando user esté listo
  useEffect(() => {
    const fetchData = async () => {
      if (!user?.id) return;
      try {
        const allExperiences = await getExperiencesByUserId(user.id);
        setExperiences(Array.isArray(allExperiences) ? allExperiences : []);
      } catch (error) {
        console.error("❌ Error al obtener experiencias:", error);
        setExperiences([]);
      }
    };
    fetchData();
  }, [user]);

  // 💾 Crear experiencia
  const handleCreateExperience = async () => {
    if (!formData.title || !formData.company || !formData.startDate || !formData.description) return;
    if (!user?.id) return;

    try {
      const payload: IExperience = { ...formData, userId: user.id };
      await createExperience(payload);

      // 🔄 Refrescar lista
      const allExperiences = await getExperiencesByUserId(user.id);
      setExperiences(Array.isArray(allExperiences) ? allExperiences : []);

      setShowForm(false);
      resetForm();
    } catch (error) {
      console.error("❌ Error al crear experiencia:", error);
    }
  };

  // 🗑️ Borrar experiencia
  const handleDeleteExperience = async (id: string) => {
    if (!user?.id) return;

    try {
      await deleteExperience(id, user.id); // 🔹 llamamos a tu API
      // 🔄 Refrescar lista
      setExperiences((prev) => prev.filter((exp) => exp.id !== id));
    } catch (error) {
      console.error("❌ Error al eliminar experiencia:", error);
    }
  };

  // ✏️ Manejar inputs
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔄 Resetear formulario
  const resetForm = () => {
    setFormData({ title: "", company: "", startDate: "", endDate: "", description: "", location: "" });
  };

  // 📅 Formatear fecha
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 mb-6 sm:mb-8">Mis experiencias profesionales</h2>

      {/* 📃 Lista de experiencias */}
      <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-slate-800 rounded-lg p-4 sm:p-6 border border-slate-700 flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-slate-100 text-lg sm:text-xl">{exp.title}</h3>
              <p className="text-emerald-400 font-medium text-sm sm:text-base">{exp.company}</p>
              <div className="text-xs sm:text-sm text-slate-400 mb-3">
                {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Actualmente"}
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{exp.description}</p>
            </div>

            {/* 🗑️ Botón de borrar */}
            <button
              onClick={() => handleDeleteExperience(exp.id)}
              className="p-2 text-red-400 hover:text-white hover:bg-red-600 rounded transition-colors"
              title="Eliminar experiencia"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}

        {experiences.length === 0 && !showForm && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-slate-400 text-sm sm:text-base mb-4">No tienes experiencias profesionales registradas</p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium text-sm sm:text-base"
            >
              <Plus size={16} className="sm:w-5 sm:h-5" />
              Añadir primera experiencia
            </button>
          </div>
        )}
      </div>

      {/* 📝 Formulario de nueva experiencia */}
      {showForm && (
        <div className="bg-slate-800 rounded-lg p-4 sm:p-6 border border-slate-700 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-4">Nueva experiencia</h3>
          <div className="space-y-4">
            <input type="text" name="title" placeholder="Título del puesto" value={formData.title} onChange={handleChangeInput} className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-slate-100" />
            <input type="text" name="company" placeholder="Empresa" value={formData.company} onChange={handleChangeInput} className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-slate-100" />
            <div className="flex gap-4">
              <input type="month" name="startDate" value={formData.startDate} onChange={handleChangeInput} className="w-1/2 px-3 py-2 rounded bg-slate-900 border border-slate-700 text-slate-100" />
              <input type="month" name="endDate" value={formData.endDate} onChange={handleChangeInput} className="w-1/2 px-3 py-2 rounded bg-slate-900 border border-slate-700 text-slate-100" />
            </div>
            <textarea name="description" placeholder="Descripción" value={formData.description} onChange={handleChangeInput} className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-slate-100 h-24" />
            <input type="text" name="location" placeholder="Ubicación" value={formData.location} onChange={handleChangeInput} className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700 text-slate-100" />
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button onClick={() => { resetForm(); setShowForm(false); }} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md">Cancelar</button>
            <button onClick={handleCreateExperience} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">Guardar</button>
          </div>
        </div>
      )}

      {/* ➕ Botón para añadir experiencia */}
      {!showForm && experiences.length > 0 && (
        <div className="flex justify-center sm:justify-start">
          <button onClick={() => setShowForm(true)} className="flex items-center gap-2 px-4 py-2 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium text-sm sm:text-base">
            <Plus size={16} className="sm:w-5 sm:h-5" />
            Añadir nueva experiencia
          </button>
        </div>
      )}
    </section>
  );
};

export default ProfessionalExperienceSection;
