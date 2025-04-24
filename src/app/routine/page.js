"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Download,
  ExternalLink,
  Filter,
  FileText,
  Share2,
  Printer,
  BookOpen
} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample routine data - in a real app, this would come from an API or database
const routineData = {
  "CSE": {
    "semester1": {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      timeSlots: ["9:00 - 9:55", "10:00 - 10:55", "11:00 - 11:55", "12:00 - 12:55", "2:00 - 2:55", "3:00 - 3:55", "4:00 - 4:55"],
      schedule: [
        // Monday
        [
          { subject: "CS24101", name: "Computer Programming", type: "Theory", room: "LT-1" },
          { subject: "MA24101", name: "Mathematics I", type: "Theory", room: "LT-2" },
          { subject: "PH24101", name: "Physics", type: "Theory", room: "LT-3" },
          { subject: "", name: "Lunch Break", type: "Break", room: "" },
          { subject: "EC24101", name: "Basic Electronics", type: "Theory", room: "LT-1" },
          { subject: "CS24101", name: "Computer Programming Lab", type: "Lab", room: "CL-1" },
          { subject: "CS24101", name: "Computer Programming Lab", type: "Lab", room: "CL-1" }
        ],
        // Tuesday
        [
          { subject: "MA24101", name: "Mathematics I", type: "Theory", room: "LT-2" },
          { subject: "PH24101", name: "Physics", type: "Theory", room: "LT-3" },
          { subject: "EC24101", name: "Basic Electronics", type: "Theory", room: "LT-1" },
          { subject: "", name: "Lunch Break", type: "Break", room: "" },
          { subject: "ME24101", name: "Engineering Mechanics", type: "Theory", room: "LT-4" },
          { subject: "PH24101", name: "Physics Lab", type: "Lab", room: "PL-1" },
          { subject: "PH24101", name: "Physics Lab", type: "Lab", room: "PL-1" }
        ],
        // Wednesday
        [
          { subject: "EC24101", name: "Basic Electronics", type: "Theory", room: "LT-1" },
          { subject: "CS24101", name: "Computer Programming", type: "Theory", room: "LT-1" },
          { subject: "ME24101", name: "Engineering Mechanics", type: "Theory", room: "LT-4" },
          { subject: "", name: "Lunch Break", type: "Break", room: "" },
          { subject: "MA24101", name: "Mathematics I", type: "Theory", room: "LT-2" },
          { subject: "EC24101", name: "Basic Electronics Lab", type: "Lab", room: "EL-1" },
          { subject: "EC24101", name: "Basic Electronics Lab", type: "Lab", room: "EL-1" }
        ],
        // Thursday
        [
          { subject: "PH24101", name: "Physics", type: "Theory", room: "LT-3" },
          { subject: "ME24101", name: "Engineering Mechanics", type: "Theory", room: "LT-4" },
          { subject: "MA24101", name: "Mathematics I", type: "Theory", room: "LT-2" },
          { subject: "", name: "Lunch Break", type: "Break", room: "" },
          { subject: "CS24101", name: "Computer Programming", type: "Theory", room: "LT-1" },
          { subject: "ME24101", name: "Engineering Drawing", type: "Lab", room: "ED-1" },
          { subject: "ME24101", name: "Engineering Drawing", type: "Lab", room: "ED-1" }
        ],
        // Friday
        [
          { subject: "ME24101", name: "Engineering Mechanics", type: "Theory", room: "LT-4" },
          { subject: "EC24101", name: "Basic Electronics", type: "Theory", room: "LT-1" },
          { subject: "CS24101", name: "Computer Programming", type: "Theory", room: "LT-1" },
          { subject: "", name: "Lunch Break", type: "Break", room: "" },
          { subject: "PH24101", name: "Physics", type: "Theory", room: "LT-3" },
          { subject: "MA24101", name: "Mathematics Tutorial", type: "Tutorial", room: "TR-1" },
          { subject: "", name: "", type: "", room: "" }
        ],
        // Saturday
        [
          { subject: "", name: "", type: "", room: "" },
          { subject: "", name: "", type: "", room: "" },
          { subject: "", name: "", type: "", room: "" },
          { subject: "", name: "Lunch Break", type: "Break", room: "" },
          { subject: "", name: "", type: "", room: "" },
          { subject: "", name: "", type: "", room: "" },
          { subject: "", name: "", type: "", room: "" }
        ]
      ]
    },
    "semester2": {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      timeSlots: ["9:00 - 9:55", "10:00 - 10:55", "11:00 - 11:55", "12:00 - 12:55", "2:00 - 2:55", "3:00 - 3:55", "4:00 - 4:55"],
      schedule: [
        // Sample data for semester 2
        // Monday
        [
          { subject: "CS24201", name: "Data Structures", type: "Theory", room: "LT-1" },
          { subject: "MA24201", name: "Mathematics II", type: "Theory", room: "LT-2" },
          { subject: "EC24201", name: "Digital Electronics", type: "Theory", room: "LT-3" },
          { subject: "", name: "Lunch Break", type: "Break", room: "" },
          { subject: "CS24202", name: "Object Oriented Programming", type: "Theory", room: "LT-1" },
          { subject: "CS24201", name: "Data Structures Lab", type: "Lab", room: "CL-1" },
          { subject: "CS24201", name: "Data Structures Lab", type: "Lab", room: "CL-1" }
        ],
        // Other days would follow similar pattern
        // ...
      ]
    }
  },
  "ECE": {
    "semester1": {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      timeSlots: ["9:00 - 9:55", "10:00 - 10:55", "11:00 - 11:55", "12:00 - 12:55", "2:00 - 2:55", "3:00 - 3:55", "4:00 - 4:55"],
      schedule: [
        // Sample data for ECE semester 1
        // Monday
        [
          { subject: "EC24101", name: "Basic Electronics", type: "Theory", room: "LT-1" },
          { subject: "MA24101", name: "Mathematics I", type: "Theory", room: "LT-2" },
          { subject: "PH24101", name: "Physics", type: "Theory", room: "LT-3" },
          { subject: "", name: "Lunch Break", type: "Break", room: "" },
          { subject: "CS24101", name: "Computer Programming", type: "Theory", room: "LT-1" },
          { subject: "EC24101", name: "Basic Electronics Lab", type: "Lab", room: "EL-1" },
          { subject: "EC24101", name: "Basic Electronics Lab", type: "Lab", room: "EL-1" }
        ],
        // Other days would follow similar pattern
        // ...
      ]
    }
  }
};

