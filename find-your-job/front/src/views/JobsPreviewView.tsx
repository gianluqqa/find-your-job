import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const JobsPreviewView = () => {
  return (
    <section
      id="jobspreview"
      className="min-h-[90vh] bg-green-50 px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto"
    >
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-green-900 mb-4">
          Find Your Ideal Job
        </h2>
        <p className="text-green-800 text-lg leading-relaxed mb-6">
          Browse thousands of job opportunities tailored to your skills and interests. With over{' '}
          <span className="font-semibold">1,200 new applications submitted daily</span>, our platform connects you with companies actively looking for talent like you. Don&apos;t wait—your next opportunity might be just a click away.
        </p>
        <Link
          href="/jobs"
          className="inline-block bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition font-medium"
        >
          Explore Jobs
        </Link>
      </div>

      <div className="flex-shrink-0">
        <Image
          src="/Job1.jpg"
          alt="Job listings illustration"
          width={400}
          height={300}
          className="rounded-lg object-cover shadow-md"
        />
      </div>
    </section>
  )
}

export default JobsPreviewView
