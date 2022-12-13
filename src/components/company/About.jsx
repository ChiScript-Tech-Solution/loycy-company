
import React from 'react';
import { Icons } from '../../constant/Icons';
import { service_ } from '../../data/Data';


const About = () => {
    return (
        <>
            {/* data-aos="zoom-in" data-aos-delay="250" */}
            <div className='loycy__service__bg px-8 lg:px-16 py-20'>
                <>
                    <span className='loycy-medium loycy-500 text-[#0D2410] loycy-24 line-30'>OUR SERVICES</span>
                    <p className='loycy-regular loycy-400 loycy-18 loycy-dark-light pb-10'>We Provide High Quality Services Since 1988</p>
                </>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4 lg:gap-10'>
                    {service_.map((item, index) => (
                        <div key={index} className='loycy__card text-white-light-2 text-center px-8 py-10'>
                            <h1 className='loycy-medium loycy-500 loycy-40 line-48'>{item.title}</h1>
                            <p className='loycy-regular loycy-400 loycy-16 pt-5'>{item.desc}</p>
                            <div className='loycy__card__arrow'><Icons.CardArrow /></div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default About