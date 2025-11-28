'use client';
import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const ContactForm = () => {
    const [showToast, setShowToast] = useState(false);
    const formRef = React.useRef<HTMLFormElement>(null);

    useGSAP(() => {
        const inputs = gsap.utils.toArray<HTMLInputElement | HTMLTextAreaElement>('.form-field');
        inputs.forEach(input => {
            gsap.fromTo(input, {
                borderBottomColor: 'hsl(var(--b2))'
            }, {
                borderBottomColor: 'hsl(var(--p))',
                duration: 0.3,
                scrollTrigger: {
                    trigger: input,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }, { scope: formRef });


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact" className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="card bg-base-100 shadow-xl glass-card">
                        <div className="card-body">
                            <h3 className="card-title text-2xl font-bold">Contact Information</h3>
                            <div className="space-y-4 mt-6">
                                <p><i className="fas fa-envelope mr-2 text-primary"></i> marneilx@proton.me</p>
                                <p><i className="fas fa-map-marker-alt mr-2 text-primary"></i> Mandaue City, Cebu, Philippines</p>
                                <p><i className="fab fa-github mr-2 text-primary"></i> <a href="https://github.com/themarneilx/" target="_blank" rel="noopener noreferrer" className="link link-hover">github.com/themarneilx</a></p>
                            </div>
                            <div className="mt-6">
                                <h4 className="font-bold text-lg mb-4">Connect with me</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.facebook.com/jon.cabs.3/" className="btn btn-circle btn-primary" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.instagram.com/joncabahug/" className="btn btn-circle btn-primary" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.facebook.com/TokatechPC" className="btn btn-circle btn-primary" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-tools"></i>
                                    </a>
                                    <a href="https://github.com/themarneilx/" className="btn btn-circle btn-primary" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-primary" title="View CV">
                                        <i className="fas fa-file-pdf"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl glass-card">
                        <div className="card-body">
                            <h3 className="card-title text-2xl font-bold">Send me a message</h3>
                            <form className="space-y-4 mt-6" onSubmit={handleSubmit} ref={formRef}>
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full form-field" />
                                <input type="email" placeholder="Your Email" className="input input-bordered w-full form-field" />
                                <input type="text" placeholder="Subject" className="input input-bordered w-full form-field" />
                                <textarea className="textarea textarea-bordered h-32 w-full form-field" placeholder="Your message here..."></textarea>
                                <button type="submit" className="btn btn-primary w-full">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {showToast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>Message sent successfully.</span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactForm;