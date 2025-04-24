"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

export default function SubjectSyllabus({ syllabus }) {
  const [expandedUnit, setExpandedUnit] = useState(null);

  const toggleUnit = (index) => {
    if (expandedUnit === index) {
      setExpandedUnit(null);
    } else {
      setExpandedUnit(index);
    }
  };

  return (
    <div className="bg-[#0c1631]/90 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md mb-8">
      <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center">
        <BookOpen size={20} className="text-blue-400 mr-3" />
        <h2 className="text-xl font-semibold text-white">Syllabus</h2>
      </div>

      <div className="divide-y divide-[#1e3a8a]/30">
        {syllabus.map((unit, index) => (
          <div key={index} className="overflow-hidden">
            <button
              onClick={() => toggleUnit(index)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-600/10 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center mr-3 text-sm font-medium text-blue-400">
                  {index + 1}
                </div>
                <h3 className="text-white font-medium text-left">{unit.unit}</h3>
              </div>

              {expandedUnit === index ? (
                <ChevronUp size={20} className="text-gray-400" />
              ) : (
                <ChevronDown size={20} className="text-gray-400" />
              )}
            </button>

            {expandedUnit === index && (
              <div className="px-6 pb-4">
                <ul className="ml-11 space-y-2 text-gray-300">
                  {unit.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
