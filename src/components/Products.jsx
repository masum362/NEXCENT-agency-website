import React from 'react'
import mobileLogin from '../assets/mobile-login.png'
import product from '../assets/product.png'
import brand1 from '../assets/icons/brand1.png'
import brand2 from '../assets/icons/brand2.png'
import brand3 from '../assets/icons/brand3.png'
import brand4 from '../assets/icons/brand4.png'
import brand5 from '../assets/icons/brand5.png'
import brand6 from '../assets/icons/brand6.png'
import arrow from '../assets/arrow.png'

const Products = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 my-8 max-w-screen-xl mx-auto' id='product'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={mobileLogin} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-3xl text-neutralDGray font-semibold mb-4 md:w-4/5'>
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralGray mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='px-4 lg:px-14 my-8 max-w-screen-xl mx-auto bg-neutralSilver py-16'>
             
                <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
                    <div className="md:w-1/3">
                        <div>
                            <img src={product} alt="" />
                        </div>
                    </div>
                    <div className='md:w-2/3 mx-auto'>
                        <div>
                            <p className=' md:w-4/5 text-sm text-neutralGray mb-8 leading-7'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                            <h5 className='text-branchPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                            <p className='pb-8'>British Dragon Boat Racing Association</p>
                            <div className='flex md:items-center flex-col md:flex-row  gap-12'>
                                <div className='flex md:items-center  flex-wrap gap-12'>
                                    <img src={brand1} alt=""  className='cursor-pointer '/>
                                    <img src={brand2} alt=""  className='cursor-pointer '/>
                                    <img src={brand3} alt="" className='cursor-pointer '/>
                                    <img src={brand4} alt=""  className='cursor-pointer '/>
                                    <img src={brand5} alt="" className='cursor-pointer '/>
                                    <img src={brand6} alt="" className='cursor-pointer '/>
                                </div>
                                <a href="#" className='text-branchPrimary font-bold hover:text-neutralDGray'>Meet all customers <img src={arrow} alt='arrow' className='inline-block ml-0' /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Products