"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Filter,
  Download,
  ExternalLink,
  BookOpen,
  Clock,
  User,
  ThumbsUp,
  Eye,
  Calendar
} from "lucide-react";
import Link from "next/link";
import subjectsData from "@/data/subjects.json";

// Sample notes data - in a real app, this would come from an API or database
const notesData = [
  {
    id: "note1",
    title: "Complete Computer Programming Notes",
    subject: "CS24101",
    subjectName: "Computer Programming",
    author: "Prof. Rajesh Kumar",
    uploadDate: "2023-08-15",
    fileType: "PDF",
    fileSize: "5.2 MB",
    downloads: 1245,
    views: 3567,
    likes: 423,
    url: "https://example.com/notes/cs24101-complete.pdf",
    description: "Comprehensive notes covering all topics in Computer Programming including algorithms, data types, control structures, functions, arrays, and file handling."
  },
  {
    id: "note2",
    title: "Mathematics I - Calculus and Linear Algebra",
    subject: "MA24101",
    subjectName: "Mathematics I",
    author: "Dr. Priya Sharma",
    uploadDate: "2023-07-20",
    fileType: "PDF",
    fileSize: "4.8 MB",
    downloads: 1876,
    views: 4231,
    likes: 567,
    url: "https://example.com/notes/ma24101-calculus.pdf",
    description: "Complete notes on differential and integral calculus, matrices, determinants, and vector spaces with solved examples."
  },
  {
    id: "note3",
    title: "Basic Electronics - Circuit Analysis",
    subject: "EC24101",
    subjectName: "Basic Electronics",
    author: "Prof. Meena Gupta",
    uploadDate: "2023-09-05",
    fileType: "PDF",
    fileSize: "6.3 MB",
    downloads: 987,
    views: 2345,
    likes: 321,
    url: "https://example.com/notes/ec24101-circuits.pdf",
    description: "Detailed notes on electronic components, circuit analysis, diodes, transistors, and operational amplifiers with practical examples."
  },
  {
    id: "note4",
    title: "Physics - Mechanics and Waves",
    subject: "PH24101",
    subjectName: "Physics",
    author: "Dr. Amit Kumar",
    uploadDate: "2023-08-28",
    fileType: "PDF",
    fileSize: "5.7 MB",
    downloads: 1123,
    views: 2789,
    likes: 389,
    url: "https://example.com/notes/ph24101-mechanics.pdf",
    description: "Comprehensive notes on mechanics, waves, oscillations, and optics with diagrams and solved problems."
  },
  {
    id: "note5",
    title: "Engineering Mechanics - Statics and Dynamics",
    subject: "ME24101",
    subjectName: "Engineering Mechanics",
    author: "Prof. Deepak Sharma",
    uploadDate: "2023-09-12",
    fileType: "PDF",
    fileSize: "7.1 MB",
    downloads: 856,
    views: 1987,
    likes: 276,
    url: "https://example.com/notes/me24101-mechanics.pdf",
    description: "Complete notes on statics, dynamics, equilibrium, friction, and virtual work with engineering applications."
  },
  {
    id: "note6",
    title: "Chemistry - Organic and Inorganic",
    subject: "CH24101",
    subjectName: "Chemistry",
    author: "Dr. Sanjay Mishra",
    uploadDate: "2023-07-30",
    fileType: "PDF",
    fileSize: "4.5 MB",
    downloads: 765,
    views: 1876,
    likes: 234,
    url: "https://example.com/notes/ch24101-chemistry.pdf",
    description: "Comprehensive notes on organic and inorganic chemistry with reaction mechanisms and solved problems."
  },
  {
    id: "note7",
    title: "Data Structures and Algorithms",
    subject: "CS24201",
    subjectName: "Data Structures",
    author: "Prof. Anita Singh",
    uploadDate: "2023-09-18",
    fileType: "PDF",
    fileSize: "6.8 MB",
    downloads: 1432,
    views: 3210,
    likes: 478,
    url: "https://example.com/notes/cs24201-dsa.pdf",
    description: "Detailed notes on arrays, linked lists, stacks, queues, trees, graphs, and algorithms with implementation examples."
  },
  {
    id: "note8",
    title: "Digital Electronics - Logic Design",
    subject: "EC24201",
    subjectName: "Digital Electronics",
    author: "Dr. Ravi Shankar",
    uploadDate: "2023-08-10",
    fileType: "PDF",
    fileSize: "5.9 MB",
    downloads: 1087,
    views: 2543,
    likes: 356,
    url: "https://example.com/notes/ec24201-digital.pdf",
    description: "Comprehensive notes on number systems, Boolean algebra, logic gates, combinational and sequential circuits with design examples."
  }
];

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [loading, setLoading] = useState(true);

  // Get unique subjects for filters
  const subjects = useMemo(() => [...new Set(notesData.map(note => note.subject))], []);

  // Create subject map with memoization
  const subjectMap = useMemo(() => {
    const map = {};
    subjects.forEach(code => {
      const subject = subjectsData.subjects.find(s => s.id === code);
      if (subject) {
        map[code] = {
          name: subject.title,
          semester: subject.semester
        };
      } else {
        map[code] = {
          name: code,
          semester: parseInt(code.charAt(3)) || 1
        };
      }
    });
    return map;
  }, [subjects]);

  // Get unique semesters for filters
  const semesters = useMemo(() =>
    [...new Set(Object.values(subjectMap).map(s => s.semester))].sort((a, b) => a - b),
    [subjectMap]
  );

  useEffect(() => {
    setNotes(notesData);
    setFilteredNotes(notesData);
    setLoading(false);
  }, []);

  // Filter notes based on search query and filters
  useEffect(() => {
    let result = notes;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        note =>
          note.title.toLowerCase().includes(query) ||
          note.subject.toLowerCase().includes(query) ||
          note.subjectName.toLowerCase().includes(query) ||
          note.description.toLowerCase().includes(query)
      );
    }

    // Apply subject filter
    if (selectedSubject !== "all") {
      result = result.filter(
        note => note.subject === selectedSubject
      );
    }

    // Apply semester filter
    if (selectedSemester !== "all") {
      result = result.filter(
        note => {
          const subjectInfo = subjectMap[note.subject];
          return subjectInfo && subjectInfo.semester === parseInt(selectedSemester);
        }
      );
    }

    setFilteredNotes(result);
  }, [searchQuery, selectedSubject, selectedSemester, notes, subjectMap]);

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

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-premium-bg-dark to-premium-bg-card border border-premium-border shadow-premium-lg mb-8">
        {/* Background elements */}
        <div className="absolute inset-0 bg-blue-glow-radial opacity-30"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px]"></div>

        <div className="relative z-10 p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-2">
              <FileText size={14} className="mr-2" /> Study Materials
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lecture Notes
            </h1>

            <p className="text-gray-300 max-w-2xl mb-6">
              Access comprehensive lecture notes for all subjects. Download high-quality study materials prepared by faculty and top students.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
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
                placeholder="Search notes..."
                className="w-full bg-[#0a1129] border border-[#1e3a8a]/50 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            </div>

            {/* Subject Filter */}
            <div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full bg-[#0a1129] border border-[#1e3a8a]/50 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Subjects</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject} - {subjectMap[subject]?.name || subject}
                  </option>
                ))}
              </select>
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
          </div>
        </div>
      </div>

      {/* Notes List */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 rounded-full border-4 border-blue-600/30 border-t-blue-600 animate-spin"></div>
        </div>
      ) : (
        <>
          {filteredNotes.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredNotes.map((note) => (
                <motion.div key={note.id} variants={item}>
                  <a href={note.url} target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md hover:border-blue-500/50 hover:shadow-premium-lg transition-all duration-300 h-full">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                              <FileText size={20} className="text-blue-400" />
                            </div>

                            <div>
                              <div className="text-xs text-blue-400 font-medium mb-1">
                                {note.subject} - {note.subjectName}
                              </div>
                              <h3 className="text-lg font-semibold text-white">
                                {note.title}
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-center text-xs text-gray-400 bg-[#0a1129] px-2 py-1 rounded">
                            <Download size={12} className="mr-1" />
                            {note.fileType}
                          </div>
                        </div>

                        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                          {note.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                          <div className="flex items-center">
                            <User size={12} className="mr-1" />
                            {note.author}
                          </div>
                          <div className="flex items-center">
                            <Clock size={12} className="mr-1" />
                            {formatDate(note.uploadDate)}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <div className="flex space-x-3">
                            <div className="flex items-center text-gray-400">
                              <Download size={12} className="mr-1" />
                              {note.downloads}
                            </div>
                            <div className="flex items-center text-gray-400">
                              <Eye size={12} className="mr-1" />
                              {note.views}
                            </div>
                            <div className="flex items-center text-gray-400">
                              <ThumbsUp size={12} className="mr-1" />
                              {note.likes}
                            </div>
                          </div>

                          <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                            <span className="mr-1">Download</span>
                            <ExternalLink size={12} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-[#0c1631]/80 border border-[#1e3a8a]/30 rounded-xl">
              <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center mb-6">
                <Search size={32} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-3">No notes found</h3>
              <p className="text-gray-400 max-w-md mb-8">
                No notes match your search criteria. Try adjusting your filters or search query.
              </p>

              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSubject("all");
                  setSelectedSemester("all");
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </>
      )}

      {/* Upload Notes Section */}
      <div className="mt-12 bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md">
        <div className="px-6 py-4 border-b border-[#1e3a8a]/30">
          <h2 className="text-xl font-semibold text-white">Contribute Your Notes</h2>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-lg font-medium text-white mb-2">Share Your Knowledge</h3>
              <p className="text-gray-400 max-w-xl">
                Help your fellow students by sharing your lecture notes, study materials, and exam preparations. Your contribution can make a difference in someone&apos;s academic journey.
              </p>
            </div>

            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center">
              <FileText size={18} className="mr-2" />
              Upload Notes
            </button>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/exam-routine">
          <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                <Calendar size={20} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Exam Routine</h3>
            </div>
            <p className="text-gray-400 text-sm">
              View the complete examination schedule for all branches and semesters.
            </p>
          </div>
        </Link>

        <Link href="/academic-calendar">
          <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                <Calendar size={20} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Academic Calendar</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Plan your academic activities with the complete academic calendar.
            </p>
          </div>
        </Link>

        <Link href="/subjects">
          <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                <BookOpen size={20} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-white">All Subjects</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Browse through all subjects and access their detailed syllabus and resources.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
