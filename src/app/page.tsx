import React from "react";
import { motion } from "framer-motion";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { BsTwitterX } from "react-icons/bs";

import { ChevronRight, MailPlus, MouseIcon, Terminal, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MyProjects from "@/components/projects";
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import CertificationsSection from "@/components/cert";
import Head from "next/head";
import CopyCmd from "@/components/copycmd";
import { FlipWordsDemo } from "@/components/words";
import { DockDemo } from "@/components/dock";
import HoverImageComponent from "@/components/skills";
import ReadmeDisplay from "@/components/readme";
import ContactMe from "@/components/contact";
import { Analytics } from "@vercel/analytics/react"
import IconCloud from "@/components/ui/iconcloud";
import { MotionSection, MotionDiv } from "@/components/motion";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projects = [
    { title: 'CareInsight', description: 'AI-Healthcare Platform.', icon: <FaNodeJs className='text-green-500' /> },
    { title: 'Vibecraft', description: 'AI-Sktech to Image Platform', icon: <FaReact className='text-cyan-400' /> },
   
 
  
  ];
  const certifications = [
    {
      id: 1,
      title: "SQL-Basic to Advanced",
      image: "/assests/images/geekster.png",
      description: "Received the certificate for comple the geekster SQL assignments",
      issuer: "Geekster",
      date: "-05-"
    },
    // {
    //     id: 2,
    //     title: "Bitcoin Script & Enterprise Course",
    //     image: "/assests/images/bitcoin.png",
    //     description: "Comprehensive course on Bitcoin and blockchain technologies.",
    //     issuer: "BSV Academy",
    //     date: "2024-06-15"
    //   },
      {
        id: 3,
        title: "Rookie Developer Badge",
        image: "/assests/images/tsoc.png",
        description: "Earned for assignment completion of the workshops in TSoC'24",
        issuer: "TimeChain Labs",
        date: "2024-06-35"
      },
    // Add more certification objects...
  ];
const Home = () => {
  const iconSlugs = [
    // Frontend
    "html5",
    "css3",
    "javascript",
    "typescript",
    "react",
    "nextdotjs",
    "tailwindcss",
    // Backend
    "nodedotjs",
    "express",
    "nestjs",
    // Databases
    "mongodb",
    "postgresql",
    "mysql",
    "prisma",
    // Tools & Others
    "git",
    "github",
    "postman",
    "docker",
    "linux",
    "vercel",
    "vscode",
    "redux",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <MotionSection 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl px-6 min-h-[80vh] flex items-center"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left side - Introduction */}
          <MotionDiv 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="w-full md:w-1/2 space-y-6"
          >
            <MotionDiv 
              variants={fadeInUp}
              className="text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase"
            >
              <Terminal size={17} />
              Hi I am
            </MotionDiv>
            
            <MotionDiv 
              variants={fadeInUp}
              className="text-4xl flex gap-12 items-center flex-row md:text-7xl lg:text-8xl font-bold"
            >
              Aditya
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <FlipWordsDemo />
            </MotionDiv>

            <MotionDiv 
              variants={fadeInUp}
              className="opacity-80 text-sm lg:text-xl font-medium"
            >
              <span className="text-blue-500 font-bold">
                Contributor @ SSoC'24, GSSoC'24 & Hacktoberfest
              </span>
            </MotionDiv>

            <MotionDiv 
              variants={fadeInUp}
              className="mt-6"
            >
              <DockDemo />
            </MotionDiv>

            <MotionDiv 
              variants={fadeInUp}
              className="pt-2"
            >
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://drive.google.com/file/d/1QWm4nkNHkf4p7TrN_LQph90rkJn2WmMh/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                >
                  <span className="mr-2">Resume</span>
                  <Download className="w-4 h-4 ml-1" />
                </Link>
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>

          {/* Right side - Icon Cloud */}
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <IconCloud iconSlugs={iconSlugs} />
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Rest of the content */}
      <MotionSection 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl px-6"
      >
        <div className="flex flex-col gap-8">
          {/* <HoverImageComponent /> */}
          <MyProjects projects={projects} />
          <ContactMe />
        </div>
      </MotionSection>
    </main>
  );
};

export default Home;