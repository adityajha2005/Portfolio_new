"use client"
import React from "react";
import { FaTools, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

import { IconCloudDemo } from "@/components/skillcloud";
type CodeIconProps = React.SVGProps<SVGSVGElement>;
function CodeIcon(props: CodeIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24" 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
const SkillPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <CodeIcon className="w-10 h-10 text-primary animate-[pulse_2s_ease-in-out_infinite]" />
      <h1 className="text-center text-2xl font-bold my-4">| My Skills |</h1>
      <div className="w-full flex justify-center mt-8">
        <IconCloudDemo />
      </div>
    </div>
  );
};

export default SkillPage;

