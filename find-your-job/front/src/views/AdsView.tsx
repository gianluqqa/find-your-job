import React, { useEffect, useRef, useState } from "react"
import AdsCard from "src/components/ui/AdsCard"
import StatsCard1 from "src/components/ui/StatsCard1"
import styles from "./AdsView.module.css"

const AdsView: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={styles.section}
    >
      {/* Main Container */}
      <div className={styles.container}>
        
        {/* Header Section */}
        <header className={styles.header}>
          <div className={`${styles.fadeInUp} ${
            isVisible 
              ? styles.fadeInUpVisible
              : styles.fadeInUpHidden
          }`}>
            
            {/* Main Title */}
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                Recently Posted Opportunities
              </h1>
              
              {/* Decorative ping element */}
              <div className={`${styles.pingElement} ${styles.pingEnhanced}`} />
            </div>
            
            {/* Subtitle */}
            <p className={`${styles.subtitle} ${styles.fadeInUp} ${styles.fadeInUpDelay300} ${
              isVisible 
                ? styles.fadeInUpVisible
                : styles.fadeInUpHidden
            }`}>
              Check out some of the companies actively hiring right now. These fresh opportunities are waiting for talented professionals like you.
            </p>
          </div>

          {/* Stats Grid */}
          <div className={`${styles.statsGrid} ${styles.fadeInUp} ${styles.fadeInUpDelay500} ${
            isVisible 
              ? styles.fadeInUpVisible
              : styles.fadeInUpHidden
          }`}>
            <div>
              <StatsCard1 value="250+" label="New Jobs This Week" delay={0} />
            </div>
            <div>
              <StatsCard1 value="98%" label="Response Rate" delay={100} />
            </div>
            <div>
              <StatsCard1 value="24h" label="Average Response Time" delay={200} />
            </div>
          </div>
        </header>
      </div>

      {/* Background Decorative Elements */}
      <div className={styles.backgroundDecorations}>
        {/* Large blur circles */}
        <div className={`${styles.blurCircle1} ${styles.pulseEnhanced}`} />
        <div className={`${styles.blurCircle2} ${styles.pulseEnhanced} ${styles.animDelay1000}`} />
        <div className={`${styles.blurCircle3} ${styles.pulseEnhanced} ${styles.animDelay500}`} />

        {/* Floating decorative elements */}
        <div className={`${styles.floatingElement1} ${styles.float}`} />
        <div className={`${styles.floatingElement2} ${styles.float} ${styles.animDelay500}`} />
        <div className={`${styles.floatingElement3} ${styles.float} ${styles.animDelay1000}`} />
        
        {/* Additional floating elements for larger screens */}
        <div className={`${styles.floatingElement4} ${styles.float} ${styles.animDelay200}`} />
        <div className={`${styles.floatingElement5} ${styles.float} ${styles.animDelay700}`} />
        <div className={`${styles.floatingElement6} ${styles.float} ${styles.animDelay300}`} />
      </div>
    </section>
  )
}

export default AdsView