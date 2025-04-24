"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, FileText, BookOpen, Calendar, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/providers/SearchProvider";

// Mock data for search results - in a real app, this would come from an API or database
const searchData = {
  subjects: [
    { id: "CS24101", title: "Computer Programming", path: "/subject/CS24101" },
    { id: "EC24101", title: "Basic Electronics", path: "/subject/EC24101" },
    { id: "EC24102", title: "Digital Electronics", path: "/subject/EC24102" },
    { id: "EE24101", title: "Basic Electrical Engineering", path: "/subject/EE24101" },
    { id: "ME24102", title: "Engineering Graphics & Design", path: "/subject/ME24102" },
  ],
  notes: [
    { id: "note1", title: "Computer Programming Notes", path: "/notes/computer-programming" },
    { id: "note2", title: "Basic Electronics Notes", path: "/notes/basic-electronics" },
    { id: "note3", title: "Digital Electronics Notes", path: "/notes/digital-electronics" },
  ],
  routines: [
    { id: "cse", title: "CSE Routine", path: "/routine?branch=cse" },
    { id: "ece", title: "ECE Routine", path: "/routine?branch=ece" },
    { id: "eee", title: "EEE Routine", path: "/routine?branch=eee" },
  ],
  contacts: [
    { id: "contact1", title: "Faculty Contacts", path: "/contacts#faculty" },
    { id: "contact2", title: "Student Representatives", path: "/contacts#representatives" },
  ]
};

