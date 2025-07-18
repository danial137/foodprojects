import React from 'react'
import HowItWorkCard from './HowItWorkCard'

const HowItWork = () => {
  return (
      <div className='pt-16 pb-16'>
          <h1 className='text-xl sm:text-2xl text-center font-extrabold'>Let’s see how it works</h1>
          <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10  '>
              <div>
                  <HowItWorkCard num="01" image="/images/w1.png" title="Become a Delivery Man" description="As a delivery driver, you'll make reliable money—working anytime, anywhere."/>
              </div>
              <div>
                  <HowItWorkCard num="02" image="/images/w2.png" title="Become a Partner" description="Grow your business by partnering with us." />
              </div>
              <div>
                  <HowItWorkCard num="03" image="/images/w3.png" title="Try Android/iOS App" description="Experience our platform on mobile devices." />
              </div>
          </div>
    </div>
  )
}

export default HowItWork