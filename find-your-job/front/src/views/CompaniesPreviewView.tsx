"use client"
import Link from "next/link"
import React, { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { logoCompaniesJob } from "src/helpers/logoCompaniesArray"
import AdsView from "./AdsView"

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
      <div className="px-6 py-20 max-w-7xl mx-auto relative z-10">
        
        {/* Background decorative elements */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>

        {/* Floating elements */}
        <div className="absolute top-16 left-16 w-4 h-4 bg-emerald-400/30 rounded-full animate-float"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-emerald-300/25 rounded-lg rotate-45 animate-float delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-emerald-500/40 rounded-full animate-float delay-1000"></div>

        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-400 bg-clip-text text-transparent mb-4 leading-tight">
              Trusted by Industry Leaders
            </h2>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400/30 rounded-full animate-ping"></div>
          </div>
          <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Join thousands of professionals working at the world's most innovative companies
          </p>
        </div>

        {/* Companies carousel */}
        <div className={`relative mb-16 transition-all duration-1000 delay-300 ease-out ${
          isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}>
          <div 
            className="relative overflow-hidden h-48 rounded-3xl bg-white/5 backdrop-blur-sm border border-emerald-500/20 shadow-2xl"
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
                  className="w-[220px] flex-shrink-0 flex justify-center items-center mr-8 group"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={100}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Enhanced gradient overlays */}
            <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-slate-900 via-emerald-900/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-slate-900 via-emerald-900/80 to-transparent z-10 pointer-events-none" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer"></div>
          </div>
        </div>

        {/* Stats section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-500 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-emerald-300 mb-2">500+</div>
            <div className="text-emerald-100/80">Partner Companies</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105 delay-100">
            <div className="text-3xl font-bold text-emerald-300 mb-2">95%</div>
            <div className="text-emerald-100/80">Success Rate</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105 delay-200">
            <div className="text-3xl font-bold text-emerald-300 mb-2">24/7</div>
            <div className="text-emerald-100/80">Support</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <Link
            href="/companies"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-2xl hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 border border-emerald-500/30 hover:border-emerald-400/50 overflow-hidden"
          >
            <span className="relative z-10">Browse All Companies</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            
            {/* Button shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
          </Link>
        </div>

        {/* Ads section */}
        <div className={`transition-all duration-1000 delay-900 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <AdsView />
        </div>
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
      `}</style>
    </section>
  )
}

export default CompaniesPreviewView