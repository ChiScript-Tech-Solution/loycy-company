import React from 'react'
import { PageBanner, PetroNavbar } from '..';
import LoycyAccordion from '../accordion/Accordion';
import { General, Leasing1, LoycyEngineer } from '../../assets/import'

const Investment = () => {
    return (
        <>
            <PetroNavbar />

            <PageBanner
                bg="investment__banner__bg"
                bannerTitle="Investment"
                bannerSubTitle="Driving Growth through Quality Investments"
                bannerDesc="Loycy Investment Company Limited (LIC) was incorporated as a private limited liability company in 1988 to carry out Building and Civil Engineering works. In 1993, it diversified its"
            />


            {/* our investment */}
            <div className='our-goal-bg px-8 lg:px-24 py-8 lg:py-20'>
                <div className='block lg:flex justify-center items-center'>
                    <div className='w-full lg:w-[50%]'>
                        <span className='loycy-medium loycy-500 text-[24px] loycy-light opacity-75 py-3'>
                            LOYCY INVESTMENT
                        </span>
                        <p className='loycy-regular loycy-400 text-[30px] lg:text-[53px] loycy-light leading-10 lg:leading-[3.5rem] py-4 lg:py-0'>
                            Integrity & Quality in all Investments Sectors
                        </p>
                    </div>

                    <p className='w-full lg:w-[50%] loycy-regular font-light text-[20px] loycy-light'>
                        Our level of integrity performances has continued to sustain our huge emphasis on the capacity
                        building of management, Equipment acquisition, human resources development and highly developed
                        customer delivery system.
                    </p>
                </div>
            </div>


            {/* leasing service */}
            <div className='bg-white px-8 lg:px-24 py-8 lg:py-20'>
                <div className='block lg:flex justify-center items-center'>
                    <div className='w-full lg:w-[50%]'>
                        <img src={Leasing1} alt="" />
                    </div>
                    <div className='w-full lg:w-[50%] bg-[#F5D472] p-4 lg:p-20'>
                        <h4 className='loycy-regular loycy-400 text-2xl text-[#444D4D] leading-[30px]'>Leasing</h4>
                        <h2 className='loycy-regular loycy-400 text-5xl text-[#283234] py-[2rem]'>Leasing Service</h2>
                        <p className='loycy-regular loycy-400 text-lg text-[#283234]'>
                            Our leasing department has in store a large number of equipment
                            all in good shape for your use. Please visit any of our offices
                            or contact us via our phone numbers for a tour. We lease earth
                            moving equipment like Excavators, Backhoe Loaders, Bulldozers,
                            Motor Graders etc.
                        </p>

                        <button className='border border-black px-6 py-3 rounded-md text-black mt-[1.8rem]'>Learn More</button>
                    </div>
                </div>
            </div>




            {/* general contracting */}
            <div className='bg-white px-8 lg:px-24 py-8 lg:py-20'>
                <div className='block lg:flex justify-center items-center'>
                    <div className='w-full lg:w-[50%] bg-white pr-20'>
                        <h2 className='loycy-regular loycy-400 text-5xl text-[#283234] py-[2.8rem]'>General Contracting</h2>
                        <p className='loycy-regular loycy-400 text-lg text-[#283234]'>
                            Whatever the contract is in the field of Construction and Engineering,
                            we are here to serve. We have been able to render purchase and supply
                            services to large number of corporate clients in Nigeria. We have
                            standing MOUs with local and foreign OEMs to ensure that your requests
                            for specific products an
                        </p>

                        <button className='border border-black px-6 py-3 rounded-md text-black mt-[2rem]'>Discover More</button>
                    </div>

                    <div className='w-full lg:w-[50%]'>
                        <img src={General} alt="" />
                    </div>
                </div>
            </div>



            {/* leasing engineering */}
            <div className='bg-white px-8 lg:px-24 py-8 lg:py-20'>
                <div className='block lg:flex justify-center items-center'>
                    <div className='w-full lg:w-[50%]'>
                        <img src={LoycyEngineer} alt="" />
                    </div>
                    <div className='w-full lg:w-[50%] bg-[#F5D472] p-4 lg:p-20'>
                        <h4 className='loycy-regular loycy-400 text-2xl text-[#444D4D] leading-[30px]'>ENGINEERING Services</h4>
                        <h2 className='loycy-regular loycy-400 text-5xl text-[#283234] py-[2.8rem]'>LOYCY Engineering</h2>
                        <p className='loycy-regular loycy-400 text-lg text-[#283234]'>
                            We have changed the face of Engineering in Nigeria and beyond.
                            The Engineering Sector of Nigeria has evolved of the years,
                            with Loycy Engineering Department, consider all your needs in these area solved.
                        </p>

                        <button className='border border-black px-6 py-3 rounded-md text-black mt-[2rem]'>Learn More</button>
                    </div>
                </div>
            </div>



            {/* accordion */}

            <div className='px-8 lg:px-24 py-8 lg:py-20'>
                <p className='loycy-regular loycy-400 text-[48px] pb-5'>Top Experience</p>
                <LoycyAccordion />
            </div>
        </>
    )
}

export default Investment