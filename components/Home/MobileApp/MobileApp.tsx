import React from 'react'
import Image from 'next/image'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
const MobileApp = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>

                <Image src="/images/app.png" alt="Mobile App" width={800} height={800} className='object-cover' />
                <div>
                    <h1 className='text-2xl sm:text-4xl font-bold leading-8 sm:leading-12'>Connecting our user with iOS & Android apps. Download from iTune & Play store</h1>
                    <p className='mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400 '>Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. We’re driven beyond just finishing the projects. We want to find solutions using our website & apps.</p>
                    {/* {download app } */}
                    <div className='sm:flex space-y-3 sm:space-y-0 space-x-4 mt-8'>
                        {/* {appp store buttons} */}
                        <a href="#_" className='flex w-fit items-center ground border border-gray-400 px-4 py-3 rounded-md  bg-gray-950 transition-all duration-300'>
                            <FaApple className='text-2xl mr-2 text-white transition-all duration-300 ' />ّ
                            <div>
                                <p className='text-xs transition-all text-white duration-300'>Download on the </p>
                                <p className='text-white text-sm font-semibold transition-all duration-300'>App Store</p>
                            </div>
                        </a>
                        {/* {appp store buttons} */}
                        <a href="#_" className='flex w-fit items-center ground border border-gray-400 px-4 py-3 rounded-md  bg-gray-950 transition-all duration-300'>
                            <FaGooglePlay className='text-2xl mr-2 text-white transition-all duration-300 ' />ّ
                            <div>
                                <p className='text-xs transition-all text-white duration-300'>Download on the </p>
                                <p className='text-white text-sm font-semibold transition-all duration-300'>Google Play</p>
                            </div>
                        </a>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default MobileApp