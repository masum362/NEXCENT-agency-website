import { Carousel } from 'flowbite-react'
import React from 'react'
import banner1 from '../assets/banner1.png'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Products from './Products'
import Blog from './Blog'
import Newsletter from './Newsletter'

const Home = () => {
    return (
        <>
        <Hero />
        <Services />
        <About />
        <Products />
        <Blog />
        <Newsletter />
        </>
    )
}

export default Home