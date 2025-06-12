import Link from 'next/link'
import React from 'react'

const CompaniesPreviewView = () => {
  return (
    <div>
      <Link href={"/companies"}>
      <button> GO TO COMPANIES VIEW</button>
      </Link>
    </div>
  )
}

export default CompaniesPreviewView