"use client";

import { motion } from "framer-motion";
import React from "react";
import { ArrowRight, BookOpen, Calendar, Users, FileText } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#0a1129]">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/BITSYLL.png')] opacity-5 bg-cover bg-center" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
              <span className="mr-2">🎓</span> BIT Mesra Study Resources
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Complete <span className="text-blue-400">Academic</span> Companion
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
              Access comprehensive study materials, class routines, and resources to excel in your academic journey at BIT Mesra.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-600/30 transition-all flex items-center">
                Get Started <ArrowRight size={16} className="ml-2" />
              </button>
              <button className="px-6 py-3 bg-[#0c1631] hover:bg-[#0c1631]/80 text-white font-medium rounded-lg border border-[#1e3a8a]/50 transition-all">
                Explore Resources
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {[
                { icon: BookOpen, text: "Study Materials" },
                { icon: Calendar, text: "Class Routines" },
                { icon: Users, text: "Connect with Peers" },
                { icon: FileText, text: "Exam Resources" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-[#0c1631]/80 rounded-lg border border-[#1e3a8a]/30">
                  <item.icon size={20} className="text-blue-400 mb-2" />
                  <span className="text-sm text-gray-300 text-center">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-[#1e3a8a]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm" />
              <img
                className="w-full h-full object-cover object-center"
                src="/BITSYLL.png"
                alt="BITSYLL Hero"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-600/20 rounded-full blur-xl"></div>

              {/* Floating badges */}
              <div className="absolute top-6 -right-12 bg-[#0c1631] p-3 rounded-lg border border-[#1e3a8a]/50 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-white">Latest Updates</span>
                </div>
              </div>

              <div className="absolute bottom-6 -left-12 bg-[#0c1631] p-3 rounded-lg border border-[#1e3a8a]/50 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-white">24/7 Access</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
