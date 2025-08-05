"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";
import MenuPopup from "./MenuPopup";
import ContactPopup from "./ContactPopup";
import ContactAnimated from "./ContactAnimated";
import { AnimatePresence } from "framer-motion";

export type NavItemData = {
  title: string;
  slug: string;
  url:string;
  mainDescription?: string;
  callToAction?: {
    text: string;
    icon: string;
  };
  contentSections?: {
    heading: string;
    items: {
      title: string;
      url?: string;
      image?: string;
    }[];
  }[];
};

export default function Navbar() {
  const [navData, setNavData] = useState<NavItemData[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //could use the try-catch for error boundaries
  useEffect(() => {
    const fetchNavData = async () => {
      const response = await fetch("/api/navigation");
      const data = await response.json();
      console.log(data);
      setNavData(data);
    };
    fetchNavData();
  }, []);

  return (
    <div
      className={`fixed top-0 z-40 w-full h-25 grid grid-cols-12 items-center transition-all duration-300
  ${isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"}`}
    >
      <div className="col-span-6 lg:col-span-3 h-25 border-b border-r border-gray-300 flex items-center px-10 py-6">
        <Link href="/">
          <Image
            src={isScrolled ? "/turner-logo-dark.svg" : "/turner-logo.svg"}
            alt="Turner Logo"
            width={195}
            height={90}
            className="h-auto  w-[8.125rem]"
            priority
          />
        </Link>
      </div>

      <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 h-25 space-x-3 border-b border-r border-gray-300 px-3.5 py-7">
        <div className="flex flex-row">
          {navData.map((item) => (
            <NavItem key={item.slug} data={item} isScrolled={isScrolled} />
          ))}
        </div>
      </div>

      <div className="col-span-6 lg:col-span-3 xl:col-span-1 flex border-b border-gray-300 lg:border-r  h-25 px-7 py-7 ">
        <MenuPopup />
      </div>
        {/* Right Side */}
      <div className="hidden xl:flex xl:col-span-3 space-x-5 border-r border-b border-gray-300 items-center h-25 px-10 py-9 ">
        <button
          onClick={() => setIsContactOpen(true)}
          className="hover:underline"
        >
          Contact Us
        </button>
        <Link href="/subcontractor">Become a Subcontractor</Link>
      </div>
      <AnimatePresence mode="wait">
        {isContactOpen && (
          <ContactAnimated key="contact-popup">
            <ContactPopup onClose={() => setIsContactOpen(false)} />
          </ContactAnimated>
        )}
      </AnimatePresence>
    </div>
  );
}
