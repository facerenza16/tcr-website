import { WA_LINK } from '@/lib/constants'
import { AnchorHTMLAttributes } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  href = WA_LINK,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E87B2A]'

  const sizes = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary:
      'bg-[#E87B2A] text-white hover:bg-[#d06920] hover:scale-105 active:scale-100 shadow-lg shadow-[#E87B2A]/30',
    ghost:
      'bg-transparent border-2 border-[#1787C4] text-[#1787C4] hover:bg-[#1787C4] hover:text-white active:scale-95',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
