"use client";

import { subjects } from "@/constants/subjects";
import Link from "next/link";
import { motion } from "framer-motion";

export function Subjects() {
  return (
    <>
      <h2 className="text-2xl font-bold p-1 text-center">
        Subjects <span className="w-full self-end">{""}</span>
      </h2>
      <hr className="border-1 border-gray-100 opacity-20" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {subjects.map((subject) => (
          <Link href={"subject/" + subject.slug} key={subject.name}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-xl bg-card p-6 hover:bg-accent/50 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="absolute right-0 top-0 translate-x-4 -translate-y-4">
                <div className="h-24 w-24 rounded-full bg-indigo-500/10 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-indigo-500/10 p-2 text-indigo-500">
                    <img
                      src={subject.logo}
                      alt={subject.name}
                      className="h-16 w-16 rounded-full"
                    />

                </div>
                <h3 className="mb-2 font-semibold text-sm text-foreground text-center">
                  {subject.name}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {subject.slug}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </>
  );
}
