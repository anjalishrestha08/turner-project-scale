import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      title: "Our Company",
      slug: "our-company",
      url: "/our-company/about-us",
      mainDescription:
        "Turner is a North America-based, international construction services company and is a leading builder in diverse market segments.",
      callToAction: {
        text: "GET TO KNOW US",
        icon: "arrow",
      },
      contentSections: [
        {
          heading: "Who We Are",
          items: [
            { title: "About Us", url: "/our-company/about-us" },
            { title: "Our Leadership", url: "/our-company/leadership" },
            { title: "Market Sectors", url: "/market-sectors" },
            { title: "Turner Foundation", url: "/our-company/foundation" },
            {
              title: "Turner International",
              url: "/our-company/international",
            },
            { title: "Affiliates", url: "/our-company/affiliates" },
            { title: "Locations", url: "/our-company/locations" },
            { title: "Turner City", url: "/our-company/turner-city" },
          ],
        },
        {
          heading: "Our Culture",
          items: [
            {
              title: "Our ESG Strategy",
              url: "/our-company/culture/esg-strategy",
            },
            {
              title: "Community and Citizenship",
              url: "/our-company/culture/community",
            },
            {
              title: "Diversity, Equity, and Inclusion",
              url: "/our-company/culture/dei",
            },
            {
              title: "Environmental Sustainability and Resiliency",
              url: "/our-company/culture/sustainability",
            },
            {
              title: "Ethics and Compliance",
              url: "/our-company/culture/ethics",
            },
            { title: "Innovation", url: "/our-company/culture/innovation" },
            {
              title: "Safety and Wellness",
              url: "/our-company/culture/safety",
            },
          ],
        },
        {
          heading: "Resources",
          items: [
            {
              title: "General Inquiries",
              url: "/our-company/resources/inquiries",
            },
            { title: "Cost Index", url: "/our-company/resources/cost-index" },
            {
              title: "Turner University",
              url: "/our-company/resources/university",
            },
          ],
        },
        {
          heading: "Become a Subcontractor",
          items: [
            {
              image: "./trade-1_thumb-menu-header.jpg",
              title: "Learn How",
              url: "/subcontractor",
            },
          ],
        },
      ],
    },
    {
      title: "Our Services",
      slug: "our-services",
      url: "/our-services/",
      mainDescription:
        "Our people bring their technical knowledge, experience, and resourcefulness to the delivery of our construction services. Our expertise and value-added offerings support our clients throughout the lifespan of the construction process.",
      contentSections: [
        {
          heading: "Approach",
          items: [
            { title: "Preconstruction", url: "/our-services/preconstruction" },
            {
              title: "Construction Management",
              url: "/our-services/construction-management",
            },
            {
              title: "Project Management",
              url: "/our-services/project-management",
            },
            {
              title: "Lean Construction",
              url: "/our-services/lean-construction",
            },
          ],
        },
        {
          heading: "Expertise",
          items: [
            {
              title: "Accelerated Payment Program",
              url: "/our-services/accelerated-payments",
            },
            { title: "Fabrication Shop", url: "/our-services/fabrication" },
            { title: "Insurance & Surety", url: "/our-services/insurance" },
            {
              title: "Offsite Manufacturing",
              url: "/our-services/offsite-manufacturing",
            },
            { title: "Risk Management", url: "/our-services/risk-management" },
            {
              title: "Self-Perform Operations",
              url: "/our-services/self-perform",
            },
            {
              title: "Supply Chain Management",
              url: "/our-services/supply-chain",
            },
            {
              title: "Turner Engineering Group",
              url: "/our-services/engineering",
            },
            {
              title: "Turner Technical Services",
              url: "/our-services/technical-services",
            },
            {
              title: "Virtual Design & Construction",
              url: "/our-services/vdc",
            },
          ],
        },
        {
          heading: "Our Markets",
          items: [
            {
              image: "./cta-slide1_thumb-menu-header.jpg",
              title: "Learn How",
              url: "/our-services/markets",
            },
          ],
        },
      ],
    },
    {
      title: "News & Insights",
      slug: "news-insights",
      url: "/news-insights",
      mainDescription:
        "Stay up to date with the latest news and insights from Turner. Learn from our industry experts sharing innovation, market insight and thought leadership.",
      callToAction: {
        text: "Browse Insights",
        icon: "arrow",
      },
      contentSections: [
        {
          heading: "Featured News & Insights",
          items: [
            {
              image:
                "/061125-Sacramento-FC-pr-copy_thumb-insights-list-home.jpg",
              title:
                "Turner Construction Company to Build Soccer Stadium for Republic FC in Sacramento",
              url: "/news/soccer-stadium-sacramento",
              callToAction: {
                text: "READ MORE",
                icon: "arrow",
              },
            },
            {
              image:
                "/061225-Great-Place-to-Work-pr_thumb-insights-list-home.jpg",
              title:
                "Turner Recognized as a Great Place to Work by Forbes and Newsweek",
              url: "/news/great-place-to-work",
              callToAction: {
                text: "READ MORE",
                icon: "arrow",
              },
            },
            {
              image: "/pr-060525-trinity-alliance_thumb-insights-list-home.jpg",
              title:
                "Trinity Alliance selected as Construction Managers for Kay Bailey Hutchinson Convention Center",
              url: "/news/kay-bailey-convention-center",
              callToAction: {
                text: "READ MORE",
                icon: "arrow",
              },
            },
            {
              image: "/careerstartshere.jpg",
              title:
                "Turner Named Nation’s Top Healthcare Construction Manager by Modern Healthcare",
              url: "/news/top-healthcare-construction-manager",
              callToAction: {
                text: "READ MORE",
                icon: "arrow",
              },
            },
            {
              image: "060225-Gen-Z-pr_thumb-insights-list-home.jpg",
              title:
                "Turner Named One of America’s Greatest Workplaces for Gen Z",
              url: "/news/greatest-workplaces-gen-z",
              callToAction: {
                text: "READ MORE",
                icon: "arrow",
              },
            },
            {
              image:
                "/061725-Sarasota-Hospital-pr_thumb-insights-featured-home (1).jpg",
              title:
                "Turner Reaches Major Milestones on Sarasota Memorial Hospital’s Cancer Pavilion in Florida",
              url: "/news/sarasota-cancer-pavilion-milestone",
              callToAction: {
                text: "READ MORE",
                icon: "arrow",
              },
            },
          ],
        },
      ],
    },
    {
      title: "Our Projects",
      slug: "our-projects",
      url: "/projects",
      mainDescription:
        "Explore our innovative and diverse projects across the globe.",
      contentSections: [
        {
          heading: "Featured Projects",
          items: [
            {
              image: "/50727-001_thumb-projects-list.jpg",
              title: "Four Seasons Modernization",
              url: "/projects/four-seasons-modernization",
            },
            {
              image: "/The-brij-Serendipity-India_thumb-projects-list.png",
              title: "Serendipity Arts Live Museum(The Brij)",
              url: "/projects/serendipity-arts-live-museum-the-brij",
            },
          ],
        },
      ],
    },

    {
      title: "Careers",
      slug: "careers",
      url: "/careers",
      mainDescription:
        "An awarding and fulfilling career awaits you at Turner! Join our team and build some of the most exciting and innovative projects around the world.",
      callToAction: {
        text: "Explore careers at Turner",
        icon: "arrow",
      },
      contentSections: [
        {
          heading: "Join The Team",
          items: [
            { title: "Life At Turner", url: "/careers/life-at-turner" },
            { title: "Turner Careers", url: "/careers" },
            { title: "Students & Entry Level", url: "/careers/students" },
            { title: "Experienced Professionals", url: "/careers/experienced" },
            { title: "Labor & Skilled Trade", url: "/careers/skilled-trade" },
            { title: "Military Professionals", url: "/careers/military" },
          ],
        },
        {
          heading: "Turner & You",
          items: [
            {
              image: "./career1_thumb-menu-header.jpg",
              title: "Your Career Starts Here",
              url: "/careers/your-career-starts-here",
            },
            {
              image: "./career2_thumb-menu-header.jpg",
              title: "Your Next Level Awaits",
              url: "/careers/your-next-level-awaits",
            },
          ],
        },
      ],
    },
  ]);
}
