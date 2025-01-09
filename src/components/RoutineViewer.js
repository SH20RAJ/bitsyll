"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const branches = [
  { value: "cse", label: "Computer Science Engineering (F)" },
  { value: "ce", label: "Chemical Engineering (M,N)" },
  { value: "ece", label: "Electronics & Communication Engineering (A,B)" },
  { value: "eee", label: "Electrical & Electronics Engineering (C,D)" },
  { value: "me", label: "Mechanical Engineering (I,J)" },
  { value: "pie", label: "Production & Industrial Engineering (L,O)" },
  { value: "ai", label: "Artificial Intelligence (G,H)" },
  { value: "other", label: "Physics (K,P)" },
];

export default function RoutineViewer() {
  const [selectedBranch, setSelectedBranch] = useState("");

  useEffect(() => {
    // Load saved branch from localStorage
    const savedBranch = localStorage.getItem("selectedBranch");
    if (savedBranch) {
      setSelectedBranch(savedBranch);
    }
  }, []);

  const handleBranchChange = (value) => {
    setSelectedBranch(value);
    localStorage.setItem("selectedBranch", value);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Routine Viewer</h1>
      
      <div className="mb-6">
        <Select value={selectedBranch} onValueChange={handleBranchChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your branch/section" />
          </SelectTrigger>
          <SelectContent>
            {branches.map((branch) => (
              <SelectItem key={branch.value} value={branch.value}>
                {branch.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedBranch && (
        <Card>
          <CardContent className="p-4">
            <img
              src={`/icons/routine/${selectedBranch}.png`}
              alt={`${selectedBranch} routine`}
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
