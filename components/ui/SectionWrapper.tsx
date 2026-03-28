import { HTMLAttributes } from 'react'

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string
  bg?: string
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

export function SectionWrapper({
  id,
  bg = '#ffffff',
  children,
  className = '',
  innerClassName = '',
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      style={{ backgroundColor: bg }}
      className={`py-20 md:py-28 px-4 ${className}`}
      {...props}
    >
      <div className={`max-w-5xl mx-auto ${innerClassName}`}>{children}</div>
    </section>
  )
}
