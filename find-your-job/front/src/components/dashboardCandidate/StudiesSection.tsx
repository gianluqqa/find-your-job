"use client";
import React, { useEffect, useState } from "react";
import { IStudy } from "src/interfaces/IStudy";
import { useAuth } from "src/context/useAuth";
import { GraduationCap, Calendar, X, Edit } from "lucide-react";
import { createStudy, getStudiesByUserId, deleteStudy, editStudy } from "src/api/candidateApi";

const StudiesSection: React.FC<{ onRefresh?: () => void }> = ({ onRefresh }) => {
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [studiesList, setStudiesList] = useState<IStudy[]>([]);
  const [formData, setFormData] = useState<IStudy>({
    id: "",
    title: "",
    institution: "",
    degree: "Bachelor",
    field: "",
    startDate: "",
    endDate: "",
    description: "",
    userId: user?.id || "",
  });

  useEffect(() => {
    if (user?.id) fetchStudies();
  }, [user?.id]);

  const fetchStudies = async () => {
    try {
      const res = await getStudiesByUserId(user!.id);
      setStudiesList(res);
    } catch (error) {
      console.error("Error al obtener estudios:", error);
    }
  };

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeleteStudy = async (studyId: string) => {
    try {
      await deleteStudy(studyId, user?.id || "");
      fetchStudies();
    } catch (error) {
      console.error("Error al eliminar el estudio:", error);
    }
  };

  const handleEditStudy = (study: IStudy) => {
    setFormData(study);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.institution || !formData.startDate) {
      console.error("Campos obligatorios incompletos");
      return;
    }

    try {
      if (formData.id) {
        // Edit existing study
        await editStudy(formData.id, { ...formData, userId: user?.id });
      } else {
        // Create new study
        await createStudy({ ...formData, userId: user?.id });
      }
      setFormData({
        id: "",
        title: "",
        institution: "",
        degree: "Bachelor",
        field: "",
        startDate: "",
        endDate: "",
        description: "",
        userId: user?.id || "",
      });
      setShowForm(false);
      fetchStudies();
      onRefresh && onRefresh();
    } catch (error) {
      console.error("Error al guardar estudio:", error);
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-lg border border-slate-600/30 shadow-xl overflow-hidden">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-green-800/60 to-green-700/60 p-4 sm:p-6 border-b border-slate-600/30 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-green-700 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-4 h-4 md:w-6 md:h-6 text-green-100" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-100">Studies</h3>
            <p className="text-green-200 text-xs md:text-sm lg:text-base">Academic formation</p>
          </div>
        </div>
        {user && (
          <button onClick={toggleForm} className="bg-green-600 hover:bg-green-700 text-white rounded px-3 py-1 text-sm transition-colors">
            {showForm ? "Close" : "Add Study"}
          </button>
        )}
      </div>

      {/* FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 border-b border-slate-600/30 grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-800/40">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Study Title"
            className="p-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            placeholder="Institution"
            className="p-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="p-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="Doctor">Doctor</option>
          </select>
          <input
            type="text"
            name="field"
            value={formData.field}
            onChange={handleChange}
            placeholder="Field of Study (optional)"
            className="p-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="p-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="p-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description (optional)"
            className="p-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"
          />
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors">
              Save
            </button>
          </div>
        </form>
      )}

      {/* LIST */}
      <div className="p-4 md:p-6 max-h-80 md:max-h-96 overflow-y-auto">
        {studiesList.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {studiesList.map((study) => (
              <div key={study.id} className="group p-3 md:p-4 bg-slate-700/40 hover:bg-slate-600/40 rounded-lg border border-slate-600/30 hover:border-green-600/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mt-1">
                    <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-200 text-sm md:text-base font-medium group-hover:text-green-200 transition-colors mb-1 truncate">
                      {study.degree} - {study.title}
                    </h4>
                    <p className="text-green-300 text-xs md:text-sm font-medium mb-1 truncate">{study.institution}</p>
                    {study.field && <p className="text-slate-400 text-xs md:text-sm mb-2 truncate">{study.field}</p>}
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-2 flex-wrap">
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      <span className="text-xs">
                        {formatDate(study.startDate)} - {study.endDate ? formatDate(study.endDate) : "Presente"}
                      </span>
                    </div>
                    {study.description && <p className="text-slate-300 text-xs md:text-sm leading-relaxed line-clamp-3">{study.description}</p>}
                    <div className="flex gap-2 mt-2">
                      <button onClick={() => handleEditStudy(study)} className="flex items-center gap-1 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded">
                        <Edit className="w-3 h-3" /> Edit
                      </button>
                      <button onClick={() => handleDeleteStudy(study.id)} className="flex items-center gap-1 px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded">
                        <X className="w-3 h-3" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-slate-500 mx-auto mb-3 sm:mb-4" />
            <p className="text-slate-400 text-base sm:text-lg">No studies registered</p>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">Add your academic formation to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudiesSection;
