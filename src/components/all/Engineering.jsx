import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PageBanner, PetroNavbar } from '..';
import { Operation1, Operation10, Operation11, Operation12, Operation2, Operation3, Operation4, Operation5, Operation6, Operation7, Operation8, Operation9 } from '../../assets/import';
import { engineer } from './data';

const Engineering = () => {
    return (
        <>
            <PetroNavbar />

            <PageBanner
                bg="engineering__banner__bg"
                bannerTitle="Engineering"
                bannerSubTitle="We Provide Skilled Engineering Services"
                bannerDesc="We are recognized for quality, safety, Cost effectiveness, and timely delivery of her projects. We have track records for all construction services."
            />


            {/* engineering services */}
            <div className='engineering__bg px-8 lg:px-24 py-8 lg:py-24'>
                <div className='w-full lg:w-[50rem]'>
                    <h2 className='loycy-regular loycy-400 text-[45px] loycy-light leading-[52px]'>
                        Qualified and experienced in providing a full range of Integrated Service
                    </h2>

                    <p className='loycy-regular loycy-400 text-lg loycy-light pt-3 pb-16'>
                        Loycy Engineering and Construction Company Limited is a
                        multi- faceted all construction contractor operating in the following fields
                    </p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mx-auto'>
                    {engineer.map((item, index) => {
                        return (
                            <div key={index} className=" engineer__card justify-center items-center text-center">
                                <div className='flex justify-center items-center'>{item.icon}</div>
                                <p className='loycy-regular loycy-400 text-[18px] text-white'>{item.desc}</p>
                            </div>
                        )
                    })}

                </div>
            </div>


            {/* operation services */}

            <div className='px-8 lg:px-24 py-8 lg:py-20'>
                <h2 className='loycy-regular loycy-500 text-[48px] py-5'>
                    Operation Pictures
                </h2>
                <div className='columns-3 gap-4 space-y-4'>
                    <LazyLoadImage src={Operation1} alt="operators" />
                    <LazyLoadImage src={Operation2} alt="operators" />
                    <LazyLoadImage src={Operation3} alt="operators" />
                    <LazyLoadImage src={Operation4} alt="operators" />
                    <LazyLoadImage src={Operation5} alt="operators" />
                    <LazyLoadImage src={Operation6} alt="operators" />
                    <LazyLoadImage src={Operation7} alt="operators" />
                    <LazyLoadImage src={Operation8} alt="operators" />
                    <LazyLoadImage src={Operation9} alt="operators" />
                    <LazyLoadImage src={Operation10} alt="operators" />
                    <LazyLoadImage src={Operation11} alt="operators" />
                    <LazyLoadImage src={Operation12} alt="operators" />
                </div>
            </div>
        </>
    )
}

export default Engineering