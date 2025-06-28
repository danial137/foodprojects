import React from 'react'
import Image from 'next/image'

type props = {
  title: string;
  image: string;

}

const RestaurantCard = ({image,title}:props) => {
  return (
    <div>
      <Image src={image} alt="img" width={400} height={400} className="w-full h-[250px] object-cover" />
      <h1 className="mt-4 w-fit dark:hover:text-amber-300 hover:text-blue-950 transition-all duration-200 cursor-pointer text-base sm:text-lg font-bold">{title}</h1>
    </div>
  )
}

export default RestaurantCard