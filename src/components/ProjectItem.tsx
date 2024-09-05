"use client"

import { useState } from "react";

interface ProjectProps {
  children: React.ReactNode;
  title: string;
  payment: string;
	increaseCount: any
}

const ProjectItem: React.FC<ProjectProps> = ({ children, title, payment, increaseCount }) => {
  const [isViewButton, setIsViewButton] = useState(false);
	const handleClick = () => {
		setIsViewButton(true);
		increaseCount();
	}
  return (
    <div className="border border-neutral-300 rounded-lg p-5 bg-white animate-in zoom-in duration-1000">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        {isViewButton && children}
        {isViewButton === false && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-lock h-6 w-6 text-gray-400"
            data-id="17"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        )}
      </div>
      <h1 className="text-neutral-400 text-sm">{payment}</h1>
      <a href="#" className="bg-[#F2E8FF] text-[#A456FB] font-bold rounded-lg flex justify-center items-center py-12 my-10 cursor-pointer">
        Component preview
      </a>
      {isViewButton === false &&
        <button
          className="bg-[#635BFF] rounded-md text-white w-full text-center py-2 transition-all duration-200 hover:bg-[#0A2540]"
          onClick={handleClick}
        >
          Unlock
        </button>
      }
      {isViewButton &&
        <button
          className="border border-neutral-300 bg-white rounded-md text-neutral-900 w-full text-center py-2 transition-all duration-200 hover:bg-neutral-200"
        >
          View component
        </button>
      }
    </div>
  );
};
export default ProjectItem;
