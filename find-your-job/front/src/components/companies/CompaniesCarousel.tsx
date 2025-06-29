import React from "react"
import Image from "next/image"
import styles from "../../views/CompaniesPreview.module.css"

interface CompaniesCarouselProps {
  isVisible: boolean
  offset: number
  logoCompaniesJob: Array<{ id: string; src: string; alt: string }>
  totalItems: number
  itemTotalWidth: number
}

const CompaniesCarousel = ({ 
  isVisible, 
  offset, 
  logoCompaniesJob, 
  totalItems, 
  itemTotalWidth 
}: CompaniesCarouselProps) => {
  return (
    <div className={`${styles.carouselSection} ${
      isVisible 
        ? styles.fadeInUp 
        : styles.fadeOut
    }`}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${offset}px)`,
            width: `${totalItems * 2 * itemTotalWidth}px`,
          }}
        >
          {[...logoCompaniesJob, ...logoCompaniesJob].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className={styles.carouselItem}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className={styles.carouselLogo}
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className={styles.gradientLeft} />
        <div className={styles.gradientRight} />
        
        {/* Shimmer effect */}
        <div className={styles.shimmerEffect}></div>
      </div>
    </div>
  )
}

export default CompaniesCarousel