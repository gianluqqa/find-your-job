"use client"
import React, { useEffect, useState, useRef } from "react"
import { logoCompaniesJob } from "src/helpers/logoCompaniesArray"
import AdsView from "./AdsView"
import Button1 from "src/components/ui/Button1"
import styles from "./CompaniesPreview.module.css"
import BackgroundDecorations from "src/components/companies/BackgroundDecorations"
import CompaniesCarousel from "src/components/companies/CompaniesCarousel"
import HeaderSection from "src/components/companies/HeaderSection"
import StatsSection from "src/components/companies/StatsSection"

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
      className={styles.mainSection}
    >
      <div className={styles.contentContainer}>
        <BackgroundDecorations />
        
        <HeaderSection isVisible={isVisible} />
        
        <CompaniesCarousel 
          isVisible={isVisible} 
          offset={offset}
          logoCompaniesJob={logoCompaniesJob}
          totalItems={totalItems}
          itemTotalWidth={itemTotalWidth}
        />
        
        <StatsSection isVisible={isVisible} />
        
        <div className={`${styles.ctaContainer} ${
          isVisible 
            ? styles.fadeInUp 
            : styles.fadeOut
        }`}>
          <Button1 className="rounded-lg text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3" href="/companies" isVisible>
            Browse All Companies
          </Button1>
        </div>
      </div>

      <div className={`${styles.adsContainer} ${
        isVisible 
          ? styles.fadeInUp 
          : styles.fadeOut
      }`}>
        <AdsView />
      </div>
    </section>
  )
}

export default CompaniesPreviewView