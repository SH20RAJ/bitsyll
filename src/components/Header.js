"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[600px] overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/BITSYLL.png')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 animate-gradient" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[600px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
        >
          BITSYLL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-center text-gray-300 max-w-2xl mb-8"
        >
          Your comprehensive resource for academic excellence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm" />
          <img
            className="w-full h-full object-cover object-center"
            src="/BITSYLL.png"
            alt="BITSYLL Hero"
          />
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-gradient {
          animation: gradient 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
