import React from 'react';
import './banner.css';

const Banner = () => {

    return (
        <div className='banner flex items-center justify-center'>
            <div className='text-center text-white'>
                <h1 className='font-bold text-8xl'>Crystal Events</h1>
                <h2 className='font-bold text-6xl my-2'>The content strategy Events</h2>
                <h3 className='font-bold text-2xl mb-5'>Minneapolis, MN • April 30–May 3, 2023</h3>
                <button className='font-semibold bg-green-500 px-6 py-3 text-2xl rounded-md hover:scale-105 duration-200 inline-block text-white'>Register Now</button>
            </div>
        </div>
    );
};

export default Banner;