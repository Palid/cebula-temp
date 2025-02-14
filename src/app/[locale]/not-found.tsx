"use client"

import { jgs7 } from "@/fonts"
import Image from "next/image"

export default function NotFound() {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm flex-col">
        <section className={`text-6xl flex flex-col text-center`}>
          <span className={`${jgs7.className} text-8xl`}>404</span>
          <span>Page not found</span>
        </section>
        <div className="fixed h-full w-full max-w-[50vw] max-h-[50vh] motion-safe:animate-ping ">
          <Image src="/web-app-manifest-512x512.png" alt="Loading..." fill className="object-contain" priority />
        </div>
      </div>
    </div>
  )
}

