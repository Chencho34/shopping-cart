import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button ({ children, className, onClick }: ButtonProps): JSX.Element {
  return (
    <button 
      className={twMerge('flex items-center justify-center gap-2.5 py-2 bg-purple-800 font-medium text-sm text-white hover:opacity-75 rounded-full transition-all', className)} 
      onClick={onClick}>
      {children}    
    </button> 
  )
}
