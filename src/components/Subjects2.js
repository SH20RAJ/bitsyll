"use client";

import { subjects } from "@/constants/subjects";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Subjects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-blue-700/20 to-indigo-600/20" />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold p-4 text-center text-white mb-2">
          Explore Subjects
        </h2>

        <hr className="w-1/3 mx-auto border-2 border-blue-500 rounded-full mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {subjects.map((subject, index) => (
          <div key={subject.name}>
            <Link href={"subject/" + subject.slug}>
              <div className="group relative overflow-hidden rounded-xl bg-blue-900/40 border border-blue-700/40 p-6 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:border-blue-500/70">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-6 p-3 rounded-xl bg-blue-800/40 transition-colors duration-200">
                    <img
                      src={subject.logo}
                      alt={subject.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white text-center mb-2">
                    {subject.name}
                  </h3>

                  <p className="text-sm text-gray-300 text-center">
                    {subject.slug}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
