"use client";

import { subjects } from "@/constants/subjects";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export function Subjects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative overflow-hidden py-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a1129]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
            <BookOpen size={14} className="mr-2 text-yellow-200" /> Academic Curriculum
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore <span className="text-blue-400">Subjects</span>
          </h2>

          <p className="text-gray-300 text-center max-w-2xl mb-8">
            Access comprehensive study materials for all your academic subjects
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={"subject/" + subject.slug}>
                <div className="group relative h-full flex flex-col bg-[#0c1631]/90 rounded-xl border border-[#1e3a8a]/30 overflow-hidden shadow-lg hover:shadow-blue-900/20 hover:border-blue-500/50 transition-all duration-300">
                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>

                  {/* Decorative elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/10 rounded-full blur-xl group-hover:bg-blue-600/20 transition-colors duration-300"></div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 p-3 bg-[#0a1129] rounded-lg border border-[#1e3a8a]/30 mr-4">
                        <img
                          src={subject.logo}
                          alt={subject.name}
                          className="h-12 w-12 rounded-md object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                          {subject.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {subject.slug}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-[#1e3a8a]/30 flex justify-between items-center">
                      <span className="text-xs text-gray-400">View materials</span>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600/20 group-hover:bg-blue-600 transition-colors">
                        <ArrowRight size={14} className="text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
