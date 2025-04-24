"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, BookOpen, Filter, Download, Printer, Share2 } from "lucide-react";
import Link from "next/link";

// Sample exam routine data - in a real app, this would come from an API or database
const examRoutineData = {
  "CSE": {
    "semester1": [
      { subject: "CS24101 - Computer Programming", date: "2024-05-10", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 1" },
      { subject: "MA24101 - Mathematics I", date: "2024-05-12", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 2" },
      { subject: "PH24101 - Physics", date: "2024-05-14", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 1" },
      { subject: "EC24101 - Basic Electronics", date: "2024-05-16", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 3" },
      { subject: "ME24101 - Engineering Mechanics", date: "2024-05-18", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 2" }
    ],
    "semester2": [
      { subject: "CS24201 - Data Structures", date: "2024-05-11", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 1" },
      { subject: "MA24201 - Mathematics II", date: "2024-05-13", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 2" },
      { subject: "EC24201 - Digital Electronics", date: "2024-05-15", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 1" },
      { subject: "CS24202 - Object Oriented Programming", date: "2024-05-17", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 3" },
      { subject: "HU24201 - Technical Communication", date: "2024-05-19", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 2" }
    ],
    "semester3": [
      { subject: "CS24301 - Computer Architecture", date: "2024-05-10", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" },
      { subject: "CS24302 - Operating Systems", date: "2024-05-12", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 5" },
      { subject: "CS24303 - Database Management Systems", date: "2024-05-14", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" },
      { subject: "CS24304 - Design and Analysis of Algorithms", date: "2024-05-16", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 5" },
      { subject: "MA24301 - Probability and Statistics", date: "2024-05-18", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" }
    ],
    "semester4": [
      { subject: "CS24401 - Computer Networks", date: "2024-05-11", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" },
      { subject: "CS24402 - Software Engineering", date: "2024-05-13", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 5" },
      { subject: "CS24403 - Theory of Computation", date: "2024-05-15", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" },
      { subject: "CS24404 - Compiler Design", date: "2024-05-17", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 5" },
      { subject: "CS24405 - Web Technologies", date: "2024-05-19", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" }
    ]
  },
  "ECE": {
    "semester1": [
      { subject: "CS24101 - Computer Programming", date: "2024-05-10", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 1" },
      { subject: "MA24101 - Mathematics I", date: "2024-05-12", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 2" },
      { subject: "PH24101 - Physics", date: "2024-05-14", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 1" },
      { subject: "EC24101 - Basic Electronics", date: "2024-05-16", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 3" },
      { subject: "ME24101 - Engineering Mechanics", date: "2024-05-18", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 2" }
    ],
    "semester2": [
      { subject: "EC24201 - Electronic Devices", date: "2024-05-11", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 1" },
      { subject: "MA24201 - Mathematics II", date: "2024-05-13", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 2" },
      { subject: "EC24202 - Signals and Systems", date: "2024-05-15", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 1" },
      { subject: "EC24203 - Digital Circuits", date: "2024-05-17", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 3" },
      { subject: "HU24201 - Technical Communication", date: "2024-05-19", time: "10:00 AM - 1:00 PM", venue: "Examination Hall 2" }
    ],
    "semester3": [
      { subject: "EC24301 - Analog Circuits", date: "2024-05-10", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" },
      { subject: "EC24302 - Digital Signal Processing", date: "2024-05-12", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 5" },
      { subject: "EC24303 - Electromagnetic Theory", date: "2024-05-14", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" },
      { subject: "EC24304 - Control Systems", date: "2024-05-16", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 5" },
      { subject: "MA24301 - Probability and Statistics", date: "2024-05-18", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" }
    ],
    "semester4": [
      { subject: "EC24401 - Communication Systems", date: "2024-05-11", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" },
      { subject: "EC24402 - Microprocessors", date: "2024-05-13", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 5" },
      { subject: "EC24403 - VLSI Design", date: "2024-05-15", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" },
      { subject: "EC24404 - Antenna and Wave Propagation", date: "2024-05-17", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 5" },
      { subject: "EC24405 - Embedded Systems", date: "2024-05-19", time: "2:00 PM - 5:00 PM", venue: "Examination Hall 4" }
    ]
  }
};

export default function ExamRoutinePage() {
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedSemester, setSelectedSemester] = useState("semester1");
  const [examType, setExamType] = useState("midsem"); // midsem or endsem

  // Get available branches
  const branches = Object.keys(examRoutineData);
  
  // Get available semesters for the selected branch
  const semesters = selectedBranch ? Object.keys(examRoutineData[selectedBranch]) : [];
  
  // Get exam routine for the selected branch and semester
  const examRoutine = selectedBranch && selectedSemester 
    ? examRoutineData[selectedBranch][selectedSemester] 
    : [];

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
              <Calendar size={14} className="mr-2" /> Examination Schedule
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {examType === "midsem" ? "Mid Semester" : "End Semester"} Examination Routine
            </h1>
            
            <p className="text-gray-300 max-w-2xl mb-6">
              View the complete examination schedule for all branches and semesters. Plan your study schedule accordingly to prepare well for your exams.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md mb-8">
        <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center">
          <Filter size={20} className="text-blue-400 mr-3" />
          <h2 className="text-xl font-semibold text-white">Filters</h2>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Exam Type */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Exam Type</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setExamType("midsem")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    examType === "midsem"
                      ? "bg-blue-600 text-white"
                      : "bg-[#0a1129] text-gray-400 hover:bg-blue-600/10 hover:text-white"
                  } transition-colors flex-1`}
                >
                  Mid Semester
                </button>
                <button
                  onClick={() => setExamType("endsem")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    examType === "endsem"
                      ? "bg-blue-600 text-white"
                      : "bg-[#0a1129] text-gray-400 hover:bg-blue-600/10 hover:text-white"
                  } transition-colors flex-1`}
                >
                  End Semester
                </button>
              </div>
            </div>
            
            {/* Branch Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Branch</label>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="w-full bg-[#0a1129] border border-[#1e3a8a]/50 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {branches.map((branch) => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Semester Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full bg-[#0a1129] border border-[#1e3a8a]/50 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {semesters.map((semester) => (
                  <option key={semester} value={semester}>
                    Semester {semester.replace("semester", "")}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Exam Routine Table */}
      <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md mb-8">
        <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center justify-between">
          <div className="flex items-center">
            <Calendar size={20} className="text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-white">Examination Schedule</h2>
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg bg-[#0a1129] text-blue-400 hover:bg-blue-600/10 transition-colors">
              <Download size={18} />
            </button>
            <button className="p-2 rounded-lg bg-[#0a1129] text-blue-400 hover:bg-blue-600/10 transition-colors">
              <Printer size={18} />
            </button>
            <button className="p-2 rounded-lg bg-[#0a1129] text-blue-400 hover:bg-blue-600/10 transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0a1129]">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Venue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e3a8a]/30">
              {examRoutine.length > 0 ? (
                examRoutine.map((exam, index) => (
                  <tr key={index} className="hover:bg-blue-600/10 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      <div className="flex items-center">
                        <BookOpen size={16} className="text-blue-400 mr-2" />
                        {exam.subject}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <div className="flex items-center">
                        <Calendar size={16} className="text-gray-500 mr-2" />
                        {exam.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <div className="flex items-center">
                        <Clock size={16} className="text-gray-500 mr-2" />
                        {exam.time}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{exam.venue}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                    No examination schedule found for the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Important Instructions */}
      <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md">
        <div className="px-6 py-4 border-b border-[#1e3a8a]/30">
          <h2 className="text-xl font-semibold text-white">Important Instructions</h2>
        </div>
        
        <div className="p-6">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
              Students must carry their valid ID cards to the examination hall.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
              Mobile phones and other electronic devices are strictly prohibited in the examination hall.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
              Students should reach the examination venue at least 15 minutes before the scheduled time.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
              No student will be allowed to enter the examination hall after 30 minutes of the commencement of the examination.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
              Students are not allowed to leave the examination hall during the first hour and the last 15 minutes of the examination.
            </li>
          </ul>
          
          <div className="mt-6">
            <Link href="/academic-calendar">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                View Academic Calendar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
