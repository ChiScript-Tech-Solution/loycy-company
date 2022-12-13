
import React from 'react'
import { PetroTraining } from '../../assets/import'

const Training = () => {
    return (
        <>
        {/* data-aos="fade-down" data-aos-delay="350"  */}
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-16 px-8 lg:px-20 py-20'>
                <div className=''>
                    <h2 className='petro-medium text-18 text-[#8C98A8] pb-10'>
                        TRAINING & PROJECTS
                    </h2>

                    <span className='petro-semibold text-[30px] sm:text-[30px] md:text-[30px] lg:text-[40px] text-[#002D6B] leading-9 lg:leading-[61.8px]'>
                        About Us Leading pioneer in asset integrity & Maintenance
                    </span>
                    <p className='petro-regular text-18 leading-[27.81px] bg-[#F5F5F5] p-10 text-[#555555] mt-5'>
                        We specialize in inspections and certifications of above ground storage
                        tanks and pipelines. Offshore / Onshore Pipeline Inspection, Maintenance
                        And Repair. We specialize in inspections and certifications of above ground
                        storage tanks and pipelines. Offshore / Onshore Pipeline Inspection,
                        Maintenance And Repair. We specialize in inspections and certifications
                        of above ground storage tanks and pipelines. Offshore / Onshore Pipeline
                        Inspection, Maintenance And Repair.
                    </p>

                    <div className='pt-16'>
                        <button className='bg-[#D74E01] px-10 py-4 inter-font font-500 text-18 petro-white'>Learn More</button>
                    </div>
                </div>
                <img src={PetroTraining} alt="" />
            </div>
        </>
    )
}

export default Training