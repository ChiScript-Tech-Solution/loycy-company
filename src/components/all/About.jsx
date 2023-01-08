
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PageBanner } from '..';
import { People1, People2, People3, People4, People5, People6 } from '../../assets/import';
import { partner } from '../../data/Data';
import { CTA, Subscription } from '../form';
import Partner from '../partner/Partner';
import { goal, service } from './data';
import PlaceholderImg from "../../assets/img/placeholderImg.jpg";

const About = () => {
  return (
    <div>
      <PageBanner
        bg="about__banner__bg"
        bannerTitle="About Us"
        bannerSubTitle="We Provide High Quality Services"
        bannerDesc="Loycy Investment Company Limited (LIC) was incorporated as a private limited liability company in 1988 to carry out Building and Civil Engineering works. In 1993, it diversified its" 
      />

      {/* our goal */}
      <div className='our-goal-bg px-8 lg:px-24 py-8 lg:py-20'>
        <div className='block lg:flex justify-between space-y-8 lg:space-y-0'>

          {goal.map((item, index) => (
            <div key={index} className='w-full lg:w-[20rem] '>
              <h2 className='loycy-medium loycy-light font-medium text-[29px] uppercase py-4'>{item.title}</h2>
              {item.desc.map((desc, index) => (
                <ul key={index}>
                  <li className='loycy-regular text-[20px] loycy-light opacity-[0.75]'>{desc.text}</li>
                </ul>
              ))}
            </div>
          ))}

        </div>
      </div>


      {/* our service */}
      {service.map((item, index) => (
        <div key={index} className='bg-white px-8 lg:px-24 py-8 lg:py-20'>
          <p className='loycy-medium font-medium text-[#444D4D] text-[24px] line-14 py-3'>{item.headTitle}</p>
          <h3 className='loycy-regular loycy-400 text-[48px] leading-10 lg:leading-[59px] text-[#283234]'>
            {item.headDesc}
          </h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 pt-14'>

            {item.desc.map((desc, index) => (
              <div key={index}>
                {desc.icon}
                <h2 className='loycy-semibold font-semibold text-[#001316] text-[20px] leading-[30px] py-3'>
                  {desc.title}
                </h2>
                <p className='loycy-regular text-[#374549] text-base font-normal'>{desc.descTxt}</p>
              </div>
            ))}

          </div>

        </div>
      ))}


      {/* our people */}

      <div className='px-8 lg:px-24 py-8 lg:py-20'>
        <div className='pt-3 pb-10'>
          <p className='loycy-medium font-medium text-[#444D4D] text-[24px] line-14 py-3'>Our People</p>
          <h3 className='loycy-regular loycy-400 text-[40px] leading-10 lg:leading-[59px] text-[#283234]'>
            Team of Dedicated and dynamic workforce
          </h3>

          <p className='loycy-regular text-[#374549] text-base font-normal text-justify'>
            we have as our strength a team of dedicated and dynamic workforce,
            with expertise in their different arcas of specialization. this worforce
            is managed and controlled by a group highly competent management team.
            these come with huge experiences in our areas of specialization, giving our
          </p>

        </div>

        <div class="gap-4 row-3 lg:columns-3 space-y-4">
          <LazyLoadImage placeholderSrc={PlaceholderImg} class="w-full   aspect-square" src={People1} alt='' />
          <LazyLoadImage placeholderSrc={PlaceholderImg} class="w-full   aspect-video " src={People2} alt='' />
          <LazyLoadImage placeholderSrc={PlaceholderImg} class="w-full   aspect-video " src={People3} alt='' />
          <LazyLoadImage placeholderSrc={PlaceholderImg} class="w-full   aspect-square " src={People5} alt='' />
          <LazyLoadImage placeholderSrc={PlaceholderImg} class="w-full   aspect-video" src={People4} alt='' />
          <LazyLoadImage placeholderSrc={PlaceholderImg} class="w-full   aspect-square " src={People6} alt='' />
        </div>
      </div>


      {/* partner */}

      <Partner partner={partner} />

      {/* form */}
      <Subscription />
      <CTA />

    </div>
  )
}

export default About