import React from 'react'

type Props = {
    children: React.ReactNode
}

const Htext = ({children}: Props) => {
  return (
    <h1 className='text-center text-black font-montserrat text-3xl sm:text-5xl font-bold'>
        {children}
    </h1>
  )
}

export default Htext