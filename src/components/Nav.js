import Link from "next/link";
import React from "react";
import { BookOpen, Search, Menu, User } from "lucide-react";

export default function Nav() {
  return (
    <>
      <nav className="px-6 py-4 flex justify-between items-center sticky top-0 z-50 bg-[#0a1129]/95 backdrop-blur-lg shadow-lg border-b border-[#1e3a8a]/30">
        <div className="flex items-center gap-12">
          <Link href={"/"} className="flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded-lg mr-2 shadow-md">
              <BookOpen size={20} />
            </div>
            <div className="font-bold text-2xl tracking-tight">
              <span className="text-white">Bit</span>
              <span className="text-blue-400">Syll</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-6">
            <NavLink href="/#subjects">Subjects</NavLink>
            <NavLink href="/routine">Routine</NavLink>
            <NavLink href="/notes">Notes</NavLink>
            <NavLink href="/contacts">Contacts</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#0c1631] text-sm border border-[#1e3a8a]/50 rounded-lg py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search size={16} className="absolute left-3 text-blue-400" />
          </div>

          <button className="p-2 rounded-lg bg-[#0c1631] border border-[#1e3a8a]/50 text-blue-400 hover:bg-[#0c1631]/80 transition-colors">
            <User size={20} />
          </button>

          <button className="p-2 rounded-lg bg-[#0c1631] border border-[#1e3a8a]/50 text-blue-400 hover:bg-[#0c1631]/80 transition-colors md:hidden">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );
}
