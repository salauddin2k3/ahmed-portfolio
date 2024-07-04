import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import { useRef } from 'react';
import contactLottie from "../../../public/contact-lottie.json"
import toast from 'react-hot-toast';

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
                    form.current.reset(); // Reset form fields
                    toast.success('Message sent successfully!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Message failed to send. Please try again.', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                },
            );
    };

    return (
        <div className='text-white'>
            <h2 className="text-3xl lg:text-5xl text-center mt-16 lg:mt-32 font-bold">Contact Me</h2>
            <div className='mt-16 flex flex-col lg:flex-row'>
                <div className="lg:w-1/2 flex items-center justify-center">
                    <Lottie
                        animationData={contactLottie}
                        loop={true}
                        className="w-56 lg:w-96"
                    ></Lottie>
                </div>
                <section className="lg:w-1/2 p-6 dark:text-gray-800">
                    <form ref={form} onSubmit={sendEmail} noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
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

export default Contact;
