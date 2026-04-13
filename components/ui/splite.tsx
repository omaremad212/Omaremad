'use client'

import { Suspense, lazy, useState, useEffect, useRef } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  // Pause (unmount) the heavy WebGL scene when it leaves the viewport
  // so it doesn't burn GPU while the user scrolls through other sections
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '200px' }   // keep a 200px buffer before unmounting
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className={className} style={{ width: '100%', height: '100%' }}>
      {visible && (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span className="loader" />
            </div>
          }
        >
          <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
        </Suspense>
      )}
    </div>
  )
}
