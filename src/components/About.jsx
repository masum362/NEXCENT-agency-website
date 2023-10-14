import React from 'react'
import banner2 from '../assets/banner2.png'

const About = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 my-8 max-w-screen-xl mx-auto' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={banner2} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto '>
                        <h2 className='text-3xl text-neutralDGray font-semibold mb-4 md:w-4/5'>
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralGray mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='px-4 lg:px-14 my-8 max-w-screen-xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-3xl text-neutralDGray font-semibold mb-4 md:w-2/3'>
                            Helping a local <br /><span className='text-branchPrimary '>business reinvent itself</span>
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralGray mb-8'>We reached here with our hard work and dedication</p>
                    </div>

                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex gap-4 items-center '>
                                <img src="./src/assets/New folder/member.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGray font-semibold'>2,245,341</h4>
                                    <p>members</p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <img src="./src/assets/New folder/event.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGray font-semibold'>828,867</h4>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                           
                            
                        </div>
                        <div className='space-y-8'>
                            <div className='flex gap-4 items-center '>
                                <img src="./src/assets/New folder/clubs.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGray font-semibold'>46,328</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <img src="./src/assets/New folder/payments.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGray font-semibold'>1,926,436</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                           
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About