// components/MyProjects.tsx
'use client';
import React, { useState } from 'react';
import { FaFolderOpen, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import LoadMoreButton from './loadmore';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface MyProjectsProps {
  projects: Project[];
  showLoadMore?: boolean;
}

const MyProjects: React.FC<MyProjectsProps> = ({ projects, showLoadMore = false }) => {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  return (
    <div className='mt-20'>
      <div className='flex justify-center items-center'>
        <FaFolderOpen className='text-2xl mr-2' />
        <h1 className='text-center'> | My Projects |</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-5 justify-items-center px-2 py-2 mt-10'>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className='bg-white dark:bg-transparent p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 border border-b;lue-700'>

            <div className='flex items-center mb-4'>
              <div className='text-4xl mr-4 transition-transform duration-300 hover:scale-150'>
                {project.icon}
              </div>
              <div>
                <h2 className='text-xl font-bold text-gray-800 dark:text-white'>{project.title}</h2>
                <p className='text-sm text-gray-600 dark:text-gray-300'>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
     <div>
      <LoadMoreButton />
     </div>
    </div>
  );
};

export default MyProjects;
