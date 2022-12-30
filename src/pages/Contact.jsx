

import React from 'react'
import { CallUs, ContactForm, LoycyAddress, PageBanner, PetroNavbar } from '../components'

const Contact = () => {
  return (
    <>
    <PetroNavbar />

    <PageBanner
        bg="hiring__bg"
        bannerTitle={<span className='loycy-light'>Contact Us</span>}
        bannerSubTitle={<span className='loycy-light'>You Choose! We Deliver! with high quality standards</span>}
    />

    <CallUs />
    <LoycyAddress />
    <ContactForm />
</>
  )
}

export default Contact