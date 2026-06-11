'use client'

import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { clsx } from 'clsx'

// ============ SECTION WRAPPER ============
interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  variant?: 'default' | 'subtle' | 'dark' | 'gradient'
}

export function Section({ children, className, id, variant = 'default' }: SectionProps) {
  const variants = {
    default: 'bg-white dark:bg-neutral-900',
    subtle: 'bg-neutral-50 dark:bg-neutral-900/50',
    dark: 'bg-neutral-900 dark:bg-neutral-950',
    gradient: 'bg-mesh',
  }
  return (
    <section
      id={id}
      className={clsx('section-padding', variants[variant], className)}
    >
      <div className="container-custom mx-auto">
        {children}
      </div>
    </section>
  )
}

// ============ SECTION HEADER ============
interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  titleGradient?: boolean
}

export function SectionHeader({ badge, title, subtitle, centered = true, titleGradient = false }: SectionHeaderProps) {
  return (
    <div className={clsx('mb-16', centered && 'text-center')}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4 border border-primary-100 dark:border-primary-800">
          {badge}
        </span>
      )}
      <h2 className={clsx(
        'text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight',
        titleGradient ? 'text-gradient' : 'text-neutral-900 dark:text-white'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          'text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed',
          centered && 'max-w-2xl mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ============ FEATURE CARD ============
interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color?: string
  delay?: number
}

export function FeatureCard({ icon, title, description, color = 'primary' }: FeatureCardProps) {
  const colors: Record<string, string> = {
    primary: 'bg-primary-50 dark:bg-primary-900/20 text-primary-500',
    secondary: 'bg-secondary-50 dark:bg-secondary-900/20 text-secondary-500',
    orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-500',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-500',
  }
  return (
    <div className="group card-hover p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-soft">
      <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110', colors[color] || colors.primary)}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{title}</h3>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

// ============ STEP CARD ============
interface StepCardProps {
  number: number
  icon: ReactNode
  title: string
  description: string
  isLast?: boolean
}

export function StepCard({ number, icon, title, description, isLast }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Connector line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 start-1/2 w-full h-px bg-gradient-to-r from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 -z-0" />
      )}
      <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4 shadow-primary">
        <div className="text-white">{icon}</div>
        <div className="absolute -top-2 -end-2 w-6 h-6 rounded-full bg-white dark:bg-neutral-800 border-2 border-primary-500 flex items-center justify-center text-xs font-bold text-primary-500">
          {number}
        </div>
      </div>
      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{title}</h3>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-[200px]">{description}</p>
    </div>
  )
}

// ============ CTA BLOCK ============
interface CTABlockProps {
  title: string
  subtitle: string
  primaryLabel: string
  secondaryLabel?: string
  onPrimary?: () => void
  onSecondary?: () => void
}

export function CTABlock({ title, subtitle, primaryLabel, secondaryLabel }: CTABlockProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-neutral-900 p-12 md:p-16 text-center text-white shadow-strong">
      {/* Decorative blobs */}
      <div className="absolute top-0 start-0 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 end-0 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-primary-200 text-lg mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-all duration-200 shadow-medium hover:-translate-y-0.5 hover:shadow-strong">
            {primaryLabel}
          </button>
          {secondaryLabel && (
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-white/60 hover:bg-white/10 transition-all duration-200">
              {secondaryLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ============ FORM INPUT ============
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function FormInput({ label, error, className, ...props }: FormInputProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label}
      </label>
      <input
        className={clsx(
          'w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          error
            ? 'border-red-300 dark:border-red-700 focus:ring-red-500'
            : 'border-neutral-200 dark:border-neutral-700 hover:border-primary-300',
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}

// ============ FORM TEXTAREA ============
interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export function FormTextarea({ label, error, className, ...props }: FormTextareaProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label}
      </label>
      <textarea
        className={clsx(
          'w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 resize-none',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          error
            ? 'border-red-300 dark:border-red-700 focus:ring-red-500'
            : 'border-neutral-200 dark:border-neutral-700 hover:border-primary-300',
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}

// ============ STAT CARD ============
interface StatCardProps {
  value: string
  label: string
  icon?: ReactNode
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="text-center p-6">
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center mx-auto mb-3">
          {icon}
        </div>
      )}
      <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">{value}</p>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm">{label}</p>
    </div>
  )
}

// ============ BADGE ============
interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'neutral'
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const variants = {
    primary: 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-primary-100 dark:border-primary-800',
    secondary: 'bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 border-secondary-100 dark:border-secondary-800',
    neutral: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700',
  }
  return (
    <span className={clsx('inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border', variants[variant])}>
      {children}
    </span>
  )
}
