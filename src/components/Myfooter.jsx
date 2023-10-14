import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../assets/icon.svg'


const Myfooter = () => {
    return (
        <Footer container className='px-4 lg:px-14 my-8 max-w-screen-xl mx-auto bg-neutralSilver py-16' id='faq'>
            <div className="w-full">
                <div className="grid w-full  gap-8 sm:flex justify-center md:justify-between md:flex md:grid-cols-1">
                    <div className='space-y-6'>
                        <a href="#" className=' text-2xl font-semibold flex items-center space-x-4'> <img src={logo} alt="logo" className='w-10 inline-block items-center' /><span className=' uppercase text-branchSecondary'>Nexcent</span> </a>
                        <div className='flex flex-col gap-2'>
                            <p>Copyright @2023 Nexcent Ltd.</p>
                            <p>All rights reserved.</p>
                        </div>
                        <div className="mt-4 flex gap-8 sm:mt-0 sm:justify-start flex-wrap ">
                            <Footer.Icon
                                href="#"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsTwitter}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsGithub}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsDribbble}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Nexcent
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Masum's Code
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>


            </div>
        </Footer>
    )
}

export default Myfooter