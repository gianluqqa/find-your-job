"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { logoCompaniesJob } from "src/helpers/logoCompaniesArray"
import AdsView from "./AdsView"

const CompaniesPreviewView = () => {
  const [offset, setOffset] = useState(0)

  const imageWidth = 220
  const gap = 32
  const itemTotalWidth = imageWidth + gap
  const totalItems = logoCompaniesJob.length

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev + 1
        if (next >= totalItems * itemTotalWidth) return 0
        return next
      })
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="companiespreview"
      className="min-h-[90vh] bg-green-900 text-white px-6 py-20 max-w-7xl mx-auto shadow-lg relative"
    >
      <h2 className="text-center text-4xl font-semibold mb-14 tracking-tight">
        Trusted by Industry Leaders
      </h2>

      <div className="relative overflow-hidden h-48">
        <div
          className="flex"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "transform 0.02s linear",
            width: `${totalItems * 2 * itemTotalWidth}px`,
          }}
        >
          {[...logoCompaniesJob, ...logoCompaniesJob].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="w-[220px] flex-shrink-0 flex justify-center items-center mr-8"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={100}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-green-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-green-900 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/companies"
          className="border border-white text-white px-6 py-2 hover:bg-white hover:text-green-900 transition duration-300"
        >
          Browse All Companies
        </Link>
      </div>

      <div className="mt-16">
        <AdsView />
      </div>
    </section>
  )
}

export default CompaniesPreviewView
