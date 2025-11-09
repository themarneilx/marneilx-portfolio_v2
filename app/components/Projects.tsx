'use client';
import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectsRef = React.useRef<HTMLElement>(null);

    useGSAP(() => {
        const projectCards = gsap.utils.toArray<HTMLElement>('.project-card');
        console.log(projectCards);
        if (projectCards) {
            projectCards.forEach(card => {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 80%',
                    onEnter: () => {
                        gsap.fromTo(card,
                            { opacity: 0, y: 50, willChange: 'transform, opacity' },
                            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
                        );
                    },
                    once: true,
                });
            });
        }
    }, { scope: projectsRef });

    return (
        <section id="projects" className="py-20 bg-base-200" ref={projectsRef}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
                    <div className="card lg:card-side bg-base-100 shadow-xl project-card glass-card">
                        <figure className="lg:w-1/2">
                            <Image src="/library.png" alt="Library Management System" width={500} height={500} className="rounded-t-xl lg:rounded-l-xl lg:rounded-t-none" />
                        </figure>
                        <div className="card-body lg:w-1/2">
                            <h2 className="card-title text-2xl font-bold">Library Management System</h2>
                            <p className="mt-4">A comprehensive library management system developed for Benedicto College using Angular framework with Node.js and Express backend. Currently in development.</p>
                            <div className="card-actions justify-start mt-4">
                                <div className="badge badge-outline">Angular</div>
                                <div className="badge badge-outline">TypeScript</div>
                                <div className="badge badge-outline">Node.js</div>
                                <div className="badge badge-outline">Express</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;