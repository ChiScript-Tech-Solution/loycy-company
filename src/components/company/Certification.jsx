

import React from 'react';
import { Icons } from '../../constant/Icons';
import { certification } from '../../data/Data';
import Leading from './Leading';

const Certification = () => {
    return (
        <>
            <div className='bg-[#F5CB4E] px-8 lg:px-16 py-20'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {certification.map((item, index) => (
                        <div key={index} className='flex items-center bg-white rounded-md p-4 gap-10'>
                            <img src={item.img} alt={item.title} className='w-24' />
                            <div className='block w-full'>
                                <span className='loycy-medium loycy-500 loycy-24 line-30 text-[#0D2410]'>{item.title}</span>
                                <p className='dark-light loycy-14'>{item.yr}</p>
                                <p className='loycy-semibold loycy-600 loycy-green loycy-20 uppercase'>{item.rank}</p>
                                <div className='flex justify-end items-center space-x-3 -mr-4 -mb-4'>
                                    <span>View</span>
                                    <p className='bg-[#1B5AB2] p-3 rounded-br-md loycy-light'><Icons.AccorArrow className='rotate-90' /></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Leading />
        </>
    )
}

export default Certification