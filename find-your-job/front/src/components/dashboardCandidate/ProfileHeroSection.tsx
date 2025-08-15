"use client";
import React, { useState } from "react";
import { User, Save, Edit3 } from "lucide-react";
import { useAuth } from "src/context/useAuth";
import { updateUser } from "src/api/user";
import LoadingSpinner from "./LoadingSpinner";

const ProfileHeroSection: React.FC = () => {
  const { user, updateUserContext } = useAuth(); // 🔹 obtenemos updateUserContext
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    city: user?.city || "",
    state: user?.state || "",
    country: user?.country || "",
    about: user?.about || "",
    image: user?.image || "",
  });
  const [saving, setSaving] = useState(false);

  if (!user) {
    return <LoadingSpinner />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateUser(user.id, formData);

      // 🔹 sincronizamos el contexto con los cambios guardados
      updateUserContext(formData);

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl border border-slate-600/20 shadow-md p-6 sm:p-8 mb-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          {isEditing ? (
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl border border-slate-400 p-1 text-sm"
            />
          ) : (
            <img
              src={formData.image || "/default-avatar.png"}
              alt={formData.name}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl border border-slate-400 object-cover"
            />
          )}
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center text-white">
            <User className="w-5 h-5" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 w-full space-y-4 text-center lg:text-left">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-gray-100 text-gray-900 rounded p-2 font-semibold text-lg"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-gray-100 text-gray-900 rounded p-2"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full bg-gray-100 text-gray-900 rounded p-2"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="flex-1 bg-gray-100 text-gray-900 rounded p-2"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="flex-1 bg-gray-100 text-gray-900 rounded p-2"
                />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="flex-1 bg-gray-100 text-gray-900 rounded p-2"
                />
              </div>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="About"
                className="w-full bg-gray-100 text-gray-900 rounded p-2 text-base"
              />
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">{formData.name}</h2>
              <p className="text-gray-400">{formData.email}</p>
              <p className="text-gray-400">{formData.phone}</p>
              <p className="text-gray-400">
                <strong></strong> {formData.city}, {formData.state}, {formData.country}
              </p>
              <p className="text-gray-400">About: {formData.about}</p>
            </>
          )}

          {/* Edit / Save Button */}
          <div className="mt-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg px-4 py-2 transition"
              >
                <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save"}
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg px-4 py-2 transition"
              >
                <Edit3 className="w-4 h-4" /> Editar información
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeroSection;
