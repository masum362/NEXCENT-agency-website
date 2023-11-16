import React, { useEffect, useState } from 'react'
import logo from '../assets/icon.svg'
// import { Link } from 'react-scroll'

import { FaXmark, FaBars } from "react-icons/fa6";
import { NavLink,Link } from 'react-router-dom';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };


        return () => {
            window.addEventListener('scroll', handleScroll)
            console.log('calling scroll event')
        }
    },[isSticky])

    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'Services', path: 'services' },
        { link: 'About', path: 'about' },
        { link: 'Product', path: 'product' },
        { link: 'Testimonial', path: 'testimonial' },
        { link: 'FAQ', path: 'faq' },
    ]

    return (
        <header className='w-full bg-white  fixed top-0 left-0 right-0 z-20'>
            <nav className={`py-4 lg:px-14 px-4 sticky top-0 left-0 right-0 border-b bg-white duration-300 `}>
                <div className='flex justify-between items-center text-base gap-8 '>
                    <Link to='/' className='cursor-pointer text-2xl font-semibold flex items-center space-x-4'> <img src={logo} alt="logo" className='w-10 inline-block items-center' /><span className=' uppercase text-branchSecondary'>Nexcent</span> </Link>

                    {/* mapping the nav items  */}
                    <ul className='md:flex hidden space-x-12'>
                        {
                            navItems.map(item => <Link to={item.path} key={item.link} spy={true} smooth={true} offset={-100} className='block text-base text-neutralDGray hover:text-branchPrimary cursor-pointer first:font-medium'>{item.link}</Link>


                            )
                        }
                    </ul>

                    {/* btn for lg screen only */}

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <NavLink to={'/login'} className='hidden lg:flex  text-branchPrimary hover:text-neutralDGray'>Login</NavLink>
                        <NavLink to={'/register'} className='bg-branchPrimary text-white hover:bg-neutralDGray rounded py-2 px-4 transition-all duration-300'>Register Now</NavLink>
                    </div>

                    {/* btn for mobile menu  */}
                    <div className='md:hidden'>
                        <button className=' text-neutralDGray focus:outline-none focus:text-gray-500' onClick={toggleMenu}>
                            {isMenuOpen ? <FaXmark /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* menu items for mobile device */}
                <div className={`space-y-4 px-7 mt-16 py-7 bg-branchPrimary ${isMenuOpen ? 'fixed top-0 left-0 right-0' : 'hidden'} flex flex-col justify-start items-start md:hidden`}>

                    {
                        navItems.map(item => <Link to={item.path} key={item.link} spy={true} smooth={true} offset={-100} className='block md:hidden text-lg text-white cursor-pointer first:font-medium text-left '>{item.link}</Link>


                        )
                    }


                </div>

            </nav>
        </header>
    )
}

export default Navbar