import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ImportantData({ showHeading }) {
  let data = [
    {
      id: 1,
      title: "Class Routine 📅",
      description: "This is the important data",
      link: "https://drive.google.com/file/d/1QNgz9rbPaoU_zr1fmdVf8vLuo6LZZQyQ/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Exam Routine 📅",
      description: "This is the important data",
      link: "/examroutine",
    },
    {
      id: 3,
      title: "Syllabus 📚",
      description: "This is the important data",
      link: "/syllabus",
    },
    {
      id: 4,
      title: "Clubs 🎉",
      description: "This is the important data",
      link: "/clubs",
    },
    {
      id: 5,
      title: "Website 🌐",
      description: "This is the important data",
      link: "https://www.bitmesra.ac.in/",
    },
    {
      id: 6,
      title: "Academic Calendar 📅",
      description: "This is the important data",
      link: "https://bitmesra.ac.in/UploadedDocuments/pratyush_869/NewsUPloaded/News68e689b46c734b5f809ea3926c62996c_Academic%20Calendar%20-%20MO%202024.pdf",
    },
    {
      id: 7,
      title: "BITHUB 🚀",
      description: "This is the important data",
      link: "https://bithub.co.in/",
    },
    {
      id: 8,
      title: "WhatsApp Group 📱",
      description: "This is the important data",
      link: "https://chat.whatsapp.com/GhtCO9w8Hrk8XAUzjM325y",
    },
    {
      id: 9,
      title: "Notes 📃",
      description: "This is the important data",
      link: "https://drive.google.com/drive/folders/1-0Xfwd73g-Y7mec64v5W0osI4CWT0B1v",
    },
    {
      id:10,
      title:"Best YouTube Channels 🎥",
      description:"This is the important data",
      link:"https://github.com/SH20RAJ/bitsyll/issues/2"
    }
  ];
  return (
    <div>
      {showHeading  && (
        <h2 className="text-2xl font-bold p-1 ">
          Important Data <span className=" w-full self-end ">{""}</span>
        </h2>
      )}
      <hr className="border-1 border-gray-100 opacity-20" />

      <div className="grid grid-cols-2 gap-4 mt-2">
        {data.map((item) => (
          <div key={item.id} className="flex flex-wrap ">
            <Link
              href={item.link}
              target="_"
              className="w-full"
            >
              <Button
                variant="link"
                className=" w-full hover:underline"
                target="_blank"
              >
                {item.title}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
