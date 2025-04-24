"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Download, Printer, Share2, Filter, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

// Sample academic calendar data - in a real app, this would come from an API or database
const academicCalendarData = {
  "2023-2024": [
    {
      month: "July 2023",
      events: [
        { date: "July 1, 2023", event: "Academic Year Begins", type: "academic" },
        { date: "July 3-7, 2023", event: "Registration for Odd Semester", type: "registration" },
        { date: "July 10, 2023", event: "Classes Begin for Odd Semester", type: "academic" },
        { date: "July 26, 2023", event: "Orientation Program for New Students", type: "event" }
      ]
    },
    {
      month: "August 2023",
      events: [
        { date: "August 15, 2023", event: "Independence Day (Holiday)", type: "holiday" },
        { date: "August 20, 2023", event: "Last Date for Course Add/Drop", type: "academic" },
        { date: "August 25-27, 2023", event: "Technical Fest", type: "event" }
      ]
    },
    {
      month: "September 2023",
      events: [
        { date: "September 5, 2023", event: "Teachers' Day Celebration", type: "event" },
        { date: "September 15, 2023", event: "Mid-Semester Examination Begins", type: "exam" },
        { date: "September 25, 2023", event: "Mid-Semester Examination Ends", type: "exam" },
        { date: "September 28, 2023", event: "Mid-Semester Break Begins", type: "break" }
      ]
    },
    {
      month: "October 2023",
      events: [
        { date: "October 2, 2023", event: "Gandhi Jayanti (Holiday)", type: "holiday" },
        { date: "October 3, 2023", event: "Classes Resume after Mid-Semester Break", type: "academic" },
        { date: "October 15, 2023", event: "Last Date for Course Withdrawal", type: "academic" },
        { date: "October 24, 2023", event: "Diwali (Holiday)", type: "holiday" }
      ]
    },
    {
      month: "November 2023",
      events: [
        { date: "November 10, 2023", event: "Last Day of Classes for Odd Semester", type: "academic" },
        { date: "November 15, 2023", event: "End-Semester Examination Begins", type: "exam" },
        { date: "November 30, 2023", event: "End-Semester Examination Ends", type: "exam" }
      ]
    },
    {
      month: "December 2023",
      events: [
        { date: "December 1-31, 2023", event: "Winter Vacation", type: "break" },
        { date: "December 25, 2023", event: "Christmas (Holiday)", type: "holiday" }
      ]
    },
    {
      month: "January 2024",
      events: [
        { date: "January 1, 2024", event: "New Year's Day (Holiday)", type: "holiday" },
        { date: "January 3-7, 2024", event: "Registration for Even Semester", type: "registration" },
        { date: "January 10, 2024", event: "Classes Begin for Even Semester", type: "academic" },
        { date: "January 26, 2024", event: "Republic Day (Holiday)", type: "holiday" }
      ]
    },
    {
      month: "February 2024",
      events: [
        { date: "February 15, 2024", event: "Last Date for Course Add/Drop", type: "academic" },
        { date: "February 20-22, 2024", event: "Cultural Fest", type: "event" }
      ]
    },
    {
      month: "March 2024",
      events: [
        { date: "March 8, 2024", event: "Mid-Semester Examination Begins", type: "exam" },
        { date: "March 18, 2024", event: "Mid-Semester Examination Ends", type: "exam" },
        { date: "March 20, 2024", event: "Mid-Semester Break Begins", type: "break" },
        { date: "March 25, 2024", event: "Holi (Holiday)", type: "holiday" },
        { date: "March 28, 2024", event: "Classes Resume after Mid-Semester Break", type: "academic" }
      ]
    },
    {
      month: "April 2024",
      events: [
        { date: "April 10, 2024", event: "Last Date for Course Withdrawal", type: "academic" },
        { date: "April 15, 2024", event: "Sports Day", type: "event" }
      ]
    },
    {
      month: "May 2024",
      events: [
        { date: "May 5, 2024", event: "Last Day of Classes for Even Semester", type: "academic" },
        { date: "May 10, 2024", event: "End-Semester Examination Begins", type: "exam" },
        { date: "May 25, 2024", event: "End-Semester Examination Ends", type: "exam" },
        { date: "May 30, 2024", event: "Summer Vacation Begins", type: "break" }
      ]
    },
    {
      month: "June 2024",
      events: [
        { date: "June 1-30, 2024", event: "Summer Vacation", type: "break" },
        { date: "June 10-30, 2024", event: "Summer Internship Program", type: "academic" }
      ]
    }
  ],
  "2022-2023": [
    {
      month: "July 2022",
      events: [
        { date: "July 1, 2022", event: "Academic Year Begins", type: "academic" },
        { date: "July 4-8, 2022", event: "Registration for Odd Semester", type: "registration" },
        { date: "July 11, 2022", event: "Classes Begin for Odd Semester", type: "academic" },
        { date: "July 25, 2022", event: "Orientation Program for New Students", type: "event" }
      ]
    },
    // More months would be added here...
  ]
};

