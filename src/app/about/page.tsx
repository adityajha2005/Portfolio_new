"use client"
import React, { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { FaTools, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

import CertificationsSection from "@/components/cert";
import ReadmeDisplay from "@/components/readme";
import ExperienceSection from "@/components/experience";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

const AboutPage = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 5 + 1,
                speedX: Math.random() * 3 - 1.5,
                speedY: Math.random() * 3 - 1.5,
            });
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

            particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            });

            requestAnimationFrame(drawParticles);
        };

        drawParticles();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const socialLinks = [
        { Icon: FaGithub, url: "https://github.com/adityajha2005", label: "GitHub" },
        { Icon: FaLinkedin, url: "https://www.linkedin.com/in/aditya-jha-654800280", label: "LinkedIn" },
        { Icon: BsTwitterX, url: "https://twitter.com/adxtya_jha", label: "Twitter" }
    ];

    return (
        <div className="relative">
            <section className="lg:max-w-[60%] mt-10 md:mt-12 md:max-w-[90%] relative md:m-auto p-4 flex flex-col">
                <div className="flex gap-8 flex-col justify-center items-left mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='flex justify-center items-center gap-3'
                    >
                        <FaTools className='text-3xl text-blue-400' />
                        <h1 className='text-6xl md:text-5xl font-bold'> About Me</h1>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center space-y-8 py-8"
                    >
                        <h2 className="text-3xl font-bold mb-4">Aditya Jha</h2>
                        <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                            Currently working as a Full Stack AI Intern, I'm deeply passionate about MERN stack development
                            and artificial intelligence. My journey is driven by competitive programming challenges and
                            creating innovative solutions that combine web technologies with AI capabilities. I thrive on
                            turning complex problems into elegant, efficient solutions while continuously exploring the
                            intersection of web development and artificial intelligence.
                        </p>
                        
                        <div className="flex justify-center space-x-6 pt-4">
                            {socialLinks.map(({ Icon, url, label }, index) => (
                                <motion.a
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, color: "#60A5FA" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-3xl hover:text-blue-400 transition-colors"
                                    aria-label={label}
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <div className="space-y-16 md:space-y-32 mt-8">
                        <div className="relative">
                            <ExperienceSection />
                        </div>
                        
                        <div className="relative pt-8 md:pt-16">
                            <div className="w-32 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-blue-400/50 via-blue-400 to-blue-400/50 mx-auto mb-8 md:mb-16"></div>
                            <CertificationsSection />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;


