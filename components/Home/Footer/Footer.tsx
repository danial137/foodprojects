import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'

const Footer = () => {
  return (
      <div className='pt-16 pb-16 bg-gray-800'>
          <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
              {/* {1st part} */}
              <div>
                  <div className='flex items-center space-x-2'>
                      <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                          <MdDeliveryDining className='w-6 h-6 text-black'/>
                      </div>
                      <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>FOODIE</h1>
                      
                  </div>
                  <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ullam consequuntur voluptate eligendi, blanditiis ab quae maiores!</p>
              </div>
              
          </div>
    </div>
  )
}

export default Footer