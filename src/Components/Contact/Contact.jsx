import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hgt3gix', 'template_hg9fycd', form.current, {
                publicKey: 'lYGCP0zZ3y3iO-Deh',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='text-white'>
            <h2 className="text-3xl lg:text-5xl text-center mt-16 lg:mt-32 font-bold">Contact Me</h2>
            <div className='mt-6'>
                <section className="p-6 dark:text-gray-800">
                    <form  ref={form} onSubmit={sendEmail} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
                        <h2 className="w-full text-3xl font-bold leading-tight">Fill up this form</h2>
                        <div>
                            <label className="block mb-1 ml-1">Name</label>
                            <input name="user_name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#ba006e] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-1 ml-1">Email</label>
                            <input name="user_email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#ba006e] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label className="block mb-1 ml-1">Message</label>
                            <textarea name="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#ba006e] dark:bg-gray-100"></textarea>
                        </div>
                        <div>
                            <button type="submit" value="Send" className="w-full px-4 py-2 font-bold rounded shadow hover:bg-[#ba006e] bg-[#277a6f] focus:dark:ring-[#ba006e] dark:text-gray-50">Send</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

// name="user_name"
// name="user_email"
// name="message"
// type="submit" value="Send"

export default Contact;