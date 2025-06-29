import React from "react"
import styles from "../../views/CompaniesPreview.module.css"

interface StatsSectionProps {
  isVisible: boolean
}

const StatsSection = ({ isVisible }: StatsSectionProps) => {
  const stats = [
    { number: "500+", label: "Partner Companies" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <div className={`${styles.statsSection} ${
      isVisible 
        ? styles.fadeInUp 
        : styles.fadeOut
    }`}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.statNumber}>{stat.number}</div>
          <div className={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatsSection