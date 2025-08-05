import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type AccordianProps = {
  title: string;
  url: string;
  contentSections: {
    heading: string;
    items: {
      title: string;
      url: string;
      image?: string;
    }[];
  }[];
};

export default function Accordian({
  title,
  url,
  contentSections,
}: AccordianProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-3 px-2 py-3 md:px-7 border-b-2 border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <Link
          href={url}
          className="text-md p-1 mb-1 md:text-lg lg:text-2xl lg:p-3 lg:mb-3 text-gray-800 hover:text-blue-600"
        >
          {title}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-90 h-10 text-xs flex items-center justify-end lg:w-80 lg:h-13 lg:text-sm text-gray-600 hover:text-orange-500 hover:border-orange-500 transition-colors duration-200"
        >
          {isOpen ? "▲" : "▼"}
        </button>
      </div>

      {/* Open content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=""
          >
            <div className="flex flex-row gap-x-12 px-5 md:px-10 mt-6 space-y-6 border-t-2 border-gray-200 ">
              {contentSections.map((section, index) => (
                <div key={index}>
                  <h3 className="mt-6 mb-2 text-sm lg:text-md font-medium text-gray-700">
                    {section.heading}
                  </h3>
                  <ul className="pl-3 space-y-1 text-sm md:text-md text-gray-600">
                    {section.items.map((item, idx) => (
                      <li key={idx}>
                        <Link href={item.url} className="hover:text-orange-600">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
