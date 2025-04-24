"use client";

import Link from "next/link";
import { BookOpen, User } from "lucide-react";
import GlobalSearch from "./GlobalSearch";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  // Check if the current path is active
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="px-6 py-4 flex justify-between items-center sticky top-0 z-40 bg-[#0a1129]/95 backdrop-blur-lg shadow-premium-md border-b border-[#1e3a8a]/30">
      <div className="flex items-center gap-12">
        <Link href={"/"} className="flex items-center">
          <div className="bg-blue-600 text-white p-2 rounded-lg mr-2 shadow-premium-sm">
            <BookOpen size={20} />
          </div>
          <div className="font-bold text-2xl tracking-tight">
            <span className="text-white">Bit</span>
            <span className="text-blue-400">Syll</span>
          </div>
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink href="/subjects" isActive={isActive("/subjects")}>Subjects</NavLink>
          <NavLink href="/routine" isActive={isActive("/routine")}>Routine</NavLink>
          <NavLink href="/notes" isActive={isActive("/notes")}>Notes</NavLink>
          <NavLink href="/contacts" isActive={isActive("/contacts")}>Contacts</NavLink>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Global search component */}
        <div className="hidden md:block">
          <GlobalSearch />
        </div>

        {/* Mobile search button */}
        <div className="md:hidden">
          <GlobalSearch className="!w-auto" />
        </div>

        <Link href="/profile">
          <button className="p-2 rounded-lg bg-[#0c1631] border border-[#1e3a8a]/50 text-blue-400 hover:bg-[#0c1631]/80 transition-colors shadow-premium-sm">
            <User size={20} />
          </button>
        </Link>
      </div>
    </nav>
  );
}

function NavLink({ href, children, isActive }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        isActive
          ? "text-blue-400"
          : "text-gray-300 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
