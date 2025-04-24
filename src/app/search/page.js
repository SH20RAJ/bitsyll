"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, BookOpen, FileText, Calendar, User, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Mock data for search results - in a real app, this would come from an API or database
const searchData = {
  subjects: [
    { id: "CS24101", title: "Computer Programming", path: "/subject/CS24101", description: "Introduction to programming concepts and C language" },
    { id: "EC24101", title: "Basic Electronics", path: "/subject/EC24101", description: "Fundamentals of electronic circuits and components" },
    { id: "EC24102", title: "Digital Electronics", path: "/subject/EC24102", description: "Digital circuits, logic gates, and boolean algebra" },
    { id: "EE24101", title: "Basic Electrical Engineering", path: "/subject/EE24101", description: "Principles of electrical engineering and circuit analysis" },
    { id: "ME24102", title: "Engineering Graphics & Design", path: "/subject/ME24102", description: "Technical drawing and design principles for engineering" },
    { id: "MA24101", title: "Mathematics I", path: "/subject/MA24101", description: "Calculus, differential equations, and linear algebra" },
    { id: "PH24101", title: "Physics", path: "/subject/PH24101", description: "Mechanics, waves, optics, and modern physics" },
    { id: "CH24101", title: "Chemistry", path: "/subject/CH24101", description: "General chemistry principles and applications" },
  ],
  notes: [
    { id: "note1", title: "Computer Programming Notes", path: "/notes/computer-programming", description: "Comprehensive notes on C programming with examples" },
    { id: "note2", title: "Basic Electronics Notes", path: "/notes/basic-electronics", description: "Circuit analysis and electronic component notes" },
    { id: "note3", title: "Digital Electronics Notes", path: "/notes/digital-electronics", description: "Notes on combinational and sequential circuits" },
    { id: "note4", title: "Mathematics I Notes", path: "/notes/mathematics-1", description: "Calculus and differential equations with solved problems" },
    { id: "note5", title: "Physics Notes", path: "/notes/physics", description: "Mechanics and optics with diagrams and examples" },
    { id: "note6", title: "Chemistry Notes", path: "/notes/chemistry", description: "Organic and inorganic chemistry notes with reactions" },
  ],
  routines: [
    { id: "cse", title: "CSE Routine", path: "/routine?branch=cse", description: "Class schedule for Computer Science Engineering" },
    { id: "ece", title: "ECE Routine", path: "/routine?branch=ece", description: "Class schedule for Electronics & Communication Engineering" },
    { id: "eee", title: "EEE Routine", path: "/routine?branch=eee", description: "Class schedule for Electrical & Electronics Engineering" },
    { id: "me", title: "ME Routine", path: "/routine?branch=me", description: "Class schedule for Mechanical Engineering" },
    { id: "ce", title: "CE Routine", path: "/routine?branch=ce", description: "Class schedule for Chemical Engineering" },
    { id: "pie", title: "PIE Routine", path: "/routine?branch=pie", description: "Class schedule for Production & Industrial Engineering" },
  ],
  contacts: [
    { id: "contact1", title: "Faculty Contacts", path: "/contacts#faculty", description: "Contact information for all faculty members" },
    { id: "contact2", title: "Student Representatives", path: "/contacts#representatives", description: "Contact details for class representatives" },
    { id: "contact3", title: "Department Offices", path: "/contacts#departments", description: "Contact information for department offices" },
    { id: "contact4", title: "Administration", path: "/contacts#administration", description: "Contact details for administrative staff" },
  ]
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchResults, setSearchResults] = useState({
    subjects: [],
    notes: [],
    routines: [],
    contacts: []
  });
  const [activeFilter, setActiveFilter] = useState("all");
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Perform search when query changes
  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    } else {
      setSearchResults({
        subjects: [],
        notes: [],
        routines: [],
        contacts: []
      });
      setTotalResults(0);
      setIsLoading(false);
    }
  }, [query]);

  // Simulate search with a delay to mimic API call
  const performSearch = (searchTerm) => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const term = searchTerm.toLowerCase();
      
      // Filter results based on search query
      const filteredResults = {
        subjects: searchData.subjects.filter(item => 
          item.title.toLowerCase().includes(term) || 
          item.id.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
        ),
        notes: searchData.notes.filter(item => 
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
        ),
        routines: searchData.routines.filter(item => 
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
        ),
        contacts: searchData.contacts.filter(item => 
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
        )
      };

      setSearchResults(filteredResults);
      
      // Calculate total results
      const total = Object.values(filteredResults).reduce(
        (acc, curr) => acc + curr.length, 
        0
      );
      setTotalResults(total);
      setIsLoading(false);
    }, 500);
  };

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchQuery)}`);
      performSearch(searchQuery);
    }
  };

  // Get filtered results based on active filter
  const getFilteredResults = () => {
    if (activeFilter === "all") {
      return searchResults;
    }
    
    return {
      subjects: activeFilter === "subjects" ? searchResults.subjects : [],
      notes: activeFilter === "notes" ? searchResults.notes : [],
      routines: activeFilter === "routines" ? searchResults.routines : [],
      contacts: activeFilter === "contacts" ? searchResults.contacts : []
    };
  };

  const filteredResults = getFilteredResults();
  const hasResults = totalResults > 0;

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "subjects":
        return <BookOpen size={18} className="text-blue-400" />;
      case "notes":
        return <FileText size={18} className="text-purple-400" />;
      case "routines":
        return <Calendar size={18} className="text-green-400" />;
      case "contacts":
        return <User size={18} className="text-amber-400" />;
      default:
        return <Search size={18} />;
    }
  };

  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case "subjects":
        return "bg-blue-600/20 border-blue-500/30 text-blue-400";
      case "notes":
        return "bg-purple-600/20 border-purple-500/30 text-purple-400";
      case "routines":
        return "bg-green-600/20 border-green-500/30 text-green-400";
      case "contacts":
        return "bg-amber-600/20 border-amber-500/30 text-amber-400";
      default:
        return "bg-blue-600/20 border-blue-500/30 text-blue-400";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Search header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">Search Results</h1>
          
          <form onSubmit={handleSubmit} className="relative mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for subjects, notes, routines..."
              className="w-full bg-[#0c1631] border border-[#1e3a8a]/50 rounded-xl py-4 pl-14 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-premium-md"
            />
            <Search size={20} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-400" />
            
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Search
            </button>
          </form>
          
          {/* Filters */}
          <div className="flex items-center overflow-x-auto py-2 mb-6">
            <div className="flex items-center mr-4">
              <Filter size={16} className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-400">Filter:</span>
            </div>
            
            {["all", "subjects", "notes", "routines", "contacts"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex-shrink-0 px-4 py-2 mx-1 rounded-lg text-sm font-medium capitalize ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "bg-[#0c1631] text-gray-400 hover:bg-blue-600/10 hover:text-white"
                } transition-colors`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Results summary */}
          {query && (
            <div className="text-gray-400 text-sm">
              {isLoading ? (
                "Searching..."
              ) : (
                hasResults ? (
                  <>Found {totalResults} result{totalResults !== 1 ? 's' : ''} for "<span className="text-white">{query}</span>"</>
                ) : (
                  <>No results found for "<span className="text-white">{query}</span>"</>
                )
              )}
            </div>
          )}
        </div>
        
        {/* Search results */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 rounded-full border-4 border-blue-600/30 border-t-blue-600 animate-spin"></div>
          </div>
        ) : (
          <>
            {hasResults ? (
              <div className="space-y-8">
                {Object.entries(filteredResults).map(([category, items]) => {
                  if (items.length === 0) return null;
                  
                  return (
                    <motion.div 
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-[#0c1631]/80 border border-[#1e3a8a]/30 rounded-xl overflow-hidden shadow-premium-md"
                    >
                      <div className="px-6 py-4 border-b border-[#1e3a8a]/30 flex items-center justify-between">
                        <div className="flex items-center">
                          {getCategoryIcon(category)}
                          <h2 className="text-lg font-semibold text-white ml-2 capitalize">{category}</h2>
                        </div>
                        <div className="text-sm text-gray-400">
                          {items.length} result{items.length !== 1 ? 's' : ''}
                        </div>
                      </div>
                      
                      <div className="divide-y divide-[#1e3a8a]/30">
                        {items.map((item) => (
                          <Link key={item.id} href={item.path}>
                            <div className="p-4 hover:bg-blue-600/10 transition-colors">
                              <div className="flex items-start mb-2">
                                <div className={`px-2 py-1 rounded-md text-xs font-medium mr-3 ${getCategoryColor(category)}`}>
                                  {category === "subjects" ? item.id : category.slice(0, -1)}
                                </div>
                                <h3 className="text-white font-medium">{item.title}</h3>
                              </div>
                              {item.description && (
                                <p className="text-gray-400 text-sm ml-14">{item.description}</p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              query && (
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-[#0c1631]/80 border border-[#1e3a8a]/30 rounded-xl">
                  <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center mb-6">
                    <Search size={32} className="text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">No results found</h3>
                  <p className="text-gray-400 max-w-md mb-8">
                    We couldn't find any matches for "{query}". Try different keywords or check the spelling.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                    <Link href="/subjects">
                      <div className="flex items-center justify-center p-3 rounded-lg bg-[#0a1129] hover:bg-blue-600/10 text-gray-300 hover:text-white transition-colors border border-[#1e3a8a]/30">
                        <BookOpen size={18} className="mr-2 text-blue-400" />
                        <span>Browse Subjects</span>
                      </div>
                    </Link>
                    <Link href="/notes">
                      <div className="flex items-center justify-center p-3 rounded-lg bg-[#0a1129] hover:bg-blue-600/10 text-gray-300 hover:text-white transition-colors border border-[#1e3a8a]/30">
                        <FileText size={18} className="mr-2 text-blue-400" />
                        <span>View Notes</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
}
