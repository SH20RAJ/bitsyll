"use client";

import Link from "next/link";
import {
  BookOpen,
  Calendar,
  FileText,
  Home,
  Menu as MenuIcon,
  Users,
  Github,
  ExternalLink,
  ChevronRight
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter
} from "@/components/ui/sheet";

export default function Menu() {
  const menuItems = [
    { icon: <Home size={18} />, label: "Home", href: "/" },
    { icon: <BookOpen size={18} />, label: "Subjects", href: "/subjects" },
    { icon: <Calendar size={18} />, label: "Routine", href: "/routine" },
    { icon: <FileText size={18} />, label: "Notes", href: "/notes" },
    { icon: <Users size={18} />, label: "Contacts", href: "/contacts" },
  ];

  const externalLinks = [
    {
      icon: <Github size={18} />,
      label: "GitHub Repository",
      href: "https://github.com/SH20RAJ/bitsyll"
    },
    {
      icon: <ExternalLink size={18} />,
      label: "BIT Mesra Official",
      href: "https://www.bitmesra.ac.in/"
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-premium-md hover:bg-blue-700 transition-all duration-300 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a1129] md:hidden">
            <MenuIcon className="w-5 h-5" />
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[85%] sm:w-[350px] border-r border-premium-border bg-premium-bg-card p-0">
          <div className="h-full flex flex-col">
            {/* Header */}
            <SheetHeader className="p-6 border-b border-premium-border/30">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-2 rounded-lg mr-3 shadow-premium-sm">
                  <BookOpen size={20} />
                </div>
                <SheetTitle className="font-bold text-2xl tracking-tight">
                  <span className="text-white">Bit</span>
                  <span className="text-blue-400">Syll</span>
                </SheetTitle>
              </div>
            </SheetHeader>

            <div className="flex-1 overflow-auto p-6">
              {/* Main navigation */}
              <div className="mb-8">
                <h3 className="text-xs uppercase text-gray-500 font-medium mb-4 tracking-wider">Navigation</h3>
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <SheetClose asChild key={index}>
                      <Link href={item.href}>
                        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-600/10 text-gray-300 hover:text-white transition-colors">
                          <div className="flex items-center">
                            <span className="mr-3 text-blue-400">{item.icon}</span>
                            <span>{item.label}</span>
                          </div>
                          <ChevronRight size={16} className="text-gray-500" />
                        </div>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>

              {/* External links */}
              <div>
                <h3 className="text-xs uppercase text-gray-500 font-medium mb-4 tracking-wider">External Links</h3>
                <nav className="space-y-1">
                  {externalLinks.map((item, index) => (
                    <SheetClose asChild key={index}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-600/10 text-gray-300 hover:text-white transition-colors">
                          <div className="flex items-center">
                            <span className="mr-3 text-blue-400">{item.icon}</span>
                            <span>{item.label}</span>
                          </div>
                          <ExternalLink size={14} className="text-gray-500" />
                        </div>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </div>

            {/* Footer */}
            <SheetFooter className="p-6 border-t border-premium-border/30 block">
              <p className="text-sm text-gray-400">
                &copy; 2025 BitSyll - Your academic companion for BIT Mesra
              </p>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
