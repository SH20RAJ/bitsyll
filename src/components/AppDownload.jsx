"use client";

import { motion } from "framer-motion";
import { Download, Smartphone, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AppDownload() {
  const features = [
    "Offline access to all study materials",
    "Exam notifications and reminders",
    "Class routine updates",
    "Direct contact with contributors"
  ];

  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a1129]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
              <Smartphone size={14} className="mr-2" /> Mobile App
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get <span className="text-blue-400">Offline</span> Access
            </h2>
            
            <p className="text-gray-300 mb-8 max-w-lg">
              Download our fully tested, open source app for Android and iPhone. Access all your study materials anytime, anywhere, even without an internet connection.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://median.co/share/ayewex" target="_blank" rel="noopener noreferrer">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-600/20"
                >
                  <Download className="h-5 w-5" />
                  <span>BitSyll App</span>
                </motion.div>
              </Link>
              
              <Link href="https://github.com/SH20RAJ/bitsyll" target="_blank" rel="noopener noreferrer">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0c1631] hover:bg-[#0c1631]/80 text-white rounded-xl font-medium border border-[#1e3a8a]/50 transition-colors"
                >
                  <span>View Source</span>
                </motion.div>
              </Link>
            </div>
          </div>
          
          {/* Right content - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[560px]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-[#0c1631] rounded-[40px] border-8 border-[#1a2747] shadow-xl overflow-hidden">
                {/* Status bar */}
                <div className="h-8 bg-[#0a1129] flex items-center justify-between px-6">
                  <div className="w-16 h-1.5 bg-gray-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* App content mockup */}
                <div className="p-3 h-full">
                  <div className="bg-[#0a1129] rounded-2xl h-full p-4 flex flex-col">
                    {/* App header */}
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-600 text-white p-1.5 rounded-lg mr-2">
                        <Smartphone size={16} />
                      </div>
                      <div className="font-bold text-lg text-white">
                        BitSyll
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="space-y-4 flex-1">
                      {/* Subject card */}
                      <div className="bg-[#0c1631] p-3 rounded-xl border border-[#1e3a8a]/30">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
                          </div>
                          <div>
                            <div className="text-white font-medium">Mathematics</div>
                            <div className="text-xs text-gray-400">Calculus</div>
                          </div>
                        </div>
                        <div className="w-full h-1 bg-[#1e3a8a]/30 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Subject card */}
                      <div className="bg-[#0c1631] p-3 rounded-xl border border-[#1e3a8a]/30">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-3">
                            <div className="w-6 h-6 bg-indigo-500 rounded-md"></div>
                          </div>
                          <div>
                            <div className="text-white font-medium">Physics</div>
                            <div className="text-xs text-gray-400">Mechanics</div>
                          </div>
                        </div>
                        <div className="w-full h-1 bg-[#1e3a8a]/30 rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-indigo-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* More cards (simplified) */}
                      <div className="space-y-3">
                        <div className="bg-[#0c1631] p-3 rounded-xl border border-[#1e3a8a]/30 h-16"></div>
                        <div className="bg-[#0c1631] p-3 rounded-xl border border-[#1e3a8a]/30 h-16"></div>
                        <div className="bg-[#0c1631] p-3 rounded-xl border border-[#1e3a8a]/30 h-16"></div>
                      </div>
                    </div>
                    
                    {/* Navigation bar */}
                    <div className="flex justify-around pt-4">
                      <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                      <div className="w-12 h-1 bg-[#1e3a8a]/30 rounded-full"></div>
                      <div className="w-12 h-1 bg-[#1e3a8a]/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Reflection/highlight */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent rounded-t-[40px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
