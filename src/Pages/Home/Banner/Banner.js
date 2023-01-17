import React from 'react';
import './banner.css';

const Banner = () => {

    return (
        <section className='banner flex items-center justify-center md:h-[700px] h-[600px]'>
            <div className='text-center text-white'>
                <h1 className='font-bold md:text-8xl sm:text-6xl text-5xl'>Crystal Events</h1>
                <h2 className='font-bold md:text-6xl sm:text-4xl text-3xl my-2'>The content strategy Events</h2>
                <h3 className='font-bold md:text-2xl sm:text-xl text-lg  mb-5'>Uttara, ML • April 30–May 3, 2023</h3>
                <a
                    href='#email'
                    className='font-semibold bg-green-500 md:px-6 px-4 md:py-3 py-2 md:text-2xl text-xl rounded-md hover:scale-105 duration-200 inline-block text-white'
                >
                    Register Now
                </a>
            </div>
        </section>
    );
};

export default Banner;