'use client';

import { Button } from "./ui/button";
import Link from "next/link";
import { PopComments } from "./PopComments";
import { GitHubLogoIcon, FileTextIcon, PlusIcon } from "@radix-ui/react-icons";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SuggestButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Floating action button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a1129]"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <PlusIcon className="w-6 h-6" />
        )}
      </button>

      {/* Expandable panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-16 right-0 w-80 p-6 rounded-xl bg-[#0c1631]/95 backdrop-blur-md border border-[#1e3a8a]/50 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium">Contribute to BitSyll</h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                Found something missing? Want to suggest content or give feedback? We&apos;d love to hear from you.
              </p>

              <Link href="https://chat.whatsapp.com/GhtCO9w8Hrk8XAUzjM325y">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-blue-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Suggest Content
                </Button>
              </Link>

              <div className="flex gap-2">
                <Link className="w-full" href="https://github.com/SH20RAJ/bitsyll">
                  <Button className="w-full bg-[#0a1129] hover:bg-[#0a1129]/80 text-white border border-[#1e3a8a]/50 shadow-md transition-all">
                    <GitHubLogoIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
                <div className="w-full">
                  <PopComments />
                </div>
              </div>

              <Link
                href="https://drive.google.com/drive/folders/19I3elwfFDGrfa6GIIocmjyXeyR1muUeW?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md hover:shadow-blue-500/20 transition-all">
                  <FileTextIcon className="w-4 h-4 mr-2" />
                  Study Notes
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
