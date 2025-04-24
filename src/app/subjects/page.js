"use client";

import { Subjects } from "@/components/Subjects2";
import { FAQ } from "@/components/FAQ";
import { AppDownload } from "@/components/AppDownload";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Lightbulb } from "lucide-react";

export default function SubjectsPage() {
  const stats = [
    { icon: <BookOpen className="h-6 w-6" />, value: "25+", label: "Subjects" },
    { icon: <GraduationCap className="h-6 w-6" />, value: "500+", label: "Study Materials" },
    { icon: <Lightbulb className="h-6 w-6" />, value: "100+", label: "Contributors" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0a1129]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Your Complete <span className="text-blue-400">Academic</span> Resource
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Access comprehensive study materials for all subjects at BIT Mesra, organized and curated by students.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-[#0c1631]/80 border border-[#1e3a8a]/30 rounded-xl p-6 flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4 text-blue-400">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative element */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Subjects Grid */}
      <Subjects />
      
      {/* App Download Section */}
      <AppDownload />
      
      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
