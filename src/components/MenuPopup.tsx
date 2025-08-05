//MenuPopup.tsx:
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Accordian, { AccordianProps } from "./Accordian";

export default function MenuPopup() {
  const [openMenu, setMenu] = useState(false);
  const [menuData, setMenuData] = useState<AccordianProps[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("/api/navigation");
        const data = await res.json();
        setMenuData(data);
      } catch (error) {
        console.error("Failed to fetch menu data:", error);
      }
    };

    if (openMenu) fetchMenu();
  }, [openMenu]);

  const handleMenuOpen = () => setMenu(true);
  const handleMenuClose = () => setMenu(false);
  const ourProjects = menuData.find(
    (section) => section.title === "Our Projects",
  );

  const featuredProjects =
    ourProjects?.contentSections.find(
      (sec) => sec.heading === "Featured Projects",
    )?.items || [];

  return (
    <>
      <button onClick={handleMenuOpen} className="menu-button">
        ☰
      </button>
      {openMenu && (
        <div className="fixed top-0 left-0 z-50 h-full w-full lg:grid grid-cols-12 bg-white shadow-md ">
          {/* Left Blue Section */}
          <div className="hidden relative h-full lg:col-span-3 lg:flex flex-col overflow-hidden border border-gray-300 bg-blue-700">
            <div className="h-25 border-b border-b-gray-300 py-7">
              <Link href="/">
                <Image
                  src="/turner-logo.svg"
                  alt="Turner Logo"
                  width={195}
                  height={90}
                  className="h-auto w-[130px]"
                  priority
                />
              </Link>
            </div>

            <div className="animate-marquee flex h-[34.375rem] flex-col pl-10">
              <Image
                src="/turner-mega.png"
                alt="Turner Logo"
                width={200}
                height={100}
                className="h-auto w-[300px]"
                priority
              />
              <Image
                src="/turner-mega.png"
                alt="Turner Logo"
                width={200}
                height={100}
                className="h-auto w-[300px]"
                priority
              />
            </div>
            {/* Footer */}
            <div className="footer px-17 py-6 text-white">
              <Link href="/">turner@tcco.com</Link>
            </div>
          </div>

          {/* Center Section */}
          <div className="col-span-6 h-full items-center justify-center bg-white">
            {/* Search */}
            <div className="flex h-25 flex-row items-center justify-center border border-gray-300 p-6 pl-25">
              <button className="text-4xl transition-transform ease-in-out text-black hover:scale-105 hover:rotate-15 hover:text-orange-500">
                ⌕
              </button>
              <input
                type="text"
                name="search"
                placeholder="Type To Search"
                className="h-[50px] w-[540px] p-5 outline-none text-black"
              />
              {/* Close Button Section */}
              <button
                onClick={handleMenuClose}
                className="relative left-6 h-[100px] w-[160px] text-black border-l border-l-gray-300 pb-3 pl-4 text-4xl transition-transform ease-in-out hover:text-orange-500"
              >
                ╳
              </button>
            </div>

            {/* Main Content Fetch */}
            <div className="h-[34.375rem] pl-20 pr-20 overflow-y-scroll orange-scroll border-gray-300">
              {/* Accordions */}
              {menuData.map((section, idx) => (
                <Accordian
                  key={idx}
                  title={section.title}
                  url={section.url}
                  contentSections={section.contentSections ?? []}
                />
              ))}
              <div className="text-sm grid grid-cols-2  md:text-md px-7 py-6 gap-3 gap-y-2 border-t border-gray-200  text-gray-500">
                <Link href="" className=" hover:text-blue-600">
                  GENERAL INQUIRIES
                </Link>
                <Link href="" className=" hover:text-blue-600">
                  BECOME A SUBCONTRACTOR
                </Link>
                <Link href="" className=" hover:text-blue-600">
                  OUR MARKETS
                </Link>
                <Link href="" className=" hover:text-blue-600">
                  COST INDEX
                </Link>
                <Link href="" className=" hover:text-blue-600">
                  TURNER CITY
                </Link>
                <Link href="" className=" hover:text-blue-600">
                  TURNER UNIVERSITY
                </Link>
              </div>
            </div>
            {/* Footer */}
            <div className="footer flex flex-row px-17 py-6 gap-x-5 text-gray-600">
              <Link
                href="/https://www.facebook.com/turnerconstruction"
                className=" hover:text-gray-900"
              >
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/turnerconstructioncompany/"
                className=" hover:text-gray-900"
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/company/turner-construction-company/"
                className=" hover:text-gray-900"
              >
                LinkedIn
              </Link>
              <Link
                href="https://x.com/turner_talk"
                className=" hover:text-gray-900"
              >
                Twitter
              </Link>
              <Link
                href="https://www.youtube.com/@TurnerConstructionCo"
                className=" hover:text-gray-900"
              >
                YouTube
              </Link>
            </div>
          </div>

          {/* Right Empty Section */}
          <div className="col-span-3 flex flex-col h-full  border-l border-gray-300">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex h-25 w-full justify-end border-b border-gray-300 py-9 pr-8">
                  <Link
                    href="/contact-us"
                    className="text-lg text-black hover:text-blue-700"
                  >
                    CONTACT US
                  </Link>
                </div>

                {/* Center Content */}
                <div className="p-5 border-l border-gray-300 h-[34.375rem]">
                  {featuredProjects.length > 0 && (
                    <div className="px-6 py-6 ">
                      <h2 className="mb-4 text-sm font-semibold text-blue-800">
                        FEATURED PROJECT
                      </h2>
                      <div className="flex flex-row gap-6 flex-wrap">
                        {featuredProjects.map((project, idx) => (
                          <div key={idx} className="w-full">
                            <div className="overflow-hidden rounded-md h-[150px] w-full mb-2">
                              <Image
                                src={project.image || ""}
                                alt={project.title}
                                width={200}
                                height={100}
                                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                              />
                            </div>
                            <Link
                              href={project.url}
                              className="text-md font-medium text-gray-800 hover:text-blue-600"
                            >
                              {project.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="footer px-8 py-6 text-gray-600">
                <Link
                  href={ourProjects?.url || "/projects"}
                  className="text-gray-500 hover:text-gray-700"
                >
                  View all projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
