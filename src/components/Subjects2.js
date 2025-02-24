"use client";

import { subjects } from "@/constants/subjects";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Subjects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl opacity-50 animate-gradient" />
      
      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold p-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Explore Subjects
        </motion.h2>
        
        <motion.hr 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="w-1/3 mx-auto border-2 border-indigo-500/50 rounded-full mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={"subject/" + subject.slug}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/30 p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:border-indigo-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute -right-8 -top-8">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-500 blur-2xl" />
                </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, type: "spring" }}
                  className="mb-6 p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-colors duration-300"
                >
                  <img
                    src={subject.logo}
                    alt={subject.name}
                    className="h-16 w-16 rounded-lg object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              
                <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-indigo-500 transition-colors duration-300 text-center mb-2">
                  {subject.name}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-indigo-400 transition-colors duration-300 text-center">
                  {subject.slug}
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-gradient {
          animation: gradient 15s linear infinite;
        }
      `}
      </style>
    </div>
    </div>
  );
}
