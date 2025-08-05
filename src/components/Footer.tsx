import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

interface FooterProps {
  footer: {
    links: { title: string; url: string }[];
    social: { platform: string; icon: string; url: string }[];
    copyright: string;
    legal: { text: string; url: string }[];
    equalOpportunity: string;
  };
}

export default function Footer({ footer }: FooterProps) {
  return (
<footer className="bg-blue-700 text-white pt-8 pb-2">
  <AnimatedSection>
    <div className="max-w-screen-xl mx-auto flex flex-col h-auto ">
      <div className="grid grid-cols-2 md:grid-rows-2 lg:grid-cols-12 gap-y-6 lg:gap-y-0 lg:relative lg:top-10  ">
        {/* Left: Logo */}
        <div className="col-span-1 md:row-span-1 lg:col-span-3 flex lg:justify-start border-b lg:border-r border-gray-300 px-4 pb-4 lg:pb-4">
          <Link href="/" className="flex h-20">
            <img
              src="/turner-logo.svg"
              alt="Turner Logo"
              className="h-9 lg:h-12"
            />
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="col-span-1 grid grid-cols-2  md:row-span-1 lg:col-span-6 md:flex md:flex-row justify-center lg:justify-start border-b lg:border-r border-gray-300 pt-3 pb-8 pl gap-4 md:gap-8 lg:gap-5 lg:pl-10 lg:pr-5 lg:pt-7 lg:pb-8 ">
          {footer.links.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              className="text-sm md:text-base font-semibold hover:underline hover-orange-600"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="lg:col-span-3 flex items-center lg:justify-end pl-10 lg:border-b border-gray-300 pb-5">
          <div className="flex gap-7 items-center">
            {footer.social.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.icon}
                  alt={item.platform}
                  className="h-8 w-8 transition-transform duration-300 hover:scale-110"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 2nd Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 text-blue-100 text-sm lg:relative lg:-top-15">
        {/* Left */}
        <div className="lg:col-span-3 flex justify-center lg:justify-start items-center text-xs sm:text-sm border-t lg:border-t-0 lg:border-r border-gray-300 pt-3 pr-2 pb-5 lg:pb-8 pl-4 lg:pl-10">{footer.copyright}</div>

        {/* Middle */}
        <div className="lg:col-span-6 lg:border-r border-gray-300 pt-3 pr-2 pl-10 md:gap-15 lg:gap-5 lg:pl-10 lg:pt-7 lg:pb-8">{footer.equalOpportunity}</div>

        {/* Right */}
        <div className="lg:col-span-3 flex flex-wrap gap-6 justify-center lg:justify-end border-gray-300 pt-3 pr-2 pl-10 md:gap-15 lg:gap-5 lg:pl-10 lg:pt-7 lg:pb-8">
          {footer.legal.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className="hover:text-white text-blue-200"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
</footer>

  );
}
