"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[600px] overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/BITSYLL.png')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-600/20 to-indigo-500/20" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[600px]">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-white mb-6">
          BITSYLL
        </h1>

        <p className="text-xl md:text-2xl text-center text-gray-200 max-w-2xl mb-8">
          Your comprehensive resource for academic excellence
        </p>

        <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400/30">
          <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm" />
          <img
            className="w-full h-full object-cover object-center"
            src="/BITSYLL.png"
            alt="BITSYLL Hero"
          />
        </div>
      </div>
    </div>
  );
}
