import React from "react"
import styles from "../../views/CompaniesPreview.module.css"

const BackgroundDecorations = () => {
  return (
    <>
      {/* Background decorative elements */}
      <div className={styles.backgroundDecor1}></div>
      <div className={styles.backgroundDecor2}></div>
      <div className={styles.backgroundDecor3}></div>

      {/* Floating elements */}
      <div className={styles.floatingElement1}></div>
      <div className={styles.floatingElement2}></div>
      <div className={styles.floatingElement3}></div>
    </>
  )
}

export default BackgroundDecorations