import { ICertificate } from "src/interfaces/ICertificate";
import { Award, Calendar } from 'lucide-react';
import React from 'react'

const CertificatesSection: React.FC<{certificates: ICertificate[]}> = ({ certificates }) => {
  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-lg border border-slate-600/30 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-800/60 to-pink-700/60 p-4 md:p-6 border-b border-slate-600/30">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-700 rounded-lg flex items-center justify-center">
            <Award className="w-4 h-4 md:w-6 md:h-6 text-purple-100" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-100">Certificates</h3>
            <p className="text-purple-200 text-xs md:text-sm lg:text-base">Professional certifications</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 md:p-6 max-h-80 md:max-h-96 overflow-y-auto">
        {certificates && certificates.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="group p-3 md:p-4 bg-slate-700/40 hover:bg-slate-600/40 rounded-lg border border-slate-600/30 hover:border-purple-600/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mt-1">
                    <Award className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-200 text-sm md:text-base font-medium group-hover:text-purple-200 transition-colors mb-1 truncate">
                      {certificate.title}
                    </h4>
                    <p className="text-purple-300 text-xs md:text-sm font-medium mb-1 truncate">
                      {certificate.institution}
                    </p>
                    
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-2 flex-wrap">
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      <span className="text-xs">
                        {certificate.graduationDate.toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}
                      </span>
                    </div>
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
}

export default CertificatesSection