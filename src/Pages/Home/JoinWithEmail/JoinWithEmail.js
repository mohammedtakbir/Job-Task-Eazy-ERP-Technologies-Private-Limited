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
        <div className='max-w-[1200px] mx-auto my-20'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Join the mailing list</h2>
                <p className='text-xl font-semibold my-8'>Sign up and be the first to know about all things Crystal Events. We promise to email you only if it’s important.</p>
            </div>
            <div>
                <form className='my-5' ref={form} onSubmit={sendEmail}>
                    <div className='sm:flex gap-5'>
                        <input
                            name="user_name"
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered text-sm w-[33%]"
                            required
                        />
                        <input
                            name="user_email"
                            type="email"
                            placeholder="Email Address"
                            className="input input-bordered text-sm w-[33%]"
                            required
                        />
                        <button
                            type='submit'
                            className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-[#d5d5d5] border-2 rounded-3xl hover:bg-[#d5d5d5] hover:text-[#333] duration-300 w-[33%]'>
                            {loading ? 'Signing up...' : 'Sign me up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JoinWithEmail;