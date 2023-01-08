// applying react hook called useState
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../../assets/import';
import { Icons } from '../../constant/Icons';
import { menu, submenu } from '../../data/Data';
import { openMenu } from "../../store/mobileSlice";
import MobileMenu from "./Menu";


const Navbar = () => {
    // creating a toggle function from the useState hook

    const dispatch = useDispatch();
    const { isMenuOn } = useSelector((store) => store.mobilemenu);

    const activeLink = 'text-[#F6B700]';
    const normalLink = "";

    const [currentTab, setCurrentTab] = useState('1');

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <>
            <div className="flex justify-between items-center loycy-outfit loycy-primary loycy-400 loycy-16 line-24 loycy-shadow px-8 lg:px-16 py-5">
                <Link to="/"><img src={Logo} alt="loycy-logo" className='w-[10rem]' /></Link>
                <ul className="hidden sm:hidden md:hidden lg:flex space-x-8 loycy__menu">
                    {menu.map((menu, id) => (
                        <li key={id} >
                            <NavLink to={menu.path}
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                            >
                                {menu.title}
                            </NavLink>
                        </li>

                    ))}
                    <li>
                        <Link to="">For Hire</Link>
                        <div className='loycy__dropdown__menu w-[50%]'>
                            <div className='flex space-x-3'>
                                <div className='w-[15rem]'>
                                    {submenu.map((tab, i) =>
                                        <button
                                            key={i}
                                            id={tab.id}
                                            disabled={currentTab === `${tab.id}`}
                                            onClick={(handleTabClick)}
                                            className="px-3 py-3 w-20 flex justify-start items-center"
                                        >
                                            <span className='submenu__button '>
                                                {tab.icon}
                                            </span>
                                            {tab.title}
                                        </button>
                                    )}
                                </div>

                                <div className='flex'>
                                    {submenu.map((tab, i) =>
                                        <div key={i} className="grid grid-cols-3 gap-2 ">
                                            {currentTab === `${tab.id}` &&
                                                <>
                                                    {tab.link}
                                                </>
                                            }
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* here */}


                        </div>
                    </li>
                </ul>

                <button className={`py-3 px-8 hidden sm:hidden md:hidden lg:block loycy-light rounded-md loycy-btn`}>
                    <Link to='/contact-us'>Contact Us</Link>
                </button>
                <div className='block sm:block md:block lg:hidden' onClick={() => dispatch(openMenu())} >
                    <Icons.MenuOpen className='loycy-primary loycy-30' />
                </div>
            </div>

            {/* mobile menu */}
            <div>
                {isMenuOn && <MobileMenu />}
            </div>
        </>
    );
};

export default Navbar