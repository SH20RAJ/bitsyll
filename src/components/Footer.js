import React from "react";
import Link from "next/link";
import { SH20RAJ } from "./sh20raj";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BookOpen, Calendar, FileText, Mail, MapPin, Phone, Users, XIcon } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Resources",
      links: [
        { label: "Study Materials", href: "/materials", icon: <FileText size={14} /> },
        { label: "Class Routine", href: "/routine", icon: <Calendar size={14} /> },
        { label: "Subjects", href: "/subjects", icon: <BookOpen size={14} /> },
        { label: "Contacts", href: "/contacts", icon: <Users size={14} /> },
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "WhatsApp Group", href: "https://chat.whatsapp.com/GhtCO9w8Hrk8XAUzjM325y", icon: <Phone size={14} /> },
        { label: "Email", href: "mailto:contact@bitsyll.com", icon: <Mail size={14} /> },
        { label: "BIT Mesra", href: "https://www.bitmesra.ac.in/", icon: <MapPin size={14} /> },
      ]
    }
  ];

  return (
    <footer className="relative bg-[#0a1129] pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-2 shadow-md">
                <BookOpen size={20} />
              </div>
              <div className="font-bold text-2xl tracking-tight">
                <span className="text-white">Bit</span>
                <span className="text-blue-400">Syll</span>
              </div>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              BitSyll is your comprehensive academic companion for BIT Mesra, providing access to study materials, class routines, and resources to excel in your academic journey.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href={"https://instagram.com/sh20raj"}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0c1631] border border-[#1e3a8a]/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-colors"
              >
                <InstagramLogoIcon className="h-4 w-4" />
              </Link>
              <Link
                href={"https://github.com/sh20raj"}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0c1631] border border-[#1e3a8a]/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-colors"
              >
                <GitHubLogoIcon className="h-4 w-4" />
              </Link>
              <Link
                href={"https://twitter.com/sh20raj"}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0c1631] border border-[#1e3a8a]/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-colors"
              >
                <XIcon className="h-4 w-4" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/sh20raj/"}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0c1631] border border-[#1e3a8a]/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-colors"
              >
                <LinkedInLogoIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, i) => (
            <div key={i} className="col-span-1">
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <span className="mr-2 text-blue-500">{link.icon}</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e3a8a]/30 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 md:mb-0">
            <span>&copy; 2025 BitSyll</span>
            <span className="text-[#1e3a8a]">•</span>
            <SH20RAJ />
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Music player */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-[#0c1631]/95 backdrop-blur-md border-t border-[#1e3a8a]/50 p-2 z-50 shadow-lg">
        <iframe
          src="https://archive.org/embed/BestOfArijitSingh"
          width="100%"
          height={40}
          className="rounded"
          title="Music Player"
          allow="autoplay"
        />
      </div> */}
    </footer>
  );
}
