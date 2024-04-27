import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button ({ children, className, onClick }: ButtonProps): JSX.Element {
  return (
    <button 
      className={twMerge('flex items-center justify-center gap-2.5 py-2 bg-[#191919] font-medium text-sm text-gray-200 hover:opacity-75 rounded-full transition-all', className)} 
      onClick={onClick}>
      {children}    
    </button>
  )
}
