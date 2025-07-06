import Image from 'next/image';
import React from 'react'
type props = {
    image: string;
    num: string;
    title: string;
    description: string;

};
const HowItWorkCard = ({ description, image, num, title }: props) => {
    return (
        <div>
            <div className='relative'>
                <Image src={image} alt="img" width={250} height={250} className='object-contain mx-auto' />
            </div>
        </div>
    )
}

export default HowItWorkCard