
import React from 'react';



const Banner = ({ bg, bannerTitle, bannerDesc, bannerSubTitle }) => {
  return (
    <div className={`${bg} px-8 lg:px-24 py-8 lg:py-40`} >
       <div className='w-full lg:w-2/5'>
            <h2 className='loycy-medium loycy-500 text-[24px] text-[#323232] opacity-[0.85]'>{bannerTitle}</h2>
            <p className='loycy-medium loycy-500 text-[48px] text-[#323232] opacity-[0.85] leading-[3rem] py-3'>
              {bannerSubTitle}
              </p>
            <p className='loycy-regular loycy-400 text-[20px] text-[#323232] opacity-[0.85] leading-[30px]'>{bannerDesc}</p>
       </div>
    </div>
  )
}

export default Banner;