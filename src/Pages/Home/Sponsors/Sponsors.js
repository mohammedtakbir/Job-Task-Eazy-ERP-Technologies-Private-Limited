import React from 'react';

const Sponsors = () => {

    const sponsors = [
        {
            img: 'https://play-lh.googleusercontent.com/v7sgst4uc2g5ikeGi6tsnMMJWLXhB8uNVSHqMBq546Lyk6mKoIbwVcCPFrez8l--Kw'
        },
        {
            img: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png'
        },
        {
            img: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/483fd2b90000640005029919/0x0.png'
        },
        {
            img: 'https://pbs.twimg.com/profile_images/1163005007064698880/tvOXJHAG_400x400.png'
        },
    ]

    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='font-bold text-center text-4xl'>Thanks to our sponsors.</h1>
            <div className='my-7 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 gap-5 text-center'>
                {
                    sponsors.map((sponsor, i) => (
                        <div key={i} className='flex items-center flex-col hover:scale-110 duration-500 cursor-pointer'>
                            <img className='mb-2 w-[200px] h-[200px]' src={sponsor.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Sponsors;