"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Filter,
  Clock,
  Award,
  Building,
  ChevronRight,
  GraduationCap,
  Lightbulb
} from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { AppDownload } from "@/components/AppDownload";
import subjectsData from "@/data/subjects.json";

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [loading, setLoading] = useState(true);

  const stats = [
    { icon: <BookOpen className="h-6 w-6" />, value: `${subjectsData.subjects.length}+`, label: "Subjects" },
    { icon: <GraduationCap className="h-6 w-6" />, value: "500+", label: "Study Materials" },
    { icon: <Lightbulb className="h-6 w-6" />, value: "100+", label: "Contributors" },
  ];

  // Get unique departments and semesters for filters
  const departments = [...new Set(subjectsData.subjects.map(s => s.department))];
  const semesters = [...new Set(subjectsData.subjects.map(s => s.semester))].sort((a, b) => a - b);

  useEffect(() => {
    setSubjects(subjectsData.subjects);
    setFilteredSubjects(subjectsData.subjects);
    setLoading(false);
  }, []);

  // Filter subjects based on search query and filters
  useEffect(() => {
    let result = subjects;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        subject =>
          subject.title.toLowerCase().includes(query) ||
          subject.code.toLowerCase().includes(query) ||
          subject.department.toLowerCase().includes(query)
      );
    }

    // Apply semester filter
    if (selectedSemester !== "all") {
      result = result.filter(
        subject => subject.semester === parseInt(selectedSemester)
      );
    }

    // Apply department filter
    if (selectedDepartment !== "all") {
      result = result.filter(
        subject => subject.department === selectedDepartment
      );
    }

    setFilteredSubjects(result);
  }, [searchQuery, selectedSemester, selectedDepartment, subjects]);

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

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md mb-8">
            <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center">
              <Filter size={20} className="text-blue-400 mr-3" />
              <h2 className="text-xl font-semibold text-white">Search & Filters</h2>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search subjects..."
                    className="w-full bg-[#0a1129] border border-[#1e3a8a]/50 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                </div>

                {/* Semester Filter */}
                <div>
                  <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className="w-full bg-[#0a1129] border border-[#1e3a8a]/50 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Semesters</option>
                    {semesters.map((semester) => (
                      <option key={semester} value={semester}>
                        Semester {semester}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Department Filter */}
                <div>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full bg-[#0a1129] border border-[#1e3a8a]/50 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Departments</option>
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Subjects List */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 rounded-full border-4 border-blue-600/30 border-t-blue-600 animate-spin"></div>
            </div>
          ) : (
            <>
              {filteredSubjects.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredSubjects.map((subject) => (
                    <motion.div key={subject.id} variants={item}>
                      <Link href={`/subject/${subject.id}`}>
                        <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md hover:border-blue-500/50 hover:shadow-premium-lg transition-all duration-300 h-full">
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-start">
                                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                                  <BookOpen size={20} className="text-blue-400" />
                                </div>

                                <div>
                                  <div className="text-xs text-blue-400 font-medium mb-1">
                                    {subject.code}
                                  </div>
                                  <h3 className="text-lg font-semibold text-white">
                                    {subject.title}
                                  </h3>
                                </div>
                              </div>

                              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0a1129] group-hover:bg-blue-600 transition-colors">
                                <ChevronRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                              </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                              {subject.description}
                            </p>

                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div className="flex items-center">
                                <Clock size={12} className="text-gray-500 mr-1" />
                                <span className="text-gray-400">Sem {subject.semester}</span>
                              </div>

                              <div className="flex items-center">
                                <Award size={12} className="text-gray-500 mr-1" />
                                <span className="text-gray-400">{subject.credits} Credits</span>
                              </div>

                              <div className="flex items-center">
                                <Building size={12} className="text-gray-500 mr-1" />
                                <span className="text-gray-400 truncate">
                                  {subject.department.split(' ')[0]}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-[#0c1631]/80 border border-[#1e3a8a]/30 rounded-xl">
                  <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center mb-6">
                    <Search size={32} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">No subjects found</h3>
                  <p className="text-gray-400 max-w-md mb-8">
                    No subjects match your search criteria. Try adjusting your filters or search query.
                  </p>

                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedSemester("all");
                      setSelectedDepartment("all");
                    }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* App Download Section */}
      <AppDownload />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
