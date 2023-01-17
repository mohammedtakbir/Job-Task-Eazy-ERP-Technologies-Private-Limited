import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const JoinWithEmail = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        )
            .then((result) => {
                toast.success('Email sent successfully');
                e.target.reset();
                setLoading(false);
            }, (error) => {
                toast.error(error.text);
            });
    }

    return (
        <section id='email' className='bg-[#42547d] py-8'>
            <div className='max-w-[1200px] mx-auto md:my-20 mt-14'>
                <div className='text-center text-white'>
                    <h2 className='md:text-4xl text-3xl font-bold'>Join the mailing list</h2>
                    <p className='text-xl font-semibold my-8'>Sign up and be the first to know about all things Crystal Events. We promise to email you only if it’s important.</p>
                </div>
                <div className='md:mx-0 mx-5'>
                    <form className='my-5' ref={form} onSubmit={sendEmail}>
                        <div className='md:flex gap-5'>
                            <input
                                name="user_name"
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered text-sm md:w-[33%] w-[100%] md:mb-0 mb-4"
                                required
                            />
                            <input
                                name="user_email"
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered text-sm md:w-[33%] w-[100%] md:mb-0 mb-4"
                                required
                            />
                            <button
                                type='submit'
                                className='text-white sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#fff] border-2 rounded-3xl hover:bg-[#fff] hover:text-[#333] duration-300 md:w-[33%] w-[100%]'>
                                {loading ? 'Signing up...' : 'Sign me up'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default JoinWithEmail;