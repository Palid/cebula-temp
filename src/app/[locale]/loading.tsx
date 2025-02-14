"use client"

import Image from "next/image"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative h-full w-full max-w-[50vw] max-h-[50vh] motion-reduce:animate-bounce motion-safe:animate-spin">
        <Image src="/web-app-manifest-512x512.png" alt="Loading..." fill className="object-contain" priority />
      </div>
    </div>
  )
}

