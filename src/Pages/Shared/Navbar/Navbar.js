import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <div className='bg-[#252D40]'>
                <nav className='flex justify-between items-center max-w-[1200px] lg:mx-auto py-4 relative mx-2'>
                    <div className='text-white'>
                        <Link to='/' className='sm:text-3xl text-2xl font-semibold'>Crystal Events</Link>
                    </div>
                    <ul className={`lg:flex lg:static lg:justify-end text-white  lg:bg-[#252D40] bg-[#313e5c] items-center absolute lg:text-left text-center lg:w-0 w-full duration-200 rounded-lg lg:py-0 py-4 z-10
                ${open ? 'top-[65px]' : 'top-[-300px]'}`
                    }>
                        <li className='lg:mb-0 mb-3'>
                            <Link
                                onClick={() => setOpen(!open)}
                                className='hover:text-green-400 duration-200 font-semibold'
                            >
                                Home
                            </Link>
                        </li>

                        <li className='lg:ml-10 lg:mb-0 mb-3'>
                            <a
                                onClick={() => setOpen(!open)}
                                className='hover:text-green-400 duration-200 font-semibold'
                                href='#sponsors'
                            >
                                Sponsors
                            </a>
                        </li>
                        <li className='lg:ml-10 lg:mb-0 mb-3'>
                            <a
                                onClick={() => setOpen(!open)}
                                className='hover:text-green-400 duration-200 font-semibold'
                                href='#speakers'
                            >
                                Speakers
                            </a>
                        </li>
                        <li className='lg:ml-10 lg:mb-0 mb-3'>
                            <a
                                onClick={() => setOpen(!open)}
                                className='hover:text-green-400 duration-200 font-semibold'
                                href='#about'
                            >
                                About
                            </a>
                        </li>
                        {/* <li className='lg:ml-10 lg:mb-0 mb-3'>
                            <Link className='hover:text-green-400 duration-200 font-semibold'>Contact</Link>
                        </li> */}
                        <li className='lg:ml-10 lg:mb-0 mb-2'>
                            <a
                                onClick={() => setOpen(!open)}
                                href='#email'
                                className='font-semibold bg-green-500 px-4 py-2 rounded-md hover:scale-105 duration-200 inline-block'
                            >
                                Register
                            </a>
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
        </div>
    );
};

export default Navbar;