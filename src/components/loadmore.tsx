// components/LoadMoreButton.tsx
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const LoadMoreButton: React.FC = () => {
  return (
    <div className='flex justify-center mt-5'>
      <a
        href="/projects"
        className='flex items-center mt-7 px-4 py-2 bg-blue-700 text-white rounded shadow-lg hover:bg-blue-300  transition duration-300 hover:text-black'
      >
        <FaPlus className='mr-2' />
        Load More
      </a>
    </div>
  );
};

export default LoadMoreButton;
