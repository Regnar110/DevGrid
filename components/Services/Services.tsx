import React from 'react'
interface Props {
    children: JSX.Element[]
}
const Services = ({children}:Props) => {
  return (
    <section className='w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10 lg:gap-5'>
      {children.map(el=>el)}
    </section>
  )
}

export default Services
