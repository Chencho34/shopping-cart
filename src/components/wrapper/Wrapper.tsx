import { twMerge } from 'tailwind-merge'

interface WrapperProps {
  children: React.ReactNode
  backgroundImage?: string
  className?: string
}

export default function Wrapper ({ children, backgroundImage, className }: WrapperProps) {
  return <main className={twMerge(`md:h-auto h-screen w-full transition-colors duration-500 bg-cover bg-[url("${backgroundImage}")]`, className)}>
    {children}
  </main>
}
