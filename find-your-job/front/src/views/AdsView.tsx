import React from "react"
import AdsCard from "src/components/ui/AdsCard"

const AdsView: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-24 px-6 min-h-[70vh] w-full">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Recently Posted Opportunities
        </h2>
        <p className="text-lg text-gray-600">
          Check out some of the companies actively hiring right now.
        </p>
      </div>

      <AdsCard />
    </section>
  )
}

export default AdsView
