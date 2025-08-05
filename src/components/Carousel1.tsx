"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface CarouselProps {
  OurCultureCarousel: {
    heading: string;
    description: string;
    topics: {
      id: string;
      title: string;
      image: string;
      heading: string;
      subHeading: string;
      description: string;
      url: string;
      callToAction: {
        text: string;
        icon: string;
      };
    }[];
  };
}

export default function OurCultureCarousel({
  OurCultureCarousel: data,
}: CarouselProps) {
  const [isActive, setIsActive] = useState<number>(0);

  const activeTopic = isActive !== null ? data.topics[isActive] : null;

  return (
    <motion.div
      className="w-full h-[40.7rem] px-10 md:px-20 py-8 mb-4 pb-5 border-b-2 border-gray-300 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className=" text-xl sm:text-2xl lg:text-3xl text-gray-800 lg:mb-8">{data.heading}</h3>
      <p className="text-md md:text-lg lg:text-lg xl:text-xl px-2 mb-3">{data.description}</p>
      <div className="grid grid-rows-6 md:grid md:grid-cols-12 w-full h-[29.7rem]">
        {/* Button */}
        <div className="row-span-1 md:col-span-3 h-[28.2rem] md:flex md:flex-col py-2 border-r-2 border-gray-300  ">
          <div className="grid grid-cols-9 md:flex md:flex-col text-sm rounded-xl bg-blue-700 w-[25rem] gap-18 pt-1 pl-1 pb-1 md:w-[9rem] md:p-3 pr-4 md:gap-5 lg:w-[13rem] lg:h-[25rem] lg:p-4 m-2">
            {data.topics.map((topic, idx) => (
              <div key={topic.id} className="">
                <button
                  onClick={() => setIsActive(idx)}
                  className={`md:grid md:grid-cols-12 transition-transform duration-300 ${
                    isActive === idx
                      ? "text-white md:text-sm lg:text-xl scale-105"
                      : " md:text-xs lg:text-lg text-blue-300 hover:text-neutral-100 hover:scale-105"
                  }`}
                >
                  <div className="md:col-span-3 p-2 text-left">{topic.id}</div>
                  <div className="hidden md:block md:col-span-9 p-2 text-left">{topic.title}</div>
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Carousel Part */}
        <div className="row-span-5 md:col-span-9 flex flex-row">
          <AnimatePresence mode="wait">
            {activeTopic && (
              <motion.section
                key={activeTopic.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col lg:flex lg:flex-row items-center md:gap-1 lg:gap-12">
                  <div className=" p-3 md:h-1/2 sm:p-7 md:p-5 lg:w-2/3 lg:p-4 lg:pt-5 xl:p-7">
                    <h2 className="text-sm font-semibold md:text-md lg:text-md xl:text-lg md:font-bold text-blue-600 mb-3 md:mb-3 lg:mb-4">
                      {activeTopic.heading}
                    </h2>
                    <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pl-3 text-gray-900 font-normal md:font-light mb-2 md:mb-3">
                      {activeTopic.subHeading}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-md lg:text-lg xl:text-xl mb-1 ml-4 md:ml-5 lg:mb-2">
                      {activeTopic.description}
                    </p>
                    <div className="flex flex-row md:gap-3">
                      <Link
                        href={activeTopic.url}
                        className="text-gray-600 sm:text-sm md:text-md lg:mt-1 xl:text-lg flex items-center font-medium hover:text-gray-900"
                      >
                        {activeTopic.callToAction.text}
                        <span className="ml-2 pb-1 text-orange-600 text-2xl md:text-4xl transition-transform duration-300 hover:translate-x-2">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className=" relative pl-2 pr-2 pt-1 pb-2 top:-top-2 sm:-top-6 md:-top-9 md:pl-5 md:pr-5 lg:-top-3">
                    <motion.img
                      key={activeTopic.image}
                      src={activeTopic.image}
                      alt={activeTopic.title}
                      className="rounded-md shadow-lg w-[23rem] h-[11rem] sm:w-[27rem] sm:h-[15rem] md:w-[28rem] md:h-[17rem] lg:w-[28rem] lg:h-[13rem] xl:w-[50rem] xl:h-[18rem] object-cover"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
