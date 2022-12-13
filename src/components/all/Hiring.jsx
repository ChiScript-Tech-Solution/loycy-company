
import React from 'react'
import { PageBanner, PetroNavbar } from '..'
import { Equipment } from '../equipment'

const Hiring = () => {
    return (
        <>
            <PetroNavbar />

            <PageBanner
                bg="hiring__bg"
                bannerTitle={<span className='loycy-light'>For Hire</span>}
                bannerSubTitle={<span className='loycy-light'>You Choose! We Deliver! with high quality standards</span>}
            />

            <Equipment />
        </>
    )
}

export default Hiring