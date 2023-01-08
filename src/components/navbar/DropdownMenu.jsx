

import React from 'react'
import { Link } from 'react-router-dom';


const DropdownMenu = ({ data }) => {

    return (
        <>
            {data.map((item, i) => (
                <ul key={i} className="flex">
                    <li>
                        <Link
                            to={item.path}
                            className="flex justify-center items-center space-x-2"
                        >
                            <span className='bg-[#F3BE22] bg-opacity-[10%] p-2'>
                                {item.icon}
                            </span>
                            <span>{item.subtitle}</span>
                        </Link>
                    </li>
                </ul>
            ))}
        </>
    )
}

export default DropdownMenu

