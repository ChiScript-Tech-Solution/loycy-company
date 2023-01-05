
import React from 'react'
import { address } from '../../data/Data'

const Address = () => {
    return (
        <div className='px-8 lg:px-24 py-8 lg:py-20'>
            <h2 className='petro-semibold font-600 petro-heading text-[40px] leading-[61px] pb-10'>
                Office Address
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {address.map((item, index) => (
                    <div key={index}>
                        <h2 className='petro-semibold font-600 petro-heading text-[16px] leading-[36px] pb-5'>
                            {item.title}
                            <div className='w-[8rem] h-[0.5rem] bg-[#F6B700]'></div>
                        </h2>
                        <p className='petro-regular font-400 petro-heading opacity-[0.85] text-[16px]'>
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Address