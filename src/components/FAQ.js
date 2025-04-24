"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How to add content?",
    answer: "You can contribute content by joining our WhatsApp group or by submitting materials through our GitHub repository. We welcome study notes, class materials, and other academic resources that can benefit BIT Mesra students."
  },
  {
    question: "Can I contribute to this website (Code)?",
    answer: "Absolutely! BitSyll is an open-source project hosted on GitHub. You can contribute by submitting pull requests, reporting issues, or suggesting improvements. Visit our GitHub repository to get started."
  },
  {
    question: "How do I access study materials offline?",
    answer: "You can download our mobile app for Android and iOS to access all study materials offline. The app is fully tested and regularly updated with the latest content."
  },
  {
    question: "Are the study materials verified?",
    answer: "Yes, all study materials are reviewed by our team and verified by students and faculty members to ensure accuracy and relevance to the current curriculum."
  },
  {
    question: "How often is the content updated?",
    answer: "We update our content regularly, especially before exams and at the beginning of each semester to ensure you have access to the most current materials."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a1129]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
            <HelpCircle size={14} className="mr-2" /> Support
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          
          <p className="text-gray-300 text-center max-w-2xl mb-8">
            Find answers to common questions about BitSyll and how to make the most of our resources
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full p-5 flex justify-between items-center text-left rounded-xl border ${
                  activeIndex === index 
                    ? "bg-blue-600/10 border-blue-500/50" 
                    : "bg-[#0c1631]/80 border-[#1e3a8a]/30 hover:border-blue-500/30"
                } transition-all duration-200`}
              >
                <span className="font-medium text-white">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-400" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-[#0c1631]/50 border border-t-0 border-[#1e3a8a]/30 rounded-b-xl">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
