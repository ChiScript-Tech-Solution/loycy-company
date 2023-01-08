
import React, { Suspense } from 'react'
import { PetroNavbar } from '..'
import { Equipment } from '../equipment'

const Hiring = () => {
    return (
        <>
            <Suspense fallback={<div>loading...</div>}>
                <PetroNavbar />
                <div className="hiring__bg px-8 lg:px-24 py-8 lg:py-40 banner__overlay" >
                    <div className='w-full lg:w-[50%] banner__content banner__hire__content'>
                        <h2 className='loycy-medium loycy-500 text-[24px] '>For Hire</h2>
                        <p className='loycy-medium loycy-500 text-[48px] leading-[3rem] py-3'>
                            You Choose! We Deliver! with high quality standards
                        </p>
                    </div>
                </div>

                <Equipment />
            </Suspense>
        </>
    )
}

export default Hiring