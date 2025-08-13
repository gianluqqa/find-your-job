import { ICertificate } from "src/interfaces/ICertificate";
import { Award, Calendar, Plus, X, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useAuth } from "src/context/useAuth";
import { createCertificate, getCertificatesByUserId, deleteCertificate, editCertificate } from "src/api/candidateApi";

const CertificatesSection: React.FC = () => {
  const { user } = useAuth();
  const [certificates, setCertificates] = useState<ICertificate[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<ICertificate>({
    title: "",
    institution: "",
    graduationDate: "",
    url: "",
    userId: user?.id || "",
  });

  // Cargar certificados al montar el componente
  useEffect(() => {
    if (user?.id) {
      fetchCertificates();
    }
  }, [user?.id]);

  const fetchCertificates = async () => {
    try {
      const res = await getCertificatesByUserId(user!.id);
      setCertificates(res);
    } catch (error) {
      console.error("Error al obtener certificados:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteCertificate = async (certificateId: string) => {
    try {
      await deleteCertificate(certificateId, user?.id || "");
      fetchCertificates();
    } catch (error) {
      console.error("Error al eliminar el certificado:", error);
    }
  };

  const handleEditClick = (certificate: ICertificate) => {
    setFormData({
      title: certificate.title,
      institution: certificate.institution,
      graduationDate: certificate.graduationDate.split("T")[0], // Para input date
      url: certificate.url || "",
      userId: user?.id || "",
    });
    setEditingId(certificate.id || null);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.institution || !formData.graduationDate) return;

    try {
      if (editingId) {
        await editCertificate(editingId, formData);
      } else {
        await createCertificate(formData);
      }

      setFormData({
        title: "",
        institution: "",
        graduationDate: "",
        url: "",
        userId: user?.id || "",
      });
      setEditingId(null);
      setShowForm(false);
      fetchCertificates();
    } catch (error) {
      console.error(editingId ? "Error al editar certificado:" : "Error al crear certificado:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-lg border border-slate-600/30 shadow-xl overflow-hidden">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-purple-800/60 to-pink-700/60 p-4 md:p-6 border-b border-slate-600/30 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-700 rounded-lg flex items-center justify-center">
            <Award className="w-4 h-4 md:w-6 md:h-6 text-purple-100" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-100">Certificates</h3>
            <p className="text-purple-200 text-xs md:text-sm lg:text-base">Professional certifications</p>
          </div>
        </div>

        <button
          onClick={() => {
            if (showForm && editingId) {
              setEditingId(null);
              setFormData({
                title: "",
                institution: "",
                graduationDate: "",
                url: "",
                userId: user?.id || "",
              });
            }
            setShowForm(!showForm);
          }}
          className="flex items-center gap-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm transition-colors"
        >
          {showForm ? <X size={16} /> : <Plus size={16} />}
          {showForm ? "Cancel" : "Add"}
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} className="p-4 md:p-6 border-b border-slate-600/30 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Certificate Title"
            className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            placeholder="Institution"
            className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="date"
            name="graduationDate"
            value={formData.graduationDate}
            onChange={handleChange}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Certificate URL (optional)"
            className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors">
              {editingId ? "Update" : "Save"}
            </button>
          </div>
        </form>
      )}

      {/* LISTA DE CERTIFICADOS */}
      <div className="p-4 md:p-6 max-h-80 md:max-h-96 overflow-y-auto">
        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="group p-3 md:p-4 bg-slate-700/40 hover:bg-slate-600/40 rounded-lg border border-slate-600/30 hover:border-purple-600/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mt-1">
                    <Award className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-200 text-sm md:text-base font-medium group-hover:text-purple-200 transition-colors mb-1 truncate">
                      {certificate.title}
                    </h4>
                    <p className="text-purple-300 text-xs md:text-sm font-medium mb-1 truncate">{certificate.institution}</p>
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-2 flex-wrap">
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      <span className="text-xs">
                        {new Date(certificate.graduationDate).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => handleEditClick(certificate)}
                      className="text-blue-400 hover:text-blue-500 transition-colors"
                      title="Editar certificado"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => {
                        if (certificate.id) handleDeleteCertificate(certificate.id);
                        else console.error("ID de certificado indefinido");
                      }}
                      className="text-red-400 hover:text-red-500 transition-colors"
                      title="Eliminar certificado"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 md:py-12">
            <Award className="w-12 h-12 md:w-16 md:h-16 text-slate-500 mx-auto mb-3 md:mb-4" />
            <p className="text-slate-400 text-base md:text-lg">No certificates registered</p>
            <p className="text-slate-500 text-xs md:text-sm mt-1">Add your professional certifications to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatesSection;
