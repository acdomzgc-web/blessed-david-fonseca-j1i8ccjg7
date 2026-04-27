import { useEffect, useState, useRef } from 'react'

interface UseInViewOptions {
  threshold?: number
  triggerOnce?: boolean
}

export function useInView(options: UseInViewOptions = { threshold: 0.1, triggerOnce: true }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options.triggerOnce) {
            observer.unobserve(currentRef)
          }
        } else if (!options.triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold: options.threshold },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options.threshold, options.triggerOnce])

  return { ref, isInView }
}
