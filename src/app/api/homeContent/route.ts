import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    makingADifference: {
      heading: "Making a Difference",
      subHeading: "WHAT DO YOU WANT TO BUILD?",
    },
    indiaSection: {
      image: "/international-india-hero-banner_thumb-bu-closest-unit.jpg",
      heading: "INDIA",
      subHeading: "Our Work In Your Local Community",
      description:
        "Together we can grow communities, strengthen economies, and improve lives.",
      links: [
        {
          text: "Meet the India Team",
          url: "/locations/india",
          icon: "arrow",
        },
        {
          text: "Choose another location",
          url: "/locations",
        },
      ],
    },
    OurCultureCarousel: {
      heading: "Our Culture",
      description:
        "Our vision is to be the highest-value provider of global construction services and technical expertise while we make a difference in the lives of people, customers, the community, and the environment.",
      topics: [
        {
          id: "01",
          title: "ESG Strategy",
          image: "/pnbsite-drone_thumb-slider-view.jpg",
          heading: "ENVIRONMENTAL, SOCIAL, AND GOVERNANCE STRATEGY",
          subHeading: "Building Today to Transform Tomorrow",
          description:
            "We support a healthy and more equitable future for our people, our business, and our planet through our ESG strategy.",
          url: "https://www.turnerconstruction.com/commitments/esg",
          callToAction: {
            text: "LEARN MORE",
            icon: "arrow",
          },
        },
        {
          id: "02",
          title: "Community",
          image: "/041923-stock-005_thumb-slider-view.jpg",
          heading: "COMMUNITY",
          subHeading: "Community & Citizenship",
          description:
            "We make a difference in the community through our relationships, our partnerships, and our investments.",
          url: "https://www.turnerconstruction.com/commitments/community-and-citizenship",
          callToAction: {
            text: "LEARN MORE",
            icon: "arrow",
          },
        },
        {
          id: "03",
          title: " DE&I",
          image: "/041123-stock-299_1_thumb-slider-view.jpg",
          heading: "DE&I",
          subHeading: "Diversity, Equity, and Inclusion",
          description:
            "We are sustaining the right environment where people can be at their best, be authentic, and are treated with dignity and respect.",
          url: "https://www.turnerconstruction.com/commitments/diversity-equity-and-inclusion",
          callToAction: {
            text: "LEARN MORE",
            icon: "arrow",
          },
        },
        {
          id: "04",
          title: "Environmental",
          image: "/041123-stock-136_thumb-slider-view.jpg",
          heading: "ENVIRONMENTAL",
          subHeading: "Environmental Sustainability and Resiliency",
          description:
            "We conduct our business consiously and responsibly, creating a healthy, prosperous and sustainable future for people and the planet.",
          url: "https://www.turnerconstruction.com/commitments/environmental-sustainability-and-resiliency",
          callToAction: {
            text: "LEARN MORE",
            icon: "arrow",
          },
        },
        {
          id: "05",
          title: "Innovation",
          image: "/041123-stock-239_1_thumb-slider-view.jpg",
          heading: "INNOVATION",
          subHeading: "Innovation",
          description:
            "We are pioneering advancements that will reinvent how we work, improve people's lives, and shape the future of the industry.",
          url: "https://www.turnerconstruction.com/commitments/innovation",
          callToAction: {
            text: "LEARN MORE",
            icon: "arrow",
          },
        },
        {
          id: "06",
          title: "Safety",
          image: "/041123-stock-292_thumb-slider-view.jpg",
          heading: "SAFETY AND WELLNESS",
          subHeading: "Safety and Wellness",
          description:
            "We promote an injury-free environment and the safest workplace possible for our employees, trade partners, clients, and project consultants.",
          url: "https://www.turnerconstruction.com/commitments/safety-and-wellness",
          callToAction: {
            text: "LEARN MORE",
            icon: "arrow",
          },
        },
      ],
    },
    careersHighlight: {
      image: "/041223-stock-089_1_thumb-blocks-left-view.jpg",
      heading: "AMBITIOUS PEOPLE, IMPACTFUL WORK",
      subHeading: "Life At Turner",
      description:
        "At Turner, you will work with people who share your passion for solving challenging problems and making a difference.",
      callToAction: {
        text: "Explore a career with Turner",
        url: "/careers",
        icon: "arrow",
      },
    },
    footer: {
      links: [
        { title: "Our Company", url: "/our-company" },
        { title: "Our Services", url: "/our-services" },
        { title: "Our Projects", url: "/our-projects" },
        { title: "Insights", url: "/news-insights" },
        { title: "Careers", url: "/careers" },
        { title: "Contact", url: "/contact" },
      ],
      social: [
        {
          platform: "Facebook",
          icon: "/facebook.svg",
          url: "https://facebook.com",
        },
        {
          platform: "Instagram",
          icon: "/instagram.svg",
          url: "https://instagram.com",
        },
        {
          platform: "LinkedIn",
          icon: "/linkedin.svg",
          url: "https://linkedin.com",
        },
        {
          platform: "Twitter",
          icon: "/twitter.svg",
          url: "https://twitter.com",
        },
        {
          platform: "YouTube",
          icon: "/youtube.svg",
          url: "https://youtube.com",
        },
      ],
      copyright: "© 2025 Turner Construction Company. All rights reserved.",
      legal: [
        { text: "Human Rights Policy", url: "/legal/human-rights" },
        { text: "Fraud Alert", url: "/legal/fraud-alert" },
        { text: "Privacy Policy", url: "/legal/privacy" },
        { text: "Cookie Settings", url: "/legal/cookies" },
      ],
      equalOpportunity:
        "Turner is an Equal Opportunity Employer - race, color, religion, sex, sexual orientation, gender identity, national origin, disability, status as a protected veteran, or other characteristics protected by applicable law.",
    },
  });
}

