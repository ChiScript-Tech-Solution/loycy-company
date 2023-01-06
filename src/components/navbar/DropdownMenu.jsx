

import React from 'react'
import { Link } from 'react-router-dom';


const DropdownMenu = ({ data }) => {
    const activeLink = 'text-[#F6B700]';
    const normalLink = "";
    return (
        <>
            {data.map((item, i) => (
                <ul key={i} className="flex justify-between">
                    <li>
                        <Link to={item.path} 
                            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                            className={({ isActive }) => isActive ? activeLink : normalLink }
                            >
                            <span className='bg-[#F3BE22] bg-opacity-[10%] p-2 mr-3'>
                                {item.icon}
                            </span>
                            {item.subtitle}
                        </Link>
                    </li>
                </ul>
            ))}
        </>
    )
}

export default DropdownMenu

