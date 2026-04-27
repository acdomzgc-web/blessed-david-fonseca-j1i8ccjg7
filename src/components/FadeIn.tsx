import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/use-in-view'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={cn(isInView ? 'animate-fade-in-up' : 'opacity-0', className)}
      style={isInView ? { animationDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  )
}
