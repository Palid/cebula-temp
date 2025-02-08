'use client'

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight text-black sm:text-8xl">
          {error.name}
        </h1>
        <p className="mt-4 text-lg text-gray-500">{error.message}</p>
        <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-xs hover:bg-red-700 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
            onClick={reset}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}
