import React from 'react';
import { Logo2 } from '../../assets/import';
import { Icons } from '../../constant/Icons';

const Footer = () => {
    return (
        <>
            <div className='footer__banner__bg px-8 lg:px-20 py-20'>
                <div className='block lg:flex justify-between space-y-10 lg:space-y-0'>
                    <div className='petro-white hidden lg:block pt-5'>
                        <h2 className='loycy-semibold loycy-600 loycy-16 loycy-light'>Investment</h2>
                        <ul className='loycy-regular loycy-400 loycy-16 loycy-light opacity-[0.75] space-y-4 pt-4'>
                            <a href="/" className='flex'><li>Experience</li></a>
                            <a href="/" className='flex'><li>Clients</li></a>
                            <a href="/" className='flex'><li>Projects</li></a>
                            <a href="/" className='flex'><li>Supplies</li></a>
                            <a href="/" className='flex'><li>Investment Services</li></a>
                            <a href="/" className='flex'><li>Recruiting</li></a>
                        </ul>
                    </div>
                    <div className='petro-white hidden lg:block pt-5'>
                        <h2 className='loycy-semibold loycy-600 loycy-16 loycy-light'>Engineering</h2>
                        <ul className='loycy-regular loycy-400 loycy-16 loycy-light opacity-[0.75] space-y-4 pt-4'>
                            <a href="/" className='flex'><li>Project Docs</li></a>
                            <a href="/" className='flex'><li>Resources</li></a>
                            <a href="/" className='flex'><li>Services</li></a>
                        </ul>
                    </div>
                    <div className='petro-white hidden lg:block pt-5'>
                        <h2 className='loycy-semibold loycy-600 loycy-16 loycy-light'>Company</h2>
                        <ul className='loycy-regular loycy-400 loycy-16 loycy-light opacity-[0.75] space-y-4 pt-4'>
                            <a href="/" className='flex'><li>About</li></a>
                            <a href="/" className='flex'><li>Careers</li></a>
                            <a href="/" className='flex'><li>Contact Us</li></a>
                            <a href="/" className='flex'><li>News & Blog</li></a>
                        </ul>
                    </div>
                    <div className='petro-white w-full lg:w-96 bg-white bg-opacity-[0.1] p-5'>
                        <h2 className='loycy-semibold loycy-600 loycy-16 loycy-light'>Subscribe to our Newsletter</h2>
                        <div className='flex items-center bg-white rounded-md my-5'>
                            <input type="text" placeholder='email address' className='w-full bg-transparent px-2 focus:outline-none' />
                            <p className='loycy-secondary-bg p-4 rounded-br-md rounded-tr-md'><Icons.AccorArrow className='rotate-90 loycy-light' /></p>
                        </div>
                        <span className='loycy-regular loycy-400 loycy-12 loycy-light opacity-[0.6]'>
                            Hello, get updates on our journey to becoming recognized as the premier indigenous 
                            equipment leasing, construction and oil/gas service provider driven by excellence.
                        </span>

                    </div>
                </div>

                <div className='pt-5 mt-10 border-t border-t-white  border-opacity-[0.2]'>
                    <div className='loycy-medium loycy-500 loycy-14 block lg:flex justify-between items-center loycy-light'>
                        <p><img src={Logo2} alt="loycy-logo" className='w-[10rem]' /></p>
                        <ul className='flex items-center space-x-4'>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li>Cookies</li>
                        </ul>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer