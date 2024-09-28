"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaCalendarAlt, FaBuilding, FaMedal, FaLink } from 'react-icons/fa';
import Image from 'next/image';

interface Certification {
  id: number;
  title: string;
  image: string;
  description: string;
  issuer: string;
  date: string;
  url?: string;
}

interface CertificationCardProps {
  cert: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  return (
    <motion.div 
      className="bg-transparent rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-300 dark:border-gray-800 flex flex-col sm:flex-row"
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <Image 
            src={cert.image} 
            alt={cert.title} 
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 group-hover:brightness-110"
          />
        </motion.div>
      </div>
      <div className="p-6 flex-grow">
        <motion.h3 
          className="text-2xl font-bold mb-3 text-gray-800 dark:text-white flex items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <FaMedal className="mr-2 text-yellow-400" />
          {cert.title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {cert.description}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 dark:text-gray-400 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="flex items-center mb-2 sm:mb-0">
            <FaBuilding className="mr-2" />
            {cert.issuer}
          </span>
          <span className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            {cert.date}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <section className="py-16 bg-white dark:bg-transparent">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-center mb-12 text-gray-800 dark:text-white flex justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaCertificate className="mr-4 text-gray-800 dark:text-white" size={24} />
         | My Certifications |
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} layout>
              <CertificationCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;