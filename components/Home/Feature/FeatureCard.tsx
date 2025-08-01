import React from 'react'
import Image from 'next/image'
type props = {
    icon: string
    title: string
}

const FeatureCard = ({icon,title}:props) => {
  return (
      <div>
          <Image src={icon} alt='icon' width={100} height={100} className='mx-auto object-contain' />
          <h1 className='mt-8 text-lg font-bold text-center'>{title}</h1>
          <p className='text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300'>We’re driven beyond just finishing the projects. We want to find smart solutions.</p>
    </div>
  )
}

export default FeatureCard