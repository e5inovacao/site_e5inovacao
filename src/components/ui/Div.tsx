import { forwardRef, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type DivProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'container' | 'card' | 'section'
  ariaLabel?: string
  ariaLabelledBy?: string
  interactive?: boolean
}

const Div = forwardRef<HTMLDivElement, DivProps>(function Div(
  { variant, ariaLabel, ariaLabelledBy, interactive, className, ...props },
  ref
) {
  const role = ariaLabel || ariaLabelledBy ? 'region' : undefined
  const variants: Record<string, string> = {
    container: 'container-custom',
    card: 'card-minimal',
    section: 'section-padding bg-surface',
  }
  const merged = twMerge(
    clsx(variant ? variants[variant] : undefined, interactive ? 'focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-xl' : undefined, className)
  )
  return (
    <div ref={ref} role={role} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} className={merged} {...props} />
  )
})

export default Div