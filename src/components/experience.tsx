import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import ReadmeDisplay from './readme';

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string[];
    side: 'left' | 'right';
}

const experiences: ExperienceItem[] = [
    {
        title: "Full Stack AI Intern",
        company: "Aiphi AI",
        period: "Feb 2025",
        description: [
            "Developing and optimizing AI-powered applications, integrating machine learning models into full-stack systems",
            "Collaborating with cross-functional teams to enhance AI solutions for real-world applications.",
        ],
        side: 'left'
    },
    {
        title: "Research Assistant",
        company: "AI4A Lab",
        period: "Oct 2024",
        description: [
            "Contributed to research on OCEAN personality traits",
            "Developed ML models for AI-driven projects",
        ],
        side: 'right'
    },
];

const ExperienceSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="my-8 md:my-16 relative px-4 md:px-0"
        >
            <div className="text-center mb-8 md:mb-16">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block p-2 bg-primary/10 rounded-xl mb-4"
                >
                    <FaBriefcase className="text-xl md:text-2xl text-primary animate-pulse" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-300 relative">
                    | Experience Timeline |
                </h2>
            </div>
            
            {/* Center timeline - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block">
                <div className="w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary rounded-full animate-pulse" />
            </div>
            
            <div className="relative">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: exp.side === 'left' ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3 }}
                        className={`flex flex-col md:flex-row items-center mb-8 md:mb-16 ${
                            exp.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                        }`}
                    >
                        <div className={`w-full md:w-5/12 ${exp.side === 'left' ? 'md:pr-8' : 'md:pl-8'} mb-4 md:mb-0`}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-white dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 p-4 md:p-6 rounded-xl
                                          backdrop-blur-lg border border-gray-300 dark:border-gray-700/50
                                          shadow-lg hover:shadow-primary/30 transition-all duration-300
                                          relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{exp.title}</h3>
                                    <div className="flex items-center text-gray-700 dark:text-gray-200 mb-1 text-sm md:text-base">
                                        <FaBriefcase className="mr-2 text-primary" />
                                        <p>{exp.company}</p>
                                    </div>
                                    <div className="flex items-center text-gray-700 dark:text-gray-200 mb-4 text-sm">
                                        <FaCalendar className="mr-2 text-primary" />
                                        <p>{exp.period}</p>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + (idx * 0.1) }}
                                                className="text-gray-700 dark:text-gray-200 text-xs md:text-sm flex items-start"
                                            >
                                                <span className="mr-2 text-white">•</span>
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>

                        {/* Timeline dot - shown differently on mobile */}
                        <div className="w-full md:w-2/12 flex justify-center relative">
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full border-4 border-gray-800 dark:border-gray-800 z-10
                                          shadow-lg shadow-primary/30 relative"
                            >
                                {/* Responsive pulse colors - reduced size on mobile */}
                                <div className="absolute -inset-3 md:-inset-4 bg-primary/20 dark:bg-white/10 rounded-full animate-pulse" />
                                <div className="absolute -inset-6 md:-inset-8 bg-primary/10 dark:bg-white/5 rounded-full animate-pulse delay-75 hidden md:block" />
                                <div className="absolute -inset-9 md:-inset-12 bg-primary/5 dark:bg-white/[0.02] rounded-full animate-pulse delay-150 hidden md:block" />
                                <div className="absolute inset-0 bg-primary/30 dark:bg-white/20 rounded-full animate-ping opacity-20" />
                            </motion.div>
                        </div>

                        <div className="hidden md:block md:w-5/12" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const About = () => {
    return (
        <div>
            <ExperienceSection />
        </div>
    );
};

export default About;
