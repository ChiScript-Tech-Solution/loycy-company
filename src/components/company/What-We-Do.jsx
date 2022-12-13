import React from 'react';
import { PetroService, } from '../../assets/import';
import { service } from "../../data/Data";
import Training from "./Training";

const WhatWeDo = () => {
    return (
        <>
        {/* data-aos="zoom-in-up"  data-aos-delay="300" */}
            <div  className="px-8 lg:px-20 py-20 bg-[#002D6B]">
                <h2 className='outfit font-600 text-40 leading-[61.8px] petro-white'>
                    What We Do ?
                </h2>
                <span className='petro-regular petro-white text-18'>Petro-Base has a track record of performance for our clients worldwide </span>
                
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-20 mt-10'>
                    <div className=''>
                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                            {service.map((item, index) => (
                                <div key={index} className='bg-white rounded-md px-4 py-8 outfit'>
                                    <h2 className='font-700 text-20 petro'>{item.title}</h2>
                                    <p className='text-14 font-400 pt-2'>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src={PetroService} alt="" className='rounded-md' />
                </div>
            </div>

            <Training />
        </>
    )
}

export default WhatWeDo