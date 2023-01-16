import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteEvent = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                                Why is Crystal Events everyone’s favorite conference? See for yourself in 2023.
                            </h2>
                            <p className="text-base text-gray-700 md:text-xl sm:text-lg">
                                For the Crystal Events grand finale, we’re pulling out all the stops! From UX to accessibility, structure to storytelling, Confab brings content strategy to life like no other event. Join smart, curious folks from around the world who care about making content more useful and usable for all.
                            </p>
                        </div>
                        <div>
                            <Link
                                to=''
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
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
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src="https://media.istockphoto.com/id/1272326797/photo/executive-team-listening-to-contrary-views-from-colleague.jpg?s=612x612&w=0&k=20&c=C8gVcRVvdRmc-5no4Uan7jQE1xPB2oqQe_iYbsVooDg=&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="https://media.istockphoto.com/id/1355159391/photo/businessman-speaking-during-a-meeting.jpg?b=1&s=170667a&w=0&k=20&c=nDoOLARy6ryNg53v8XHZSknjZSNqEcPRi8Bf9pDw9oE=&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src="https://img.freepik.com/free-photo/business-people-video-call-meeting_53876-15181.jpg?w=2000&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteEvent;