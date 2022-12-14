

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Company__Vision__Mission__CoreValue = () => {

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease",
            once: false
        });
    })

    return (
        <>
            <div className='loycy__about__bg'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16  px-8 lg:px-16 py-10 lg:py-20'>
                    {/* left */}
                    <div>
                        <h1 className='loycy-semibold loycy-500 loycy-24 line-30 text-white-light-2 pb-5'>ABOUT US</h1>
                        <span className='loycy-regular loycy-400 text-white-light-2 line-58 loycy-48'>
                            We Provide High Quality Services Since  Over A Decade
                        </span>

                        <p className='loycy-regular loycy-400 loycy-18 line-28 text-white-light pt-5'>We are Creative and Dynamic</p>
                    </div>

                    {/* right */}
                    <div>
                        <div className='block sm:block md:flex lg:flex justify-between space-y-8 lg:space-y-0 space-x-0 lg:space-x-4'>
                            <div>
                                <h1 className='loycy-regular loycy-400 loycy-24 line-30 text-white-light-2 pb-5'>OUR VISION</h1>
                                <ul className='loycy-regular loycy-400 loycy-16 text-white-light'>
                                    <li>To be recognized as the premier indigenous equipment leasing,
                                        construction and oil/gas service provider driven by excellence and innovation.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h1 className='loycy-regular loycy-400 loycy-24 line-30 text-white-light-2 pb-5'>OUR MISSION</h1>
                                <ul className="loycy-regular loycy-400 loycy-16 text-white-light">
                                    <li>To be recognized as the premier indigenous equipment leasing,
                                        construction and oil/gas service provider driven by excellence and innovation.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='pt-10 block sm:block lg:flex justify-between items-center gap-5 lg:gap-10 space-y-4 lg:space-y-0'>
                            <div className='loycy-medium loycy-600 loycy-18 line-28 text-white-light uppercase'>
                                <h1>Our Core Value</h1>
                            </div>
                            <div>
                                <div className='about__value block sm:block md:flex lg:flex justify-between items-center loycy-regular text-lg text-white-light'>
                                    <p>Excellence</p>
                                    <p>Innovation</p>
                                    <p>Respect</p>
                                </div>
                                <div className='about__ block sm:block md:flex lg:flex justify-between items-center loycy-regular text-lg text-white-light'>
                                    <p>Excellence</p>
                                    <p>Innovation</p>
                                    <p>Respect</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <Link to="/about">
                                <button className='home__button py-4 px-8 rounded-md loycy-primary items-center w-56 mt-14 loycy-inter loycy-500 loycy-18'>
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* right end here */}
                </div>
            </div>
        </>
    )
}

export default Company__Vision__Mission__CoreValue