"use client"

import Image from "next/image"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative h-16 w-16 animate-spin">
        <Image src="/web-app-manifest-512x512.png" alt="Loading..." fill className="object-contain" priority />
      </div>
    </div>
  )
}

