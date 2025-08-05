// app/page.tsx
import OurCultureCarousel from "@/components/Carousel1";
import Footer from "@/components/Footer";
import NewsAndInsights from "@/components/NewsInsights";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "@mui/material";

export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/navigation");
  const data = await res.json();
  const homeContent = await fetch("http://localhost:3000/api/homeContent");
  const homeData = await homeContent.json();

  const { makingADifference, indiaSection, careersHighlight } = homeData;

  const newsSection = data.find(
    (section: any) => section.slug === "news-insights"
  );

  return (
    <div className="relative overflow-hidden">
      {/* Hero Video */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 h-full w-full object-cover"
        >
          <source src="/302-turner-web-hero-31825.mp4" type="video/mp4" />
        </video>
        {/* Making a Difference Overlay */}
        {makingADifference && (
          <div className=" relative z-10 flex items-center  h-full px-24 text-white bg-black/40">
            <div className="text-left max-w-xl">
              <h1 className="text-4xl font-bold mb-4">
                {makingADifference.heading}
              </h1>
              <h2 className="text-md font-medium mb-6">
                {makingADifference.subHeading}
              </h2>
              <button className="inline-flex items-center text-6xl font-semibold text-orange-600 px-6 py-3 transition-transform duration-300 hover:text-orange-400 hover:translate-x-2 ">
                →
              </button>
            </div>
          </div>
        )}
      </div>
      {/* News Section */}
      <div className="mb-2">
        <AnimatedSection>
          <NewsAndInsights section={newsSection} />
        </AnimatedSection>
      </div>
      {/* India Section */}
      {indiaSection && (
        <section className="text-xs border-b-2 border-gray-300 font-semibold md:text-md lg:text-md xl:text-lg md:font-bold text-blue-600 mb-1 md:mb-2 lg:mb-4 pb-5">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row px-16 items-center gap:8 md:gap-12">
              <div className="w-full lg:w-1/2 max-w-[40rem] mx-auto sm:p-4">
                <img
                  src={indiaSection.image}
                  alt={indiaSection.title}
                  className="w-full h-[14rem] sm:h-[15rem] md:h-[19rem] lg:h-[20rem] xl:h-[24rem] rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-3 sm:p-5">
                <h2 className="text-xs font-semibold md:text-md lg:text-md xl:text-lg md:font-bold text-blue-600 mb-1 md:mb-2 lg:mb-4">
                  {indiaSection.heading}
                </h2>
                <h3 className="text-xl sm:xl md:text-2xl lg:3xl xl:4xl mb-2 text-gray-700 font-light ">
                  {indiaSection.subHeading}
                </h3>
                <p className="text-gray-600 text-sm md:text-md lg:text-lg xl:text-xl mb-2 ml-4 md:ml-5 lg:mb-2">
                  {indiaSection.description}
                </p>
                <div className="flex flex-row gap-4 text-sm md:text-md">
                  {indiaSection.links?.map(
                    (links: { text: string; url: string }, idx: number) => (
                      <Link
                        key={idx}
                        href={links.url}
                        className="text-gray-600 mt-2 flex items-center gap-1 font-medium hover:text-gray-900"
                      >
                        {links.text}
                        <span className="ml-1 pb-2 text-orange-600 text-4xl transition-transform duration-300 hover:translate-x-2">
                          →
                        </span>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      )}
      {/* Carousel */}
      <div className="">
        <AnimatedSection>
          <OurCultureCarousel
            OurCultureCarousel={homeData.OurCultureCarousel}
          />
        </AnimatedSection>
      </div>

      {/* Text Content-2 */}
      {careersHighlight && (
        <section className="text-xs border-b-2 border-gray-300 py-8 pb-5 font-semibold md:text-md lg:text-md xl:text-lg md:font-bold text-blue-600 mb-1 md:mb-2 lg:mb-4">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row px-16 items-center gap:8 md:gap-12">
              <div className="w-full lg:w-1/2 max-w-[40rem] mx-auto sm:p-4">
                <img
                  src={careersHighlight.image}
                  alt={careersHighlight.title}
                  className="w-full h-[14rem] sm:h-[15rem] md:h-[19rem] lg:h-[20rem] xl:h-[24rem] rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-3 sm:p-5">
                <h2 className="text-xs font-semibold md:text-md lg:text-md xl:text-lg md:font-bold text-blue-600 mb-1 md:mb-2 lg:mb-4">
                  {careersHighlight.heading}
                </h2>
                <h3 className="text-xl sm:xl md:text-2xl lg:3xl xl:4xl mb-2 text-gray-700 font-light ">
                  {careersHighlight.subHeading}
                </h3>
                <p className="text-gray-600 text-sm md:text-md lg:text-lg xl:text-xl mb-2 ml-4 md:ml-5 lg:mb-2">
                  {careersHighlight.description}
                </p>
                <div className="flex flex-row gap-4 text-sm md:text-md">
                  {careersHighlight.callToAction && (
                    <Link
                      href={careersHighlight.callToAction.url}
                      className="text-gray-600 mt-2 flex items-center gap-1 font-medium hover:text-gray-900"
                    >
                      {careersHighlight.callToAction.text}
                      <span className="ml-2 pb-2 text-orange-600 text-4xl transition-transform duration-300 hover:translate-x-2">
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      )}
      <div className="">
        <Footer footer={homeData.footer} />
      </div>
    </div>
  );
}
