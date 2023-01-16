import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    console.log(open)
    return (
        <div className='bg-[#252D40]'>
            <nav className='flex justify-between items-center max-w-[1200px] lg:mx-auto py-4 relative mx-2'>
                <div className='text-white'>
                    <Link to='/' className='text-3xl font-semibold'>Crystal Events</Link>
                </div>
                <ul className={`lg:flex lg:static lg:justify-end text-white  lg:bg-[#252D40] bg-black items-center absolute lg:text-left text-center lg:w-0 w-full duration-200 rounded-lg lg:py-0 py-4
                ${open ? 'top-[65px]' : 'top-[-200px]'}`
                }>
                    <li className='lg:mb-0 mb-2'>
                        <Link className='hover:text-green-400 duration-200 font-semibold'>Home</Link>
                    </li>
                    <li className='lg:ml-10 lg:mb-0 mb-2'>
                        <Link className='hover:text-green-400 duration-200 font-semibold'>About</Link>
                    </li>
                    <li className='lg:ml-10 lg:mb-0 mb-3'>
                        <Link className='hover:text-green-400 duration-200 font-semibold'>Contact</Link>
                    </li>
                    <li className='lg:ml-10 lg:mb-0 mb-2'>
                        <button className='font-semibold bg-green-500 px-4 py-2 rounded-md hover:scale-105 duration-200 inline-block'>Register</button>
                    </li>
                </ul>
                <div className='lg:hidden text-white text-3xl cursor-pointer' onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <HiXMark /> :
                            <HiBars3 />
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;