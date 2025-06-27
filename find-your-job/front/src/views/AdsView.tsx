import React, { useEffect, useRef, useState } from "react"
import AdsCard from "src/components/ui/AdsCard"
import StatsCard1 from "src/components/ui/StatsCard1"

const AdsView: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  return (
    <section 
      ref={sectionRef}
className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32 min-h-screen w-full relative overflow-hidden"    >
      {/* Background decorative elements - fully responsive */}
      <div className="absolute top-4 sm:top-8 md:top-12 lg:top-16 xl:top-20 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 w-12 sm:w-16 md:w-20 lg:w-32 xl:w-40 h-12 sm:h-16 md:h-20 lg:h-32 xl:h-40 bg-emerald-200/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse"></div>
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 w-16 sm:w-20 md:w-24 lg:w-36 xl:w-48 h-16 sm:h-20 md:h-24 lg:h-36 xl:h-48 bg-emerald-300/15 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 md:w-16 lg:w-24 xl:w-32 h-8 sm:h-12 md:h-16 lg:h-24 xl:h-32 bg-emerald-400/10 rounded-full blur-lg sm:blur-xl md:blur-2xl animate-pulse delay-500"></div>

      {/* Floating elements - fully responsive positions */}
      <div className="absolute top-4 sm:top-8 md:top-12 lg:top-16 right-8 sm:right-12 md:right-16 lg:right-24 xl:right-32 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-emerald-400/30 rounded-full animate-float"></div>
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-24 xl:bottom-32 left-8 sm:left-12 md:left-16 lg:left-24 xl:left-32 w-3 sm:w-4 md:w-5 lg:w-6 h-3 sm:h-4 md:h-5 lg:h-6 bg-emerald-300/25 rounded-lg rotate-45 animate-float delay-500"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-emerald-500/40 rounded-full animate-float delay-1000"></div>

      {/* Content container - absolutely full width with edge-to-edge responsive padding */}
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative z-10">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative inline-block mb-3 sm:mb-4 md:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-1 sm:mb-2 md:mb-4 leading-tight tracking-tight px-1 sm:px-2">
                Recently Posted Opportunities
              </h2>
              <div className="absolute -top-1 sm:-top-2 md:-top-4 -right-1 sm:-right-2 md:-right-4 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 bg-emerald-400/30 rounded-full animate-ping"></div>
            </div>
            
            <p className={`text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto px-2 sm:px-4 transition-all duration-1000 delay-300 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              Check out some of the companies actively hiring right now. These fresh opportunities are waiting for talented professionals like you.
            </p>
          </div>

          {/* Stats section - fully responsive grid that spans entire width */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-8 md:mt-12 lg:mt-16 mb-6 sm:mb-8 md:mb-12 w-full transition-all duration-1000 delay-500 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <StatsCard1 value="250+" label="New Jobs This Week" delay={0} />
            <StatsCard1 value="98%" label="Response Rate" delay={100} />
            <div className="sm:col-span-2 lg:col-span-1">
              <StatsCard1 value="24h" label="Average Response Time" delay={200} />
            </div>
          </div>
        </div>

        {/* AdsCard container - absolutely full width responsive */}
        <div className={`relative z-10 w-full transition-all duration-1000 delay-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <AdsCard />
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
        
        /* Progressive responsive animations */
        @media (max-width: 640px) {
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        }
        
        @media (max-width: 480px) {
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
        }
        
        /* Ensure perfect full-width behavior */
        @media (min-width: 1920px) {
          .animate-float {
            animation: float 2.5s ease-in-out infinite;
          }
        }
        
        /* Ultra-wide screen support */
        @media (min-width: 2560px) {
          section {
            padding-left: 5rem;
            padding-right: 5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default AdsView