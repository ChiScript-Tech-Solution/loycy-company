

import React from 'react';
import { PetroNavbar,  HeroBanner, AboutUs, Certification, CompanyMission  } from '../components';

const Navbar = () => {
  return (
    <>
        <PetroNavbar />
        {/* <PetroCarousel /> */}
        <HeroBanner />
        <CompanyMission />
        <AboutUs />
        <Certification />
    </>
  )
}

export default Navbar