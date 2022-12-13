

import React from 'react';
// import { Icons } from "../../constant/Icons";
// import PetroPartner from "../partner/Partner";
// import { partner } from "../partner/data";
import { RevSlider } from '..';
import { images } from '../../data/Data';


const HeroBanner = () => {

    return (
        <>
            <div>
                {/* <PetroBaseSlider /> */}
                <RevSlider images={images} />
            </div>
            {/* <PetroPartner partner={partner} /> */}
        </>
    )
}

export default HeroBanner