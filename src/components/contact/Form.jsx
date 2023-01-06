import React from 'react'

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='bg-[#001A3D] px-8 lg:px-24 py-8 lg:py-20'>
        <div className='contact__form__bg block lg:flex justify-between items-center p-10'>
            <div className="mt-16 lg:mt-0 w-full lg:w-[20rem]">
                <h3 className='petro-medium font-500 text-[18px] petro-heading opacity-[0.45]'>Have Any Question?</h3>
                <h2 className='petro-semibold font-600 text-[20px] lg:text-[20px] petro-heading'>Kindly fill our form with your details and one of our professionals will reply you shortly.</h2>
            </div>
            <div className='bg-white p-8 rounded w-full lg:w-[35rem] shadow mt-6 lg:mt-0'>
                <form onSubmit={handleSubmit} >
                    <div className='space-y-8'>
                        <input type="text" placeholder='Full Name' className='w-full p-3 rounded border border-black' />
                        <input type="text" placeholder='Email Address' className='w-full p-3 rounded border border-black' />
                        <input type="text" placeholder='Phone Number' className='w-full p-3 rounded border border-black' />
                        <textarea name="" id="" cols="30" rows="5" className='w-full p-3 rounded border border-black'></textarea>
                        <div className='flex items-center'>
                            <input type="checkbox" name="" id="" className='mr-3' />
                            <span className='petro-regular font-400 text-[12px] lg:text-[16px] text-[#303030]'>
                                I accept the <b className='petro-heading'>terms & conditions and privacy policy</b>
                            </span>
                        </div>
                        <button className='bg-[#F6B700] hover:bg-[#1B5AB2] hover:text-white p-3 rounded petro-white'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form