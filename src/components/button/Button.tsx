import { twMerge } from 'tailwind-merge'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: ButtonVariant
}


// const baseStyles = 'flex items-center justify-center gap-2.5 py-2 font-medium text-sm rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
// const variantStyles: Record<ButtonVariant, string> = {
//   primary: 'bg-[#191919] text-gray-200 hover:opacity-90 hover:shadow-lg focus:ring-gray-500',
//   secondary: 'bg-gray-200 text-[#191919] hover:bg-gray-300 hover:shadow-md focus:ring-gray-400',
//   tertiary: 'bg-transparent text-[#191919] border border-[#191919] hover:bg-gray-100 hover:shadow-sm focus:ring-gray-300'
// }

export default function Button ({ children, className, onClick, variant = 'primary' }: ButtonProps): JSX.Element {
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-[#191919] text-gray-200',
    secondary: 'bg-transparent text-[#191919] border-[#191919] border',
    tertiary: 'bg-transparent text-[#191919] hover:bg-gray-100'
  }

  return (
    <button 
      className={twMerge('flex items-center justify-center gap-2.5 py-2 font-medium text-sm rounded-full transition-all duration-300 ease-in-out text-gray-200 hover:opacity-75 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1', variantStyles[variant], className)} 
      onClick={onClick}>
      {children}    
    </button>
  )
}
