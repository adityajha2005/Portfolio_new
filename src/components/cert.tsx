"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-center mb-12 text-gray-800 dark:text-white flex justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaCertificate className="mr-4 text-blue-400" size={24} />
          <span className="text-2xl font-semibold">About Certifications</span>
        </motion.h1>
        
        <motion.div 
          className="max-w-2xl mx-auto text-center bg-white/5 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I don&apos;t believe in certificates as the sole measure of knowledge and skills.
            Instead, I focus on practical experience, continuous learning, and building real-world projects.
            My portfolio of work speaks louder than any certification could.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;