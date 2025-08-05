// components/NewsAndInsights.tsx
"use client";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

interface NewsItem {
  title: string;
  url: string;
  image?: string;
  callToAction: { text: string; icon: string };
}

interface NewsSectionProps {
  section: {
    title: string;
    contentSections: {
      heading: string;
      items: NewsItem[];
    }[];
  };
}

export default function NewsAndInsights({ section }: NewsSectionProps) {
  const items = section?.contentSections?.[0]?.items || [];

  if (items.length === 0) return null;

  const [featured, ...rest] = items;

  return (
    <section className="bg-white px-20 py-10 md:py-16">
      <AnimatedSection>
        {/* Title */}
        <h3 className="text-2xl md:text-3xl text-gray-800 mb-5">News & Insights</h3>
        <div className="flex flex-col lg:flex-row gap-8 pb-10 mb-2 border-b-2 border-gray-200">
          {/* Featured News on the Left */}
          <div className="flex flex-col w-full lg:w-1/2 sticky top-15 overflow-hidden rounded-lg self-start">
            <Link href={featured.url} className=" ">
              {featured.image && (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-[900px] h-[300px] md:w-full md:h-[500px] object-cover rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-101"
                />
              )}
              <h3 className="text-lg mt-5 md:text-2xl font-light text-gray-900 ">
                {featured.title}
              </h3>
              {featured.callToAction?.text && (
                <p className="text-gray-600 mt-2 flex items-center gap-1 font-medium hover:text-gray-900">
                  {featured.callToAction.text}
                  <span className="ml-1 pb-2 text-orange-600 text-4xl transition-transform duration-300 hover:translate-x-2">
                    →
                  </span>
                </p>
              )}
            </Link>
          </div>
         {/* Scrollable Grid on the Right */}
          <div className="md:grid md:grid-cols-2 lg:w-1/2 lg:grid lg:grid-cols-2  gap-6 max-h-[800px] overflow-y-auto pl-6 transition-transform duration-600 overflow-auto scrollbar-hide ">
            {rest.map((item, index) => (
              <Link key={index} href={item.url} className="block group">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[450px] md:w-full md:h-[180px] object-cover rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                )}
                <h5 className="mt-3 text-lg font-light text-gray-900 ">
                  {item.title}
                </h5>
                {item.callToAction?.text && (
                  <p className="text-gray-600 md:mt-1 flex items-center gap-1 text-sm font-semibold hover:text-black">
                    {item.callToAction.text}
                    <span className="ml-1 pb-2 text-orange-600 text-4xl transition-transform duration-300 hover:translate-x-2">
                      →
                    </span>
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
