import React, { useEffect, useState } from "react";
import { Award, Plus, X } from "lucide-react";

import { ISkill, ISkillCreate } from "src/interfaces/ISkills";
import { ITechnology } from "src/interfaces/ITechnology";
import { useAuth } from "src/context/useAuth";
import { getSkillsByUserId, createSkill, deleteSkill, getTechnologies } from "src/api/candidateApi";

const SkillsSection: React.FC = () => {
  const { user } = useAuth();

  const [skills, setSkills] = useState<ISkill[]>([]);
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [selectedTechnologyId, setSelectedTechnologyId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [newSkillName, setNewSkillName] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkillsAndTechs = async () => {
      try {
        if (!user?.id) return;
        const [skillsData, techsData] = await Promise.all([getSkillsByUserId(user.id), getTechnologies()]);
        setSkills(skillsData);
        setTechnologies(techsData);
      } catch (err) {
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSkillsAndTechs();
  }, [user?.id]);

  const handleCreateSkill = async () => {
    if (!user?.id) return;
    if (!newSkillName.trim() && !selectedTechnologyId) return; // al menos uno debe tener valor

    setIsCreating(true);
    try {
      const newSkill = await createSkill({
        userId: user.id,
        customName: newSkillName.trim() || undefined,
        technologyId: selectedTechnologyId || undefined,
      });

      setSkills((prev) => [...prev, newSkill]);
      setNewSkillName("");
      setSelectedTechnologyId("");
      setShowForm(false);
    } catch (err) {
      console.error("Error creating skill:", err);
    } finally {
      setIsCreating(false);
    }
  };

  const handleDeleteSkill = async (skillId: string) => {
    if (!user?.id) return;
    setIsDeletingId(skillId);
    try {
      await deleteSkill(skillId, user.id);
      setSkills((prev) => prev.filter((skill) => skill.id !== skillId));
    } catch (err) {
      console.error("Error deleting skill:", err);
    } finally {
      setIsDeletingId(null);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-lg border border-slate-600/30 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-800/60 to-teal-700/60 p-4 sm:p-6 border-b border-slate-600/30 flex justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-700 rounded-lg sm:rounded-xl flex items-center justify-center">
            <Award className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-100" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">Skills</h3>
            <p className="text-cyan-200 text-sm sm:text-base">Professional competencies</p>
          </div>
        </div>

        <button onClick={() => setShowForm((prev) => !prev)} className="text-cyan-100 hover:text-white transition" title="Add new skill">
          {showForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </button>
      </div>

      {/* New skill form */}
      {showForm && (
        <div className="px-4 sm:px-6 pt-4 space-y-3">
          <input
            type="text"
            placeholder="Custom skill name (optional)"
            value={newSkillName}
            onChange={(e) => setNewSkillName(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />

          <select
            value={selectedTechnologyId}
            onChange={(e) => setSelectedTechnologyId(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          >
            <option value="">Select a technology (optional)</option>
            {technologies.map((tech) => (
              <option key={tech.id} value={tech.id}>
                {tech.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleCreateSkill}
            disabled={isCreating || (!newSkillName.trim() && !selectedTechnologyId)}
            className="w-full px-3 py-2 text-sm font-medium rounded-md bg-cyan-600 hover:bg-cyan-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {isCreating ? "Saving..." : "Save"}
          </button>
        </div>
      )}

      {/* Skills list */}
      <div className="p-4 sm:p-6 max-h-80 sm:max-h-96 overflow-y-auto">
        {loading ? (
          <p className="text-slate-400 text-center">Loading skills...</p>
        ) : error ? (
          <p className="text-red-400 text-center">{error}</p>
        ) : skills.length > 0 ? (
          <div className="grid grid-cols-1 gap-3">
            {skills.map((skillItem) => (
              <div
                key={skillItem.id}
                className="group p-3 sm:p-4 bg-slate-700/40 hover:bg-slate-600/40 rounded-lg sm:rounded-xl border border-slate-600/30 hover:border-cyan-600/40 transition-all duration-300 flex justify-between items-center"
              >
                <div className="flex items-center gap-3 cursor-pointer">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base font-medium group-hover:text-cyan-200 transition-colors">
                    {skillItem.customName || skillItem.technology?.name || "Unnamed Skill"}
                  </span>
                </div>
                <button
                  onClick={() => skillItem.id && handleDeleteSkill(skillItem.id)}
                  disabled={isDeletingId === skillItem.id}
                  className="text-red-500 hover:text-red-600 transition"
                  title="Delete skill"
                >
                  {isDeletingId === skillItem.id ? "Deleting..." : <X className="w-5 h-5" />}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <Award className="w-12 h-12 sm:w-16 sm:h-16 text-slate-500 mx-auto mb-3 sm:mb-4" />
            <p className="text-slate-400 text-base sm:text-lg">No skills registered</p>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">Add your professional skills to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
