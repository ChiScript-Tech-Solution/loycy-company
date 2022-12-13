import React from 'react';
import { Partners } from '..';
import { Icons } from '../../constant/Icons';
import { hire, news, partner, } from "../../data/Data"

const Leading = () => {
    return (
        <>
            <div className="px-8 lg:px-20 py-20 bg-white">
                <div className=" petro-white pb-10">

                    <h2 className='loycy-medium loycy-500 loycy-24 line-30 text-[#0D2410]'>
                        FOR HIRE
                    </h2>
                    <p className='loycy-regular loycy-400 loycy-18 line-28 loycy-dark opacity-[0.75] pt-2'>
                        Choice of all types of high quality construction equipment
                    </p>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {hire.map((item, index) => (
                        <div key={index} className='hire-bg rounded-md outfit justify-center items-center p-10 shadow'>
                            <img src={item.img} alt={item.title} className="w-full h-36" />
                            <h2 className='loycy-inter loycy-600 loycy-18 text-center p-3 w-full loycy-btn mt-10 loycy-light z-50 cursor-pointer'>
                                {item.title}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>


            <Partners partner={partner} />


            {/* NEWS */}
            <div className="px-8 lg:px-20 py-20 ">
                <div className='block lg:flex items-center'>
                    <div className='w-full'>
                        <h1 className='loycy-medium loycy-500 loycy-30 line-35 w-full lg:w-10'>LOYCY LATEST NEWS</h1>
                        <p className='loycy-regular loycy-400 loycy-18 line-28 loycy-dark opacity-[0.75 w-80 lg:w-52 pt-4'>
                            Latest happenings in the world of Loycy Investment Company
                        </p>

                        <div className='flex items-center space-x-3 mt-4'>
                            <p className='loycy-primary-bg p-2 loycy-light cursor-pointer'><Icons.AccorArrow className='rotate-[-90deg]' /></p>
                            <p className='loycy-primary-bg p-2 loycy-light cursor-pointer'><Icons.AccorArrow className='rotate-90' /></p>
                        </div>
                    </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {news.map((item, index) => (
                        <div key={index} className='bg-[#f4f4f4] rounded-md loycy-regular justify-center items-center p-5'>
                            <img src={item.img} alt={item.title} className="w-full border-b-2 border-b-[#40B450]" />
                            <div className='py-3'>
                                <span className='petro-regular text-11 text-[596A81'>{item.post__date}</span>
                                <h2 className='loycy-semibold loycy-16 text-[#001A3D] pt-2'>{item.title}</h2>
                            </div>

                            <div>
                                <span className='flex items-center loycy-medium loycy-500 loycy-14 line-14'>
                                    {item.desc}
                                    <Icons.AccorArrow className='rotate-90' />
                                </span>
                                <Icons.NewsLine className="mt-2" />
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>

    )
}

export default Leading