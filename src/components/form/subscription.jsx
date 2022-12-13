import React from 'react'

const subscription = () => {
    return (
        <div className='px-8 lg:px-48 py-8 lg:py-32'>
            <div className='bg-[#F5CB4E] justify-center items-center mx-auto p-4 lg:p-10'>
                <form action="">
                    <h2>Learn more about partnering with us</h2>

                    <div className='loycy__form__input pt-10'>
                        <div>
                            <span>First Name</span>
                            <input type="text" placeholder='first name' />
                        </div>

                        <div>
                            <span>Email</span>
                            <input type="email" placeholder='support@loycy.com' />
                        </div>

                        <div>
                            <span>Subject</span>
                            <select name="" id="">
                                <option defaultValue> Select...</option>
                            </select>
                        </div>

                        <div>
                            <span>Description</span>
                            <textarea name="" id="" cols="1" rows="1">
                                des
                            </textarea>
                        </div>

                        <button className='bg-[#1B5AB2] p-3 rounded-md loycy-light mt-4'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default subscription