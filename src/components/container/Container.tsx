interface ContainerProps {
  children: React.ReactNode
}

export default function Container ({ children }: ContainerProps) {
  return <section className='container h-full mx-auto pt-10 pb-10'>
    {children}
  </section>
}
