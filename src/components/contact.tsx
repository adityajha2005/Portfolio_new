"use client"
'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes'; // Assuming Next.js for theme switching
import { Mail, Phone, Github, Linkedin , TwitterIcon } from 'lucide-react';
import { TwitterLogoIcon } from '@radix-ui/react-icons';

const ContactMe: React.FC = () => {
  const { theme } = useTheme(); // Next.js theme switcher hook
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [command, setCommand] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      processCommand();
    }
  };

  const processCommand = () => {
    const addRegex = /^git add \. "(.*)"$/;
    const commitRegex = /^git commit -m "(.*)"$/;
    const pushRegex = /^git push origin adityajha2005$/;

    if (addRegex.test(command)) {
      const message = addRegex.exec(command)?.[1] || '';
      setFormData({ ...formData, message });
      setCommand('');
    } else if (commitRegex.test(command)) {
      const email = commitRegex.exec(command)?.[1] || '';
      setFormData({ ...formData, email });
      setCommand('');
    } else if (pushRegex.test(command)) {
      handleSubmit();
      setCommand('');
    } else {
      setFormStatus('Invalid command. Please try again.');
    }
  };

  const handleSubmit = async () => {
    setFormStatus('Submitting...');
    
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: 'f6a57aa6-d736-4b09-a35b-408d2b7758c9', // Replace with your Web3Forms access key
        ...formData
      })
    });
    
    const result = await res.json();

    if (result.success) {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-transparent  text-white' : 'bg-transparent text-black'}`}>
      <motion.h1
        className=" mb-4 text-black dark:text-white "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        | Let's Connect |
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.a
          href="mailto:2005akjha@gmail.com"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Mail className="h-8 w-8 mb-2 text-red-800" />
          <span>Email</span>
        </motion.a>

        <motion.a
          href="https://x.com/adxtya_jha"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <TwitterLogoIcon className="h-8 w-8 mb-2 text-blue-400" />
          <span>Twitter</span>
        </motion.a>

        <motion.a
          href="https://github.com/adityajha2005"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white dar rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Github className="h-8 w-8 mb-2 text-gray-700" />
          <span>GitHub</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/aditya-jha-654800280/"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <Linkedin className="h-8 w-8 mb-2 text-blue-700" />
          <span>LinkedIn</span>
        </motion.a>
      </motion.div>
   <motion.h1
   className='text-black dark:text-white'>
      drop a message for me? lets do it the git way !! 
   </motion.h1>
   <motion.h2
   className='text-green-500'>
     git add . "your message for me" && git commit -m "your mail id"
   </motion.h2>
      <motion.div
        className="w-full max-w-2xl mt-8 bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-4">
          <p className="text-green-500">$ git add . "{formData.message}"</p>
          <p className="text-green-500">$ git commit -m "{formData.email}"</p>
          <p className="text-green-500">$ git push origin adityajha2005</p>
        </div>
        
        <input
          type="text"
          value={command}
          onChange={handleCommandChange}
          onKeyPress={handleKeyPress}
          className={`w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} border-none focus:outline-none p-2`}
          placeholder="Enter git command"
        />

        {formStatus && <p className="mt-4 text-red-500">{formStatus}</p>}
      </motion.div>
    </div>
  );
};

export default ContactMe;
