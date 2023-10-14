import React from 'react'
import brand1 from '../assets/icons/brand1.png'
import brand2 from '../assets/icons/brand2.png'
import brand3 from '../assets/icons/brand3.png'
import brand4 from '../assets/icons/brand4.png'
import brand5 from '../assets/icons/brand5.png'
import brand6 from '../assets/icons/brand6.png'
import membershipImg from '../assets/cards/membership.png';
import nationalImg from '../assets/cards/national.png';
import clubsgroupsImg from '../assets/cards/clubsgroups.png';

const Services = () => {
    const cards = [
        { id: 1, title: 'Membership Organisations', description: "Our membership management software provides full automation of membership renewals and payments", image: `${membershipImg}` },
        { id: 2, title: 'National Associations', description: "Our membership management software provides full automation of membership renewals and payments", image: `${nationalImg}` },
        { id: 1, title: 'Clubs And Groups', description: "Our membership management software provides full automation of membership renewals and payments", image: `${clubsgroupsImg}` },
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-xl mx-auto' id='services'>
            <div className='text-center my-8'>
                <h2 className='text-4xl font-semibold mb-3 text-neutralDGray'>Our Clients</h2>
                <p className=' text-neutralDGray'>We have been working with some Fortune 500+ clients</p>
            </div>
            {/* brand icons*/}
            <div className='my-12 grid sm:grid-cols-6 grid-cols-3 place-items-center w-full  gap-8'>
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
                <img src={brand5} alt="" />
                <img src={brand6} alt="" />
            </div>
            {/* services card */}
            <div className='mt-10 md:w-1/2 mx-auto text-center '>
                <h2 className='text-4xl font-semibold mb-3 text-neutralDGray'>Manage your entire community in a single system</h2>
                <p className=' text-neutralDGray'>Who is Nextcent suitable for?</p>
            </div>

            {/* cards */}
            <div className='cards grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-14 gap-12'>
                {cards.map(card => {
                    return <div className='px-4 py-8 mx-auto text-center md:w-[300px] md:h-80 rounded-md cursor-pointer shadow hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center flex-col'>
                        <div className='bg-[#E8F5E9] h-14 w-14 mx-auto border-tl-3xl border-br-3xl'>  <img src={card.image} alt="card-image"  className='-ml-5'/></div>

                        <h1 className='font-semibold text-2xl text-neutralDGray mb-2 mx-2 '>{card.title}</h1>
                        <p className=' text-neutralGray'>{card.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services