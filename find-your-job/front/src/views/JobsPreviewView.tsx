"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Button1 from 'src/components/ui/Button1'
import NotificationCard from 'src/components/ui/NotificationCard'
import StatsCard from 'src/components/ui/StatsCards'

const JobsPreviewView = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [statsCount, setStatsCount] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counter
          let start = 0
          const end = 1200
          const duration = 2000
          const increment = end / (duration / 50)
          
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setStatsCount(end)
              clearInterval(timer)
            } else {
              setStatsCount(Math.floor(start))
            }
          }, 50)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="jobspreview"
      ref={sectionRef}
      className="min-h-[120vh] pt-32 pb-20 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 w-full relative overflow-hidden"
    >
      <div className="px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Content */}
        <div className={`flex-1 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-12'
        }`}>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-6 leading-tight">
              Find Your Ideal Job
            </h2>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-400/30 rounded-full blur-sm animate-bounce delay-500"></div>
          </div>
          
          <p className={`text-slate-700 text-lg leading-relaxed mb-8 transition-all duration-1000 delay-300 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}>
            Browse thousands of job opportunities tailored to your skills and interests. With over{' '}
            <span className="font-bold text-emerald-800 relative inline-block">
              <span className="relative z-10">{statsCount.toLocaleString()} new applications submitted daily</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-200 to-emerald-300 -z-10 transform origin-left scale-x-100 transition-transform duration-1000"></span>
            </span>, our platform connects you with companies actively looking for talent like you. Don&apos;t wait—your next opportunity might be just a click away.
          </p>

          {/* Stats cards */}
          <div className={`grid grid-cols-2 gap-4 mb-8 transition-all duration-1000 delay-500 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <StatsCard value="15K+" label="Active Jobs" />
            <StatsCard value="5K+" label="Companies" delay={100} />
          </div>
          
          <Button1 className="rounded-lg" href="/jobs" isVisible={isVisible}>
            Explore Jobs
          </Button1>
        </div>

        {/* Image section */}
        <div className={`flex-shrink-0 relative transition-all duration-1000 delay-400 ease-out ${
          isVisible 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-12 scale-95'
        }`}>
          <div className="relative group">
            {/* Floating elements around image */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-emerald-400/20 rounded-xl rotate-12 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-emerald-500/30 rounded-full animate-float delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-emerald-300/25 rounded-lg rotate-45 animate-float delay-500"></div>
            
            {/* Main image container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-emerald-50/30 p-2">
              <Image
                src="/Job1.jpg"
                alt="Job listings illustration"
                width={450}
                height={350}
                className="rounded-2xl object-cover w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>

            {/* Floating notification card */}
            <NotificationCard 
              title="New job posted"
              subtitle="Senior Developer • Remote"
              isVisible={isVisible}
              variant="floating"
              position="bottom-left"
              delay={1000}
            />
          </div>
        </div>
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
    </section>
  )
}

export default JobsPreviewView