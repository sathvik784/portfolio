import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            'service_ker5yxc',
            'template_kfbq5g3',
            form.current,
            'mnSJOIRM_EQHfIHwq'
        )
        .then((result) => {
            console.log('SUCCESS!', result);
            setSubmitStatus('success');
            setIsSubmitting(false);
            form.current.reset();
        })
        .catch((error) => {
            console.log('FAILED...', error);
            setSubmitStatus('error');
            setIsSubmitting(false);
        });
    };

    return (
        <section id="contact" className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-center text-gray-600 mb-12">
                        Have a question or want to work together? Send me a message!
                    </p>

                    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            {submitStatus === 'success' && (
                                <div className="bg-green-50 text-green-800 px-4 py-3 rounded-lg">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="bg-red-50 text-red-800 px-4 py-3 rounded-lg">
                                    Something went wrong. Please try again or email me directly at sandhav1@terpmail.umd.edu
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-600">
                                Or email me directly at{' '}
                                <a
                                    href="mailto:sandhav1@terpmail.umd.edu"
                                    className="text-black font-medium hover:underline"
                                >
                                    sandhav1@terpmail.umd.edu
                                </a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
