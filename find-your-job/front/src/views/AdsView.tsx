import React, { useEffect, useRef, useState } from "react"
import AdsCard from "src/components/ui/AdsCard"

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
      className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 py-32 px-0 min-h-screen w-full relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      {/* Floating elements */}
      <div className="absolute top-16 right-32 w-4 h-4 bg-emerald-400/30 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-32 w-6 h-6 bg-emerald-300/25 rounded-lg rotate-45 animate-float delay-500"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-emerald-500/40 rounded-full animate-float delay-1000"></div>

      <div className="w-full mx-auto text-center mb-20 relative z-10 px-6">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-4 leading-tight tracking-tight">
              Recently Posted Opportunities
            </h2>
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-emerald-400/30 rounded-full animate-ping"></div>
          </div>
          
          <p className={`text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}>
            Check out some of the companies actively hiring right now. These fresh opportunities are waiting for talented professionals like you.
          </p>
        </div>

        {/* Stats section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-12 max-w-5xl mx-auto transition-all duration-1000 delay-500 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-emerald-700 mb-3">250+</div>
            <div className="text-base text-slate-600">New Jobs This Week</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 delay-100">
            <div className="text-4xl font-bold text-emerald-700 mb-3">98%</div>
            <div className="text-base text-slate-600">Response Rate</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 delay-200">
            <div className="text-4xl font-bold text-emerald-700 mb-3">24h</div>
            <div className="text-base text-slate-600">Average Response Time</div>
          </div>
        </div>
      </div>

      <div className={`relative z-10 w-full transition-all duration-1000 delay-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        <AdsCard />
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

export default AdsView