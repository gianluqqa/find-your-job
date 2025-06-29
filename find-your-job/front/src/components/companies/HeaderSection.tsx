import React from "react"
import styles from "../../views/CompaniesPreview.module.css"

interface HeaderSectionProps {
  isVisible: boolean
}

const HeaderSection = ({ isVisible }: HeaderSectionProps) => {
  return (
    <div className={`${styles.headerSection} ${
      isVisible 
        ? styles.fadeInUp 
        : styles.fadeOut
    }`}>
      <div className={styles.headerTitleContainer}>
        <h2 className={styles.headerTitle}>
          Trusted by Industry Leaders
        </h2>
        <div className={styles.headerPing}></div>
      </div>
      <p className={styles.headerSubtitle}>
        Join thousands of professionals working at the world's most innovative companies
      </p>
    </div>
  )
}

export default HeaderSection