export default function GlobalSearch({ className = "" }) {
  const { isSearchOpen, openSearch, closeSearch, searchQuery, setSearchQuery } = useSearch();
  const [searchResults, setSearchResults] = useState({
    subjects: [],
    notes: [],
    routines: [],
    contacts: []
  });
  const [activeCategory, setActiveCategory] = useState("all");
  const [totalResults, setTotalResults] = useState(0);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  // Close search when clicking outside and handle keyboard shortcuts
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    const handleKeyDown = (event) => {
      // Open search with Ctrl+K or Cmd+K
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        openSearch();
      }

      // Close search with Escape
      if (event.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchOpen, openSearch, closeSearch]);

  // Focus input when search is opened
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle search query changes
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults({
        subjects: [],
        notes: [],
        routines: [],
        contacts: []
      });
      setTotalResults(0);
      return;
    }

    const query = searchQuery.toLowerCase();

    // Filter results based on search query
    const filteredResults = {
      subjects: searchData.subjects.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query)
      ),
      notes: searchData.notes.filter(item =>
        item.title.toLowerCase().includes(query)
      ),
      routines: searchData.routines.filter(item =>
        item.title.toLowerCase().includes(query)
      ),
      contacts: searchData.contacts.filter(item =>
        item.title.toLowerCase().includes(query)
      )
    };

    setSearchResults(filteredResults);

    // Calculate total results
    const total = Object.values(filteredResults).reduce(
      (acc, curr) => acc + curr.length,
      0
    );
    setTotalResults(total);
  }, [searchQuery]);

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.length >= 2) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      closeSearch();
    }
  };

  // Filter results based on active category
  const getFilteredResults = () => {
    if (activeCategory === "all") {
      return searchResults;
    }

    return {
      subjects: activeCategory === "subjects" ? searchResults.subjects : [],
      notes: activeCategory === "notes" ? searchResults.notes : [],
      routines: activeCategory === "routines" ? searchResults.routines : [],
      contacts: activeCategory === "contacts" ? searchResults.contacts : []
    };
  };

  const filteredResults = getFilteredResults();
  const hasResults = totalResults > 0;

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "subjects":
        return <BookOpen size={16} />;
      case "notes":
        return <FileText size={16} />;
      case "routines":
        return <Calendar size={16} />;
      case "contacts":
        return <User size={16} />;
      default:
        return <Search size={16} />;
    }
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      {/* Search trigger button */}
      <button
        onClick={openSearch}
        className="relative hidden md:flex items-center justify-between bg-[#0c1631] text-sm border border-[#1e3a8a]/50 rounded-lg py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-400 hover:border-blue-500/50 transition-colors shadow-premium-sm"
      >
        <Search size={16} className="absolute left-3 text-blue-400" />
        <span>Search...</span>
        <kbd className="ml-2 px-1.5 py-0.5 text-xs bg-[#0a1129] rounded border border-[#1e3a8a]/50 text-gray-500">⌘K</kbd>
      </button>

      {/* Mobile search button */}
      <button
        onClick={openSearch}
        className="md:hidden p-2 rounded-lg bg-[#0c1631] border border-[#1e3a8a]/50 text-blue-400 hover:bg-[#0c1631]/80 transition-colors shadow-premium-sm"
      >
        <Search size={20} />
      </button>

      {/* Search modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={closeSearch}
            />

            {/* Search panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 right-0 mt-16 mx-auto w-full max-w-3xl bg-[#0c1631] border border-[#1e3a8a]/50 rounded-xl shadow-premium-xl overflow-hidden z-50"
            >
              <div className="p-4 border-b border-[#1e3a8a]/30">
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for subjects, notes, routines..."
                    className="w-full bg-[#0a1129] border border-[#1e3a8a]/50 rounded-lg py-3 pl-12 pr-12 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      <X size={18} />
                    </button>
                  )}
                </form>
              </div>

              {searchQuery.length >= 2 && (
                <div className="max-h-[60vh] overflow-y-auto">
                  {/* Category tabs */}
                  <div className="flex overflow-x-auto py-2 px-4 bg-[#0a1129] border-b border-[#1e3a8a]/30">
                    {["all", "subjects", "notes", "routines", "contacts"].map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`flex-shrink-0 px-4 py-2 mx-1 rounded-lg text-sm font-medium capitalize ${
                          activeCategory === category
                            ? "bg-blue-600 text-white"
                            : "bg-[#0c1631] text-gray-400 hover:bg-blue-600/10 hover:text-white"
                        } transition-colors`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="p-2">
                    {hasResults ? (
                      <>
                        {Object.entries(filteredResults).map(([category, items]) => {
                          if (items.length === 0) return null;

                          return (
                            <div key={category} className="mb-4">
                              <div className="px-3 py-2">
                                <h3 className="text-xs uppercase text-gray-500 font-medium tracking-wider flex items-center">
                                  {getCategoryIcon(category)}
                                  <span className="ml-2">{category}</span>
                                </h3>
                              </div>

                              <div className="space-y-1">
                                {items.map((item) => (
                                  <Link
                                    key={item.id}
                                    href={item.path}
                                    onClick={closeSearch}
                                  >
                                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-600/10 text-gray-300 hover:text-white transition-colors">
                                      <span>{item.title}</span>
                                      <ArrowRight size={14} className="text-gray-500" />
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}

                        <div className="px-4 py-3 border-t border-[#1e3a8a]/30 flex justify-between items-center">
                          <span className="text-sm text-gray-400">
                            {totalResults} result{totalResults !== 1 ? 's' : ''}
                          </span>
                          <Link
                            href={`/search?q=${encodeURIComponent(searchQuery)}`}
                            onClick={closeSearch}
                            className="flex items-center text-sm text-blue-400 hover:text-blue-300"
                          >
                            <span>View all results</span>
                            <ArrowRight size={14} className="ml-1" />
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                        <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                          <Search size={24} className="text-blue-400" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
                        <p className="text-gray-400 max-w-md">
                          {searchQuery.length < 2
                            ? "Type at least 2 characters to search"
                            : "Try different keywords or check the spelling"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Quick links when no search query */}
              {searchQuery.length < 2 && (
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="text-xs uppercase text-gray-500 font-medium tracking-wider mb-2">
                      Quick Links
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href="/routine"
                        onClick={closeSearch}
                        className="flex items-center p-3 rounded-lg bg-[#0a1129] hover:bg-blue-600/10 text-gray-300 hover:text-white transition-colors"
                      >
                        <Calendar size={16} className="mr-2 text-blue-400" />
                        <span>Class Routine</span>
                      </Link>
                      <Link
                        href="/notes"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center p-3 rounded-lg bg-[#0a1129] hover:bg-blue-600/10 text-gray-300 hover:text-white transition-colors"
                      >
                        <FileText size={16} className="mr-2 text-blue-400" />
                        <span>Study Notes</span>
                      </Link>
                      <Link
                        href="/subjects"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center p-3 rounded-lg bg-[#0a1129] hover:bg-blue-600/10 text-gray-300 hover:text-white transition-colors"
                      >
                        <BookOpen size={16} className="mr-2 text-blue-400" />
                        <span>All Subjects</span>
                      </Link>
                      <Link
                        href="/contacts"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center p-3 rounded-lg bg-[#0a1129] hover:bg-blue-600/10 text-gray-300 hover:text-white transition-colors"
                      >
                        <User size={16} className="mr-2 text-blue-400" />
                        <span>Contacts</span>
                      </Link>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 mt-4">
                    Press <kbd className="px-2 py-1 bg-[#0a1129] rounded border border-[#1e3a8a]/50 text-gray-400 mx-1">ESC</kbd> to close
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
