"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Button1 from 'src/components/ui/Button1'
import NotificationCard from 'src/components/ui/NotificationCard'
import StatsCard from 'src/components/ui/StatsCards'
import styles from './JobsPreviewView.module.css'

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
      className={styles.container}
    >
      <div className={styles.content}>
        {/* Background decorative elements */}
        <div className={`${styles.bgDecor} ${styles.bgDecor1}`}></div>
        <div className={`${styles.bgDecor} ${styles.bgDecor2}`}></div>
        
        {/* Content */}
        <div className={`${styles.textSection} ${
          isVisible 
            ? styles.visible 
            : styles.hidden
        }`}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>
              Find Your Ideal Job
            </h2>
            <div className={styles.titleDecor}></div>
          </div>
          
          <p className={`${styles.description} ${
            isVisible 
              ? styles.descriptionVisible 
              : styles.descriptionHidden
          }`}>
            Browse thousands of job opportunities tailored to your skills and interests. With over{' '}
            <span className={styles.statsHighlight}>
              <span className={styles.statsText}>{statsCount.toLocaleString()} new applications submitted daily</span>
              <span className={styles.statsUnderline}></span>
            </span>, our platform connects you with companies actively looking for talent like you. Don&apos;t wait—your next opportunity might be just a click away.
          </p>

          {/* Stats cards */}
          <div className={`${styles.statsGrid} ${
            isVisible 
              ? styles.statsVisible 
              : styles.statsHidden
          }`}>
            <StatsCard value="15K+" label="Active Jobs" />
            <StatsCard value="5K+" label="Companies" delay={100} />
          </div>
          
          <Button1 className={styles.button} href="/jobs" isVisible={isVisible}>
            Explore Jobs
          </Button1>
        </div>

        {/* Image section */}
        <div className={`${styles.imageSection} ${
          isVisible 
            ? styles.imageVisible 
            : styles.imageHidden
        }`}>
          <div className={styles.imageContainer}>
            {/* Floating elements around image */}
            <div className={`${styles.floatingElement} ${styles.float1}`}></div>
            <div className={`${styles.floatingElement} ${styles.float2}`}></div>
            <div className={`${styles.floatingElement} ${styles.float3}`}></div>
            
            {/* Main image container */}
            <div className={styles.imageWrapper}>
              <Image
                src="/Job1.jpg"
                alt="Job listings illustration"
                width={450}
                height={350}
                className={styles.image}
              />
              
              {/* Overlay gradient */}
              <div className={styles.imageOverlay}></div>
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
    </section>
  )
}

export default JobsPreviewView