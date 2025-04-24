"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  FileText,
  Globe,
  GithubIcon,
  MessageSquare,
  YoutubeIcon,
  ChevronRight,
  Sparkles,
  GraduationCap
} from "lucide-react";

import { AppDownload } from "@/components/AppDownload";
import { FAQ } from "@/components/FAQ";
import { Subjects } from "@/components/Subjects2";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resources = [
    {
      title: "Class Routine",
      description: "Access your daily class schedule and timings",
      icon: <Calendar className="h-6 w-6" />,
      href: "/routine",
      color: "from-blue-600 to-blue-700",
      iconBg: "bg-blue-600/20",
    },
    {
      title: "Exam Routine",
      description: "View upcoming exam dates and schedules",
      icon: <Calendar className="h-6 w-6" />,
      href: "/exam-routine",
      color: "from-indigo-600 to-indigo-700",
      iconBg: "bg-indigo-600/20",
    },
    {
      title: "Syllabus",
      description: "Browse complete course syllabi for all subjects",
      icon: <BookOpen className="h-6 w-6" />,
      href: "/syllabus",
      color: "from-purple-600 to-purple-700",
      iconBg: "bg-purple-600/20",
    },
    {
      title: "Clubs",
      description: "Explore student clubs and extracurricular activities",
      icon: <GraduationCap className="h-6 w-6" />,
      href: "/clubs",
      color: "from-pink-600 to-pink-700",
      iconBg: "bg-pink-600/20",
    },
    {
      title: "BIT Website",
      description: "Visit the official BIT Mesra website",
      icon: <Globe className="h-6 w-6" />,
      href: "https://www.bitmesra.ac.in/",
      color: "from-cyan-600 to-cyan-700",
      iconBg: "bg-cyan-600/20",
      external: true,
    },
    {
      title: "Academic Calendar",
      description: "View important academic dates and events",
      icon: <Calendar className="h-6 w-6" />,
      href: "/academic-calendar",
      color: "from-emerald-600 to-emerald-700",
      iconBg: "bg-emerald-600/20",
    },
    {
      title: "BITHUB",
      description: "Access the BIT Mesra student community hub",
      icon: <GithubIcon className="h-6 w-6" />,
      href: "/bithub",
      color: "from-gray-600 to-gray-700",
      iconBg: "bg-gray-600/20",
    },
    {
      title: "WhatsApp Group",
      description: "Join student discussion groups for collaboration",
      icon: <MessageSquare className="h-6 w-6" />,
      href: "https://chat.whatsapp.com/GhtCO9w8Hrk8XAUzjM325y",
      color: "from-green-600 to-green-700",
      iconBg: "bg-green-600/20",
      external: true,
    },
    {
      title: "Notes",
      description: "Access comprehensive study notes and materials",
      icon: <FileText className="h-6 w-6" />,
      href: "/notes",
      color: "from-amber-600 to-amber-700",
      iconBg: "bg-amber-600/20",
    },
    {
      title: "YouTube Channels",
      description: "Discover educational YouTube channels for learning",
      icon: <YoutubeIcon className="h-6 w-6" />,
      href: "/youtube-channels",
      color: "from-red-600 to-red-700",
      iconBg: "bg-red-600/20",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
                <Sparkles size={14} className="mr-2 text-yellow-200" /> BIT Mesra Resources
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Your Complete <span className="text-blue-400">Academic</span> Companion
              </h1>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Access all the resources you need for your academic journey at BIT Mesra in one place.
              </p>

              {/* Decorative element */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {resources.map((resource) => (
              <motion.div key={resource.title} variants={item}>
                <Link
                  href={resource.href}
                  target={resource.external ? "_blank" : "_self"}
                  rel={resource.external ? "noopener noreferrer" : ""}
                >
                  <div className="group h-full premium-card hover:border-blue-500/50 overflow-hidden">
                    {/* Top gradient bar */}
                    <div className={`h-1 w-full bg-gradient-to-r ${resource.color}`}></div>

                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-start mb-4">
                        <div className={`p-3 rounded-lg ${resource.iconBg} mr-4`}>
                          {resource.icon}
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {resource.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mb-6">
                        {resource.description}
                      </p>

                      <div className="mt-auto flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {resource.external ? "External Link" : "View Details"}
                        </span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0a1129] group-hover:bg-blue-600 transition-colors">
                          <ChevronRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-12">
        <Subjects />
      </section>

      {/* App Download Section */}
      <section className="py-12">
        <AppDownload />
      </section>

      <Separator className="my-8 border-[#1e3a8a]/30" />

      {/* FAQ Section */}
      <section className="py-12">
        <FAQ />
      </section>
    </main>
  );
}