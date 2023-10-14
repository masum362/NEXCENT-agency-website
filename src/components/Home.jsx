import { Carousel } from 'flowbite-react'
import React from 'react'
import banner1 from '../assets/banner1.png'

const Home = () => {
    return (
        <div className=' bg-neutralSilver'>
            <div className='px-4 lg:px-14 m-auto max-w-screen-xl min-h-screen h-screen ' id='home'>
                <Carousel className='w-full mx-auto' >
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className='md:w-1/2 '>
                            <h1 className=' text-[2.8rem]  font-semibold text-neutralDGray mb-4 md:w-3/4 leading-snug'>Lessons and insights<span className=' text-branchPrimary leading-snug'> from 8 years</span></h1>
                            <p className=' text-neutralGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className='md:w-1/2 '>
                            <h1 className=' text-[2.6rem]  font-semibold text-neutralDGray mb-4 md:w-3/4 leading-snug'>Learn and Earn Money<span className=' text-branchPrimary leading-snug'> in 4 months</span></h1>
                            <p className=' text-neutralGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    )
}

export default Home