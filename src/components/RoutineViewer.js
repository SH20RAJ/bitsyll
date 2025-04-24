"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Calendar, Download, FileText, Clock, School, BookOpen } from "lucide-react";

const branches = [
  { value: "cse", label: "Computer Science Engineering (E,F)", icon: <BookOpen size={16} /> },
  { value: "ce", label: "Chemical Engineering (M,N)", icon: <BookOpen size={16} /> },
  { value: "ece", label: "Electronics & Communication Engineering (A,B)", icon: <BookOpen size={16} /> },
  { value: "eee", label: "Electrical & Electronics Engineering (C,D)", icon: <BookOpen size={16} /> },
  { value: "me", label: "Mechanical Engineering (I,J)", icon: <BookOpen size={16} /> },
  { value: "pie", label: "Production & Industrial Engineering (L,O)", icon: <BookOpen size={16} /> },
  { value: "ai", label: "Artificial Intelligence (G,H)", icon: <BookOpen size={16} /> },
  { value: "other", label: "Physics (K,P)", icon: <BookOpen size={16} /> },
];

export default function RoutineViewer() {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load saved branch from localStorage
    const savedBranch = localStorage.getItem("selectedBranch");
    if (savedBranch) {
      setSelectedBranch(savedBranch);
    }
  }, []);

  const handleBranchChange = (value) => {
    setIsLoading(true);
    setSelectedBranch(value);
    localStorage.setItem("selectedBranch", value);

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  // Get current day and highlight it
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  const currentDay = today === 0 ? "Sunday" : days[today - 1];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-premium-bg-dark to-premium-bg-card border border-premium-border shadow-premium-lg">
      {/* Background elements */}
      <div className="absolute inset-0 bg-blue-glow-radial opacity-30"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px]"></div>

      <div className="relative z-10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-2">
              <Calendar size={14} className="mr-2" /> Class Schedule
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Your Class Routine
            </h1>
          </div>

          <Link
            href={"https://drive.google.com/file/d/1H24ZcZNAe6qobnF1uiIIyoEdRPWzbsK3/view?usp=sharing"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-premium-md hover:shadow-premium-lg transition-all duration-300 hover:translate-y-[-2px]">
              <FileText size={16} className="mr-2" />
              Latest Syllabus
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Select Your Branch & Section
          </label>
          <Select value={selectedBranch} onValueChange={handleBranchChange}>
            <SelectTrigger className="w-full bg-premium-bg-dark border-premium-border focus:ring-blue-500 focus:border-blue-500 h-12 rounded-xl">
              <SelectValue placeholder="Choose your branch/section" />
            </SelectTrigger>
            <SelectContent className="bg-premium-bg-card border-premium-border">
              {branches.map((branch) => (
                <SelectItem
                  key={branch.value}
                  value={branch.value}
                  className="focus:bg-blue-600/20 focus:text-white"
                >
                  <div className="flex items-center">
                    <span className="mr-2 text-blue-400">{branch.icon}</span>
                    {branch.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedBranch ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden border-premium-border bg-premium-bg-dark shadow-premium-lg">
              <CardContent className="p-0">
                {isLoading ? (
                  <div className="flex items-center justify-center h-[400px]">
                    <div className="w-12 h-12 rounded-full border-4 border-blue-600/30 border-t-blue-600 animate-spin"></div>
                  </div>
                ) : (
                  <div>
                    {/* Day indicator */}
                    <div className="flex overflow-x-auto py-3 px-4 bg-premium-bg-card border-b border-premium-border">
                      {days.map((day) => (
                        <div
                          key={day}
                          className={`flex-shrink-0 px-4 py-2 mx-1 rounded-lg text-sm font-medium ${
                            day === currentDay
                              ? "bg-blue-600 text-white"
                              : "bg-premium-bg-dark text-gray-400 hover:bg-blue-600/10 hover:text-white"
                          } transition-colors cursor-pointer`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Routine image */}
                    <div className="relative">
                      <img
                        src={`/icons/routine/${selectedBranch}.png`}
                        alt={`${selectedBranch} routine`}
                        className="w-full h-auto"
                      />

                      {/* Download button */}
                      <div className="absolute bottom-4 right-4">
                        <Button
                          size="sm"
                          className="bg-premium-bg-dark/80 backdrop-blur-sm border border-premium-border hover:bg-blue-600 transition-colors"
                        >
                          <Download size={14} className="mr-2" />
                          Save Image
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Additional info */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-4 rounded-xl bg-premium-bg-dark border border-premium-border">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-4">
                  <Clock size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-300">Class Duration</h3>
                  <p className="text-white font-medium">50 Minutes per Period</p>
                </div>
              </div>

              <div className="flex items-center p-4 rounded-xl bg-premium-bg-dark border border-premium-border">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mr-4">
                  <School size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-300">Academic Year</h3>
                  <p className="text-white font-medium">2023-2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
              <Calendar size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No Routine Selected</h3>
            <p className="text-gray-400 max-w-md">
              Please select your branch and section from the dropdown above to view your class routine.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
