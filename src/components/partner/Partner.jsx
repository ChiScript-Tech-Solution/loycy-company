

import React from 'react';

const Partner = ({ partner }) => {
    return (
        <div className='loycy-secondary-bg px-10 lg:px-16 py-10 block sm:block md:block lg:flex justify-between items-center'>
            <h1 className='loycy-semibold loycy-600 loycy-24 loycy-light opacity-[0.85]'>OUR TRUSTED CLIENTS</h1>
            {partner.map((item, index) => (
                <div key={index} className='flex items-center my-4'>
                    <img src={item.img} alt={item.title} className="lg:w-48" />
                </div>
            ))}
        </div>
    )
}

export default Partner