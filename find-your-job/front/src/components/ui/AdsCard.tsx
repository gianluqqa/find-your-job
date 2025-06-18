"use client"
import React from "react"
import { AdsArray } from "src/helpers/AdsArray"
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-20">
      {AdsArray.map((ad: Ad, i: number) => (
        <motion.div
          key={ad.id}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
         className="bg-green-900 text-white border border-green-700 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"

        >
          <h2 className="text-2xl font-bold mb-3 tracking-tight flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-green-400" />
            {ad.company} posted {ad.vacancies} job{ad.vacancies > 1 ? "s" : ""}
          </h2>

          <p className="flex items-center text-sm text-green-200 mb-1">
            <MapPin className="w-4 h-4 mr-2" /> {ad.location}
          </p>
          <p className="flex items-center text-sm text-green-200 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(ad.date).toLocaleDateString()}
          </p>

          <div className="text-sm">
            <p className="font-semibold text-green-300 mb-2">
              Highlighted positions:
            </p>
            <ul className="list-disc list-inside space-y-1 text-green-100">
              {ad.jobTitles.map((title: string, index: number) => (
                <li key={index}>{title}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default AdsCard