export default function AcademicCalendarPage() {
  const [selectedYear, setSelectedYear] = useState("2023-2024");
  const [expandedMonths, setExpandedMonths] = useState({});
  const [filterType, setFilterType] = useState("all");

  // Get available academic years
  const academicYears = Object.keys(academicCalendarData);
  
  // Get calendar data for the selected year
  const calendarData = selectedYear ? academicCalendarData[selectedYear] : [];

  // Toggle month expansion
  const toggleMonth = (month) => {
    setExpandedMonths(prev => ({
      ...prev,
      [month]: !prev[month]
    }));
  };

  // Filter events by type
  const getFilteredEvents = (events) => {
    if (filterType === "all") return events;
    return events.filter(event => event.type === filterType);
  };

  // Get event type color
  const getEventTypeColor = (type) => {
    switch (type) {
      case "academic":
        return "bg-blue-600/20 border-blue-500/30 text-blue-400";
      case "exam":
        return "bg-purple-600/20 border-purple-500/30 text-purple-400";
      case "holiday":
        return "bg-red-600/20 border-red-500/30 text-red-400";
      case "event":
        return "bg-green-600/20 border-green-500/30 text-green-400";
      case "break":
        return "bg-amber-600/20 border-amber-500/30 text-amber-400";
      case "registration":
        return "bg-teal-600/20 border-teal-500/30 text-teal-400";
      default:
        return "bg-gray-600/20 border-gray-500/30 text-gray-400";
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
              <Calendar size={14} className="mr-2" /> Academic Schedule
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Academic Calendar
            </h1>
            
            <p className="text-gray-300 max-w-2xl mb-6">
              View the complete academic calendar for the year. Plan your academic activities, exams, and holidays in advance.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Academic Year Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Academic Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-[#0a1129] border border-[#1e3a8a]/50 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {academicYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Event Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Event Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-[#0a1129] border border-[#1e3a8a]/50 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Events</option>
                <option value="academic">Academic</option>
                <option value="exam">Examinations</option>
                <option value="holiday">Holidays</option>
                <option value="event">Events</option>
                <option value="break">Breaks</option>
                <option value="registration">Registration</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Calendar */}
      <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md mb-8">
        <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center">
          <Calendar size={20} className="text-blue-400 mr-3" />
          <h2 className="text-xl font-semibold text-white">Academic Calendar {selectedYear}</h2>
        </div>
        
        <div className="divide-y divide-[#1e3a8a]/30">
          {calendarData.map((monthData, index) => {
            const filteredEvents = getFilteredEvents(monthData.events);
            if (filteredEvents.length === 0) return null;
            
            const isExpanded = expandedMonths[monthData.month] !== false; // Default to expanded
            
            return (
              <div key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleMonth(monthData.month)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-600/10 transition-colors"
                >
                  <h3 className="text-white font-medium text-left">{monthData.month}</h3>
                  {isExpanded ? (
                    <ChevronUp size={20} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Event</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1e3a8a]/20">
                        {filteredEvents.map((event, eventIndex) => (
                          <tr key={eventIndex} className="hover:bg-blue-600/5 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                              <div className="flex items-center">
                                <Calendar size={14} className="text-gray-500 mr-2" />
                                {event.date}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-white">{event.event}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm">
                              <span className={`px-2 py-1 rounded-md text-xs font-medium ${getEventTypeColor(event.type)}`}>
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                )}
              </div>
            );
          })}
          
          {calendarData.filter(monthData => getFilteredEvents(monthData.events).length > 0).length === 0 && (
            <div className="px-6 py-12 text-center text-gray-400">
              No events found for the selected filters.
            </div>
          )}
        </div>
      </div>
      
      {/* Legend */}
      <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md">
        <div className="px-6 py-4 border-b border-[#1e3a8a]/30">
          <h2 className="text-xl font-semibold text-white">Event Types</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full ${getEventTypeColor("academic").split(" ")[0]} mr-2`}></span>
              <span className="text-sm text-gray-300">Academic</span>
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full ${getEventTypeColor("exam").split(" ")[0]} mr-2`}></span>
              <span className="text-sm text-gray-300">Examinations</span>
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full ${getEventTypeColor("holiday").split(" ")[0]} mr-2`}></span>
              <span className="text-sm text-gray-300">Holidays</span>
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full ${getEventTypeColor("event").split(" ")[0]} mr-2`}></span>
              <span className="text-sm text-gray-300">Events</span>
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full ${getEventTypeColor("break").split(" ")[0]} mr-2`}></span>
              <span className="text-sm text-gray-300">Breaks</span>
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full ${getEventTypeColor("registration").split(" ")[0]} mr-2`}></span>
              <span className="text-sm text-gray-300">Registration</span>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <Link href="/exam-routine">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                View Exam Routine
              </button>
            </Link>
            <Link href="/routine">
              <button className="px-4 py-2 bg-[#0a1129] hover:bg-blue-600/10 text-white rounded-lg transition-colors border border-[#1e3a8a]/50">
                View Class Routine
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
