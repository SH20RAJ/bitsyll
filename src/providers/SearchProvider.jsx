"use client";

import { createContext, useContext, useState } from "react";

// Create search context
const SearchContext = createContext({
  isSearchOpen: false,
  openSearch: () => {},
  closeSearch: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
});

// Search provider component
export function SearchProvider({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <SearchContext.Provider
      value={{
        isSearchOpen,
        openSearch,
        closeSearch,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook to use search context
export const useSearch = () => useContext(SearchContext);
