"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './Hero/Hero'
import Restaurant from './Restaurant/Restaurant'
import Category from './Category/Category'
import HowItWork from './HowItWork/HowItWork'
import About from './About/About'
import Feature from './Feature/Feature'
import ClientReview from './ClientReview/ClientReview'
import MobileApp from './MobileApp/MobileApp'

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 600, once: true })
    }, [])

    return (
        <div className='overflow-hidden'>
            <Hero />
            <Restaurant />
            <Category />
            <HowItWork />
            <About />
            <Feature />
            <ClientReview />
            <MobileApp />
        </div>
    )
}