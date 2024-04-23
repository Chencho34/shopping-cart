import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export default function Container ({ children, className }: ContainerProps) {
  return <section className={twMerge('container mx-auto pt-10 pb-10 px-7', className)}>
    {children}
  </section>
}
