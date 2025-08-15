"use client";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "src/components/dashboardCandidate/LoadingSpinner";
import { useAuth } from "src/context/useAuth";
import { updateUser } from "src/api/user";
import { IUserUpdate } from "src/interfaces/IUser";

const DashboardRecruiterView: React.FC = () => {
  const { user, updateUserContext } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState<IUserUpdate>({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    about: "",
    image: "",
  });

  // 🔹 Sincronizamos formData con el user del contexto cada vez que cambie
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        city: user.city || "",
        state: user.state || "",
        country: user.country || "",
        about: user.about || "",
        image: user.image || "",
      });
    }
  }, [user]);

  if (!user) return <LoadingSpinner />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateUser(user.id, formData);    // Guarda en DB
      updateUserContext(formData);            // Actualiza contexto
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#3a4a25] rounded-3xl shadow-lg text-[#d9e4c8] space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-[#b8c67a]">Recruiter Dashboard</h1>
        <p className="text-[#a5b38a]">Manage your profile and job postings</p>
      </div>

      <div className="bg-[#2a3a1a] rounded-2xl p-6 border border-[#5a703a] flex items-start space-x-6">
        <img
          src={formData.image || "https://via.placeholder.com/150"}
          alt={formData.name}
          className="w-32 h-32 rounded-full border-4 border-[#5a703a] object-cover"
        />
        <div className="flex-1 space-y-2">
          {isEditing ? (
            <>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full bg-[#3a4a25] text-[#d9e4c8] rounded p-2 font-semibold" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full bg-[#3a4a25] text-[#d9e4c8] rounded p-2" />
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-[#3a4a25] text-[#d9e4c8] rounded p-2" />
              <div className="flex gap-2">
                <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="flex-1 bg-[#3a4a25] text-[#d9e4c8] rounded p-2" />
                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="flex-1 bg-[#3a4a25] text-[#d9e4c8] rounded p-2" />
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="flex-1 bg-[#3a4a25] text-[#d9e4c8] rounded p-2" />
              </div>
              <textarea name="about" value={formData.about} onChange={handleChange} placeholder="About" className="w-full bg-[#3a4a25] text-[#d9e4c8] rounded p-2" />
            </>
          ) : (
            <>
              <h3 className="text-2xl font-semibold text-[#d9e4c8]">{formData.name}</h3>
              <p className="text-[#a5b38a] mt-1">Role: {user.role}</p>
              <p className="text-[#93a878] italic mt-3">{formData.about || "No description available"}</p>
              <p className="text-[#d9e4c8] mt-2">Location: {formData.country || "Not specified"}, {formData.state || "Not specified"}, {formData.city || "Not specified"}</p>
              <p className="text-[#d9e4c8] mt-1">Email: {formData.email || "Not specified"}</p>
              <p className="text-[#d9e4c8] mt-1">Phone: {formData.phone || "Not specified"}</p>
            </>
          )}
          <div className="mt-4">
            {isEditing ? (
              <button onClick={handleSave} disabled={saving} className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2">
                {saving ? "Saving..." : "Save"}
              </button>
            ) : (
              <button onClick={() => setIsEditing(true)} className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg px-4 py-2">
                Edit Information
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRecruiterView;
