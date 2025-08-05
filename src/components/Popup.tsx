import Link from "next/link";

import { NavItemData } from "./Navbar";

export default function Popup({ data }: { data: NavItemData }) {
  return (
    <div className="fixed top-[100px] left-0 z-50 grid h-[24.375rem] w-screen grid-cols-12 gap-x-10 overflow-x-scroll orange-scroll p-6 shadow-xl bg-white">
      {/* first row */}
      <div className="col-span-3 flex flex-col justify-between rounded-md bg-blue-700 p-5 text-white">
        <div>
          <h3 className="text-xl font-semibold">{data.title}</h3>
          <p className="mt-3 text-lg">{data.mainDescription}</p>
        </div>
        {data.callToAction?.text && (
          <Link
            href={data.callToAction.icon ?? "#"}
            className="m-2 inline-flex items-center font-medium"
          >
            {data.callToAction.text}
            <span className="ml-1 transition-transform ease-in-out hover:scale-105">
              →
            </span>
          </Link>
        )}
      </div>
      <div className="col-span-9 grid grid-cols-12 space-y-3">
        {data.contentSections?.map((section) => {
          const hasImages = section.items.some(
            (item) => typeof item === "object" && "image" in item,
          );

          return (
            <div key={section.heading} className={`col-span-3`}>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                {section.heading}
              </h3>
              <ul
                className={
                  hasImages
                    ? "flex flex-row space-x-6"
                    : "max-h-[410px] gap-x-6 gap-y-3"
                }
              >
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={hasImages ? "w-[300px] flex-shrink-0" : ""}
                  >
                    {"image" in item ? (
                      <div className="flex flex-col space-y-4">
                        <div className="h-[150px] w-[240px] overflow-hidden rounded-md">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                          />
                        </div>
                        <Link
                          href={item.url || "#"}
                          className="block text-lg font-medium text-gray-800 transition-colors hover:text-blue-600"
                        >
                          {item.title}
                        </Link>
                      </div>
                    ) : (
                      <Link
                        href={item.url || "#"}
                        className="text-sm text-gray-700 transition-colors hover:text-blue-600"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