export default function RoutinePage() {
  const [selectedBranch, setSelectedBranch] = useState("CSE");
  const [selectedSemester, setSelectedSemester] = useState("semester1");
  const [viewMode, setViewMode] = useState("pdf"); // interactive or pdf

  // Get available branches
  const branches = Object.keys(routineData);

  // Get available semesters for the selected branch
  const semesters = selectedBranch ? Object.keys(routineData[selectedBranch]) : [];

  // Get routine data for the selected branch and semester
  const routine = selectedBranch && selectedSemester
    ? routineData[selectedBranch][selectedSemester]
    : null;

  // Get cell color based on subject type
  const getCellColor = (type) => {
    switch (type) {
      case "Theory":
        return "bg-blue-600/20 border-blue-500/30 text-blue-400";
      case "Lab":
        return "bg-purple-600/20 border-purple-500/30 text-purple-400";
      case "Tutorial":
        return "bg-green-600/20 border-green-500/30 text-green-400";
      case "Break":
        return "bg-amber-600/20 border-amber-500/30 text-amber-400";
      default:
        return "bg-gray-600/10 border-gray-500/20 text-gray-400";
    }
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
              <Calendar size={14} className="mr-2" /> Class Schedule
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Class Routine
            </h1>

            <p className="text-gray-300 max-w-2xl mb-6">
              View your class schedule for the current semester. Plan your day efficiently with our interactive routine viewer.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md mb-8">
        <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center justify-between">
          <div className="flex items-center">
            <Filter size={20} className="text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-white">Filters</h2>
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

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* View Mode */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">View Mode</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode("interactive")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    viewMode === "interactive"
                      ? "bg-blue-600 text-white"
                      : "bg-[#0a1129] text-gray-400 hover:bg-blue-600/10 hover:text-white"
                  } transition-colors flex-1`}
                >
                  Interactive
                </button>
                <button
                  onClick={() => setViewMode("pdf")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    viewMode === "pdf"
                      ? "bg-blue-600 text-white"
                      : "bg-[#0a1129] text-gray-400 hover:bg-blue-600/10 hover:text-white"
                  } transition-colors flex-1`}
                >
                  PDF View
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

      {/* Routine Content */}
      <Tabs value={viewMode} onValueChange={setViewMode} className="w-full">
        <TabsContent value="interactive" className="mt-0">
          {routine ? (
            <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md">
              <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center">
                <Calendar size={20} className="text-blue-400 mr-3" />
                <h2 className="text-xl font-semibold text-white">
                  {selectedBranch} - Semester {selectedSemester.replace("semester", "")} Routine
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0a1129]">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-24">
                        Day / Time
                      </th>
                      {routine.timeSlots.map((slot, index) => (
                        <th key={index} className="px-4 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                          <div className="flex flex-col items-center">
                            <Clock size={14} className="mb-1" />
                            <span>{slot}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e3a8a]/30">
                    {routine.days.map((day, dayIndex) => (
                      <tr key={dayIndex} className="hover:bg-blue-600/5 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white bg-[#0a1129]">
                          {day}
                        </td>
                        {routine.schedule[dayIndex].map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-2 py-2">
                            {cell.name ? (
                              <div className={`p-2 rounded-lg border ${getCellColor(cell.type)} text-center h-full flex flex-col justify-between`}>
                                <div className="text-xs font-medium mb-1">{cell.subject}</div>
                                <div className="text-sm">{cell.name}</div>
                                {cell.room && (
                                  <div className="text-xs mt-1 opacity-80">{cell.room}</div>
                                )}
                              </div>
                            ) : (
                              <div className="p-2 rounded-lg border border-[#1e3a8a]/10 text-center h-full text-gray-500 text-sm">
                                -
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Legend */}
              <div className="p-4 border-t border-[#1e3a8a]/30">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-blue-600/40 mr-2`}></div>
                    <span className="text-sm text-gray-300">Theory</span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-purple-600/40 mr-2`}></div>
                    <span className="text-sm text-gray-300">Lab</span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-green-600/40 mr-2`}></div>
                    <span className="text-sm text-gray-300">Tutorial</span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-amber-600/40 mr-2`}></div>
                    <span className="text-sm text-gray-300">Break</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-[#0c1631]/80 border border-[#1e3a8a]/30 rounded-xl">
              <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center mb-6">
                <Calendar size={32} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-3">No routine found</h3>
              <p className="text-gray-400 max-w-md mb-8">
                No routine data is available for the selected branch and semester.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="pdf" className="mt-0">
          <Card className="overflow-hidden bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl shadow-premium-md">
            <CardContent className="p-0">
              <iframe
                src="https://drive.google.com/file/d/1c_8zEnw6alUJRUGS8BGOQMviVHmRGKY6/preview"
                className="w-full h-[70vh]"
                allow="autoplay"
              ></iframe>
            </CardContent>
            <CardFooter className="bg-[#0a1129] justify-end space-x-2 p-4 border-t border-[#1e3a8a]/30">
              <Button variant="outline" className="bg-[#0c1631] border-[#1e3a8a]/50 text-white hover:bg-blue-600/10 hover:text-white" asChild>
                <a
                  href="https://drive.google.com/file/d/1c_8zEnw6alUJRUGS8BGOQMviVHmRGKY6/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Open in Drive
                </a>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="https://drive.google.com/uc?export=download&id=1c_8zEnw6alUJRUGS8BGOQMviVHmRGKY6">
                  <Download size={16} className="mr-2" />
                  Download PDF
                </a>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

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

        <Link href="/notes">
          <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3">
                <FileText size={20} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-white">Study Notes</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Access comprehensive lecture notes and study materials for all subjects.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
