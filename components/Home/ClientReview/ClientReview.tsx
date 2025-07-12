"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1224 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1224, min: 764 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const ClientReview = () => {
    return (
        <div className='pt-16 pb-6 '>
            <h1 className='text-xl sm:text-2xl text-center font-extrabold'>What people say about us</h1>
            <div className='mt-16 w-[80%] mx-auto '>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                >
                    <ReviewCard reviewTile="Great Work !" userName="jessica" userImage="/images/c1.png" role="UI UX Designer" />
                    <ReviewCard reviewTile="CREATING WORK !" userName="JOHN DO" userImage="/images/c2.png" role="WEB DEVELOOPER" />
                    <ReviewCard reviewTile="AWESOME !" userName="DANIAL" userImage="/images/c3.png" role="SOFTWARE ENGINEER" />
                </Carousel>
            </div>
        </div>
    )
}

export default ClientReview