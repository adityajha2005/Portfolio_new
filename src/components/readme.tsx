"use client"
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const ReadmeDisplay: React.FC = () => {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch('/assests/README.md');
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error fetching the markdown file:', error);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-black dark:text-white p-3 flex flex-col justify-center items-center">
      <div className="bg-transparent bg-opacity-50 p-6 rounded-lg shadow-lg max-w-3xl mx-auto w-full">
        {content ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]} // This enables rendering of raw HTML
          >
            {content}
          </ReactMarkdown>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ReadmeDisplay;
