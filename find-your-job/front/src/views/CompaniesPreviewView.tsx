"use client"
import Link from "next/link"
import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { logoCompaniesJob } from "src/helpers/logoCompaniesArray"
import AdsView from "./AdsView"
import Button2 from "src/components/ui/Button2"
import Button1 from "src/components/ui/Button1"

const CompaniesPreviewView = () => {
  const [offset, setOffset] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef(null)

  const imageWidth = 220
  const gap = 32
  const itemTotalWidth = imageWidth + gap
  const totalItems = logoCompaniesJob.length

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev + 1
        if (next >= totalItems * itemTotalWidth) return 0
        return next
      })
    }, 20)
    return () => clearInterval(interval)
  }, [totalItems, itemTotalWidth])

  return (
    <section
      id="companiespreview"
      ref={sectionRef}
      className="min-h-[90vh] w-full bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Main content container with responsive padding */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 w-full relative z-10">
        
        {/* Background decorative elements - responsive sizes */}
        <div className="absolute top-5 sm:top-10 right-10 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-emerald-400/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-emerald-500/5 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-emerald-300/5 rounded-full blur-2xl sm:blur-3xl"></div>

        {/* Floating elements - responsive positions */}
        <div className="absolute top-8 sm:top-16 left-8 sm:left-16 w-3 sm:w-4 h-3 sm:h-4 bg-emerald-400/30 rounded-full animate-float"></div>
        <div className="absolute top-16 sm:top-32 right-16 sm:right-32 w-4 sm:w-6 h-4 sm:h-6 bg-emerald-300/25 rounded-lg rotate-45 animate-float delay-500"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-emerald-500/40 rounded-full animate-float delay-1000"></div>

        {/* Header section - responsive typography */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-400 bg-clip-text text-transparent mb-2 sm:mb-4 leading-tight px-2">
              Trusted by Industry Leaders
            </h2>
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 bg-emerald-400/30 rounded-full animate-ping"></div>
          </div>
          <p className="text-emerald-100/80 text-base sm:text-lg md:text-xl max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4">
            Join thousands of professionals working at the world's most innovative companies
          </p>
        </div>

        {/* Companies carousel - responsive */}
        <div className={`relative mb-12 sm:mb-16 transition-all duration-1000 delay-300 ease-out ${
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}>
          <div 
            className="relative overflow-hidden h-32 sm:h-40 md:h-48 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-emerald-500/20 shadow-2xl"
          >
            <div
              className="flex items-center h-full"
              style={{
                transform: `translateX(-${offset}px)`,
                transition: "transform 0.02s linear",
                width: `${totalItems * 2 * itemTotalWidth}px`,
              }}
            >
              {[...logoCompaniesJob, ...logoCompaniesJob].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 flex justify-center items-center mr-4 sm:mr-6 md:mr-8 group"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 w-[100px] sm:w-[140px] md:w-[180px] h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Enhanced gradient overlays - responsive */}
            <div className="absolute top-0 left-0 w-20 sm:w-32 md:w-40 h-full bg-gradient-to-r from-slate-900 via-emerald-900/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 sm:w-32 md:w-40 h-full bg-gradient-to-l from-slate-900 via-emerald-900/80 to-transparent z-10 pointer-events-none" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer"></div>
          </div>
        </div>

        {/* Stats section - responsive grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-500 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-1 sm:mb-2">500+</div>
            <div className="text-sm sm:text-base text-emerald-100/80">Partner Companies</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105 delay-100">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-1 sm:mb-2">95%</div>
            <div className="text-sm sm:text-base text-emerald-100/80">Success Rate</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105 delay-200 sm:col-span-2 lg:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-1 sm:mb-2">24/7</div>
            <div className="text-sm sm:text-base text-emerald-100/80">Support</div>
          </div>
        </div>

        {/* CTA Button - responsive */}
        <div className={`flex justify-center mb-12 sm:mb-16 transition-all duration-1000 delay-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <Button1 className="rounded-lg text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3" href="/companies" isVisible>
            Browse All Companies
          </Button1>
        </div>
      </div>

      {/* Ads section - OUTSIDE the container to occupy full width */}
      <div className={`w-full transition-all duration-1000 delay-900 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        <AdsView />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        /* Responsive animation adjustments */
        @media (max-width: 640px) {
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  )
}

export default CompaniesPreviewView