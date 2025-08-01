"use client";

import React, { useState } from "react";
import { IStudy } from "src/interfaces/IStudy";
import { createStudy } from "src/api/candidateApi";
import { useAuth } from "src/context/useAuth";

interface AddStudyFormProps {
  onClose: () => void;
}

const AddStudyForm: React.FC<AddStudyFormProps> = ({ onClose }) => {
  const { user, login } = useAuth(); // login para actualizar user en contexto
  const [form, setForm] = useState<Omit<IStudy, "id">>({
    institution: "",
    degree: "Bachelor",
    field: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Llamada a API para crear estudio
      const newStudy = await createStudy(form as IStudy);

      // Actualizamos el user en contexto con el nuevo estudio agregado
      if (user) {
        const updatedStudies = user.studies ? [...user.studies, newStudy] : [newStudy];
        login({ ...user, studies: updatedStudies }, ""); // no actualizamos token, solo user
      }

      setLoading(false);
      onClose();
    } catch (err) {
      setLoading(false);
      setError("Error al crear el estudio, intenta nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-4 rounded-lg shadow-md max-w-md mx-auto">
      <h4 className="text-lg font-semibold mb-4 text-green-300">Add New Study</h4>

      <label className="block mb-2">
        Institution
        <input
          required
          type="text"
          name="institution"
          value={form.institution}
          onChange={handleChange}
          className="w-full rounded px-3 py-2 mt-1 text-slate-900"
        />
      </label>

      <label className="block mb-2">
        Degree
        <select
          required
          name="degree"
          value={form.degree}
          onChange={handleChange}
          className="w-full rounded px-3 py-2 mt-1 text-slate-900"
        >
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="Doctor">Doctor</option>
        </select>
      </label>

      <label className="block mb-2">
        Field
        <input
          type="text"
          name="field"
          value={form.field}
          onChange={handleChange}
          className="w-full rounded px-3 py-2 mt-1 text-slate-900"
        />
      </label>

      <label className="block mb-2">
        Start Date
        <input
          required
          type="month"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="w-full rounded px-3 py-2 mt-1 text-slate-900"
        />
      </label>

      <label className="block mb-2">
        End Date
        <input
          type="month"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="w-full rounded px-3 py-2 mt-1 text-slate-900"
        />
      </label>

      <label className="block mb-2">
        Description
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full rounded px-3 py-2 mt-1 text-slate-900"
          rows={3}
        />
      </label>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-600 hover:bg-gray-700 text-white rounded px-4 py-2"
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2"
        >
          {loading ? "Adding..." : "Add Study"}
        </button>
      </div>
    </form>
  );
};

export default AddStudyForm;
