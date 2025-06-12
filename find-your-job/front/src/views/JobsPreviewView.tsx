import Link from 'next/link'
import React from 'react'

const JobsPreviewView = () => {
  return (
    <div>
      <Link href={"/jobs"}>
      <button> GO TO JOBS VIEW</button>
      </Link>
    </div>
  )
}

export default JobsPreviewView