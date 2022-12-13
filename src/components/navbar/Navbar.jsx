// applying react hook called useState
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/import';
import { Icons } from '../../constant/Icons';


const Navbar = () => {
    // creating a toggle function from the useState hook


    return (
            <div className="flex justify-between items-center loycy-outfit loycy-primary loycy-400 loycy-16 line-24 loycy-shadow px-8 lg:px-16 py-5">
                <Link to="/"><img src={Logo} alt="loycy-logo" className='w-[10rem]' /></Link>
                <ul className="hidden sm:hidden md:hidden lg:flex space-x-8">
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/investment"><li>Investment</li></Link>
                    <Link to="/engineering"><li>Engineering</li></Link>
                    <Link to="/hiring"><li>For Hire</li></Link>
                </ul>

                <button className={`py-3 px-8 hidden sm:hidden md:hidden lg:block loycy-light rounded-md loycy-btn`}>
                    Contact Us
                </button>
                <div className='block sm:block md:block lg:hidden'>
                    <Icons.MenuOpen className='loycy-primary loycy-30' />
                </div>
            </div>
    );
};

export default Navbar