import { twMerge } from 'tailwind-merge'

interface InputProps {
  id?: string
  name?: string
  value?: string | number | undefined
  placeholder?: string
  type: 'text' | 'email' | 'password' | 'number' 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  readOnly?: boolean | undefined
}

export default function Input ({ placeholder, type, onChange, id, name, value, className, readOnly }: InputProps): JSX.Element {
  return <input 
    className={twMerge('h-10 w-full rounded-full border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 bg-transparent text-gray-200 font-normal', className) }
    placeholder={placeholder} 
    onChange={onChange} 
    type={type} 
    id={id}
    name={name}
    value={value}
    readOnly={readOnly}
  />
}
