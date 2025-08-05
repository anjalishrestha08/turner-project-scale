"use client";

import { useState } from "react";
import Popup from "./Popup";
import { NavItemData } from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NavItem({ data, isScrolled }: { data: NavItemData, isScrolled: boolean }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className="relative flex bottom-7.5"
      //could use onClick or focus/blur to refactor with click/tap support so that it will  work well on mobile, where there's no hover

      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      {/* Nav item content */}
      <div
        className={`
      relative cursor-pointer px-4 py-2 h-25 pt-2 flex justify-between items-center
      transition-colors duration-300
      ${showPopup ? "bg-white text-blue-600" : isScrolled ? "text-black" : "bg-transparent text-white"}
    `}
      >
        {/* highlight line */}
        <div
          className={`
        absolute top-0 left-0 h-[8px] bg-orange-600
        transition-all duration-600 ease-in-out
        ${showPopup ? "w-full" : "w-0"}
      `}
        />
        <Link href={data.url}>
        {data.title}
        </Link>
      </div>

      {showPopup && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            className="absolute top-full left-0 z-50 mt-2"
          >
            <Popup data={data} />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
