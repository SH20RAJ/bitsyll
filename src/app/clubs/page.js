import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
    redirect("https://github.com/SH20RAJ/bitsyll/issues/2")
  return (
    <div>
      Redirecting to https://github.com/SH20RAJ/bitsyll/issues/2...
    </div>
  )
}
