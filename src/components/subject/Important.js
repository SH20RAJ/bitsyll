import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Important() {
  let data = [
    {
      id: 1,
      title: "Class Routine",
      description: "This is the important data",
      link: "https://drive.google.com/file/d/1QNgz9rbPaoU_zr1fmdVf8vLuo6LZZQyQ/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Exam Routine",
      description: "This is the important data",
      link: "https://www.google.com",
    },
    {
      id: 3,
      title: "Syllabus",
      description: "This is the important data",
      link: "https://www.google.com",
    },
    {
      id: 4,
      title: "Notice",
      description: "This is the important data",
      link: "https://www.google.com",
    },
    {
      id: 5,
      title: "Admission",
      description: "This is the important data",
      link: "https://www.google.com",
    },
    {
      id: 6,
      title: "Result",
      description: "This is the important data",
      link: "https://www.google.com",
    },
    {
      id: 7,
      title: "Scholarship",
      description: "This is the important data",
      link: "https://www.google.com",
    },
    {
      id: 8,
      title: "Job",
      description: "This is the important data",
      link: "https://www.google.com",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold p-1 ">
        Important Data <span className=" w-full self-end ">{""}</span>
      </h2>
      <hr className="border-1 border-gray-100 opacity-20" />

      <div className="grid grid-cols-2 gap-4 mt-2">
        {data.map((item) => (
          <div key={item.id} className="flex flex-wrap ">
            <Link href={item.link} target="_" className="w-full">
              <Button variant="ghost" className=" w-full" target="_blank">
                {item.title}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
