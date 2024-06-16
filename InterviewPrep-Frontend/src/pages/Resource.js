import React from "react";
import { CiYoutube } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import Nav from "../components/Nav";

const Resource = () => {
  const data = [
    {
      label: "DBMS (Database Management System)",
      linkes: [
        {
          linkText: "YouTube",
          URL: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU",
        },
        {
          linkText: "Website",
          URL: "https://www.scaler.com/topics/dbms/",
        },
        {
          linkText: "Website2",
          URL: "https://www.javatpoint.com/dbms-tutorial",
        },
      ],
    },
    {
      label: "OOPS (Object Oriented Programming)",
      linkes: [
        {
          linkText: "YouTube",
          URL: "https://www.youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk",
        },
        {
          linkText: "Website",
          URL: "https://www.javatpoint.com/java-oops-concepts",
        },
        {
          linkText: "Website2",
          URL: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
        },
      ],
    },
    {
      label: "SQL (Structured Query Language)",
      linkes: [
        {
          linkText: "YouTube",
          URL: "https://www.youtube.com/watch?v=7S_tz1z_5bA&t=38s",
        },
        {
          linkText: "Website",
          URL: "https://www.w3schools.com/sql/",
        },
        {
          linkText: "Website2",
          URL: "https://www.geeksforgeeks.org/sql-tutorial/",
        },
      ],
    },
    {
      label: "DSA (Data Structures and Algorithms)",
      linkes: [
        {
          linkText: "YouTube",
          URL: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
        },
        {
          linkText: "YouTube2",
          URL: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
        },
        {
          linkText: "Website",
          URL: "https://www.w3schools.com/dsa/index.php",
        },
      ],
    },
    {
      label: "OS (Operating System)",
      linkes: [
        {
          linkText: "YouTube",
          URL: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
        },
        {
          linkText: "Website",
          URL: "https://www.geeksforgeeks.org/operating-systems/",
        },
        {
          linkText: "Website2",
          URL: "https://www.javatpoint.com/operating-system",
        },
      ],
    },
    {
      label: "CN (Computer Network)",
      linkes: [
        {
          linkText: "YouTube",
          URL: "https://www.youtube.com/playlist?list=PLBGx66SQNZ8ZvdIoctCTWB3ApXQpQGEin",
        },
        {
          linkText: "Website",
          URL: "https://www.javatpoint.com/computer-network-tutorial",
        },
        {
          linkText: "Website2",
          URL: "https://www.geeksforgeeks.org/computer-network-tutorials/",
        },
      ],
    },
    {
      label: "DSA Sheet",
      linkes: [
        {
          linkText: "A2Z Sheet",
          URL: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
        },
        {
          linkText: "SDE Sheet",
          URL: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
        },
        {
          linkText: "DSA Cracker",
          URL: "https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view",
        },
      ],
    },
  ];

  return (
    <>
      <Nav />
      <div className="sm:max-w-3xl lg:max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-[#004b3c] text-2xl font-semibold pb-6">
          <span className="border-b-4 border-emerald-500">Top Resources</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-full gap-6">
          {data.map((item, index) => {
            return (
              <div
                key={item.label}
                className="border border-gray-300 rounded shadow-sm"
              >
                <div className="border-b border-gray-200 rounded px-3 py-1 bg-gray-100">
                  <h3 class="subject text-slate-800 font-semibold ">
                    {item.label}
                  </h3>
                </div>
                <div class="container px-3 flex flex-col space-y-2 py-2">
                  {item.linkes.map((link, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-slate-600"
                      >
                        <div id="" className="">
                          {link.linkText.includes("YouTube") ? (
                            <CiYoutube />
                          ) : (
                            <AiOutlineGlobal />
                          )}
                        </div>
                        <a
                          href={link.URL}
                          target="blank"
                          className=" hover:text-blue-800"
                        >
                          {link.linkText}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Resource;
