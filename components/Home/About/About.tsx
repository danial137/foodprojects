import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
      <div className='pt-16 pb-16'>
          <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center '>
              {/* {img } */}
              <div>
                  <Image src="/images/a.png" width={800} height={800} alt='image'/>
              </div>
              {/* {text } */}
              <div>
                  <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12'>We deliver our products as fast as superman can do</h1>
                  <p className='mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-bold  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quos distinctio eaque deserunt porro doloremque.</p>

              </div>
          </div>
    </div>
  )
}

export default About