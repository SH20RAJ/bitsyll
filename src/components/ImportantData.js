import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ImportantData({ showHeading }) {
  let data = [
    {
      id: 1,
      title: "Class Routine 📅",
      description: "This is the important data",
      link: "https://drive.google.com/file/d/1c_8zEnw6alUJRUGS8BGOQMviVHmRGKY6/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Exam Routine 📅",
      description: "This is the important data",
      link: "/examroutine",
    },
    {
      id: 3,
      title: "Syllabus 📚",
      description: "This is the important data",
      link: "/syllabus",
    },
    {
      id: 4,
      title: "Clubs 🎉",
      description: "This is the important data",
      link: "/clubs",
    },
    {
      id: 5,
      title: "Website 🌐",
      description: "This is the important data",
      link: "https://www.bitmesra.ac.in/",
    },
    {
      id: 6,
      title: "Academic Calendar 📅",
      description: "This is the important data",
      link: "https://drive.google.com/file/d/12JS2UD0lOanhqd3PlsdzmLJbsX_qb17U/view?usp=drive_link",
    },
    {
      id: 7,
      title: "BITHUB 🚀",
      description: "This is the important data",
      link: "https://bithub.co.in/",
    },
    {
      id: 8,
      title: "WhatsApp Group 📱",
      description: "This is the important data",
      link: "https://chat.whatsapp.com/GhtCO9w8Hrk8XAUzjM325y",
    },
    {
      id: 9,
      title: "Notes 📃",
      description: "This is the important data",
      link: "https://drive.google.com/drive/folders/19I3elwfFDGrfa6GIIocmjyXeyR1muUeW?usp=drive_link",
    },
    {
      id: 10,
      title: "Best YouTube Channels 🎥",
      description: "This is the important data",
      link: "https://github.com/SH20RAJ/bitsyll/issues/2",
    },
  ];
  
  return (
    <div className="px-4 py-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {showHeading && (
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Important Data
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
            Access all your academic resources in one place
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            className="block"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  <span className="text-xl">{item.title.split(' ').pop()}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    {item.title.split(' ').slice(0, -1).join(' ')}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                <div className="text-blue-600 dark:text-blue-400">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
