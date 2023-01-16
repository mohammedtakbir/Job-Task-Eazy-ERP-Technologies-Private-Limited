import React from 'react';
import { Link } from 'react-router-dom';

const Speakers = () => {

    const speakers = [
        {
            img: 'https://thumbs.dreamstime.com/b/photo-document-passport-id-mature-caucasian-man-suit-white-shirt-126121929.jpg',
            name: 'Dane Alves',
            time: 'Tue Apr 22 | 9:00 PM - 11:00 PM'
        },
        {
            img: 'https://media.istockphoto.com/id/516379821/photo/business-man.jpg?s=612x612&w=0&k=20&c=l69gZZ3trWgx_BIbErRUihUoIIHMxaZp3LwqOxb3SNA=',
            name: 'Robartonio',
            time: 'Fri Apr 24 | 10:00 PM - 12:00 PM'
        },
        {
            img: 'https://img.freepik.com/free-photo/close-up-photo-amicable-man-black-shirt-posing-his-passport-picture_132075-8192.jpg',
            name: 'Joe Russo',
            time: 'Mon Apr 26 | 8:00 PM - 10:00 PM'
        },
        {
            img: 'https://media.istockphoto.com/id/1334905996/photo/pensive-mature-man-looking-at-the-camera-on-gray-background.jpg?b=1&s=170667a&w=0&k=20&c=B7w_frNZYoiVedxueuu_gFvO0In7xqKljNIsH4Cr260=',
            name: 'Torintino',
            time: 'Wed Apr 29 | 9:00 PM - 11:00 PM'
        },
    ]

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col lg:justify-between lg:flex-row">
                    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                        <span className="inline-block mb-1 sm:mb-4">
                            Meet Our Speakers
                        </span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>
                    <p className="text-gray-700 lg:text-sm lg:max-w-md">
                        <button className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#d5d5d5] border-2 
                        rounded-3xl hover:bg-[#d5d5d5] hover:text-[#333] duration-300'>View All Speakers</button>
                    </p>
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                    {
                        speakers.map((speaker, i) => (
                            <Link to="" aria-label="View Item" key={i}>
                                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-full h-[350px]"
                                        src={speaker.img}
                                        alt=""
                                    />
                                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                        <p className="text-sm font-medium tracking-wide text-white mb-4">
                                            {speaker.name}
                                        </p>
                                        <p className="text-sm font-medium tracking-wide text-white">
                                            {speaker.time}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="text-center">
                    <Link
                        to=''
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        See more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Speakers;