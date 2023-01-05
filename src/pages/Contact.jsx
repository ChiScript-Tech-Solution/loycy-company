

import React from 'react'
import { CallUs, ContactForm, LoycyAddress, PetroNavbar } from '../components'

const Contact = () => {
  return (
    <>
    <PetroNavbar />
{/* 
    <PageBanner
        bg="hiring__bg"
        bannerTitle={<span className='loycy-light'>Contact Us</span>}
        bannerSubTitle={<span className='loycy-light'>You Choose! We Deliver! with high quality standards</span>}
    /> */}

<div className="hiring__bg px-8 lg:px-24 py-8 lg:py-40 banner__overlay" >
                <div className='w-full lg:w-[50%] banner__content banner__hire__content'>
                    <h2 className='loycy-medium loycy-500 text-[24px] '>Contact Us</h2>
                    <p className='loycy-medium loycy-500 text-[48px] leading-[3rem] py-3'>
                        You Choose! We Deliver! with high quality standards
                    </p>
                </div>
            </div>

    <CallUs />
    <LoycyAddress />
    <ContactForm />
</>
  )
}

export default Contact