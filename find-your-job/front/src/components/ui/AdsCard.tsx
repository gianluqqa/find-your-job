"use client"
import React from "react"
import { AdsArray } from "src/helpers/adsArray"
import { motion, Variants } from "framer-motion"
import { Briefcase, MapPin, Calendar } from "lucide-react"

type Ad = {
  id: string
  company: string
  location: string
  date: string
  vacancies: number
  jobTitles: string[]
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5, type: "spring" },
  }),
}

const AdsCard: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]"></div>
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>
      
      {/* Elementos flotantes pequeños */}
      <div className="absolute top-16 left-16 w-4 h-4 bg-emerald-400/30 rounded-full animate-float"></div>
      <div className="absolute top-32 right-32 w-6 h-6 bg-emerald-300/25 rounded-lg rotate-45 animate-float delay-500"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-emerald-500/40 rounded-full animate-float delay-1000"></div>
      
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-20">
        {AdsArray.map((ad: Ad, i: number) => (
          <motion.div
            key={ad.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group relative overflow-hidden"
          >
            {/* Glassmorphism container */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/50">
              
              {/* Gradiente decorativo superior */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Contenido */}
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 tracking-tight flex items-center gap-3 text-white">
                  <div className="p-2 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-lg group-hover:shadow-emerald-400/30 transition-shadow duration-300">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                    {ad.company}
                  </span>
                </h2>

                {/* Badge de vacantes */}
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-600/80 to-emerald-500/80 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-4 shadow-lg">
                  {ad.vacancies} puesto{ad.vacancies > 1 ? "s" : ""} disponible{ad.vacancies > 1 ? "s" : ""}
                </div>

                {/* Información de ubicación y fecha */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-emerald-200/90 group-hover:text-emerald-100 transition-colors duration-300">
                    <div className="p-1.5 bg-emerald-600/30 rounded-lg mr-3">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{ad.location}</span>
                  </div>
                  
                  <div className="flex items-center text-emerald-200/90 group-hover:text-emerald-100 transition-colors duration-300">
                    <div className="p-1.5 bg-emerald-600/30 rounded-lg mr-3">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">
                      {new Date(ad.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>

                {/* Divisor decorativo */}
                <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mb-5"></div>

                {/* Posiciones destacadas */}
                <div>
                  <p className="font-semibold text-emerald-300 mb-3 text-sm uppercase tracking-wider">
                    Posiciones Destacadas
                  </p>
                  <div className="space-y-2">
                    {ad.jobTitles.map((title: string, index: number) => (
                      <div 
                        key={index}
                        className="flex items-center p-2 bg-emerald-800/30 backdrop-blur-sm rounded-lg border border-emerald-600/20 hover:border-emerald-500/40 transition-all duration-300 group/item"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full mr-3 shadow-sm group-hover/item:shadow-emerald-400/50 transition-shadow duration-300"></div>
                        <span className="text-emerald-100/80 text-sm font-medium group-hover/item:text-emerald-100 transition-colors duration-300">
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default AdsCard