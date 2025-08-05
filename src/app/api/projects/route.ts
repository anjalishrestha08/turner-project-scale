import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    OurProjects: {
      title: "OUR PROJECTS",
      slug: "our-projects",
      url: "/projects",
      heading: "Delivering On What Matters",
      subHeading: "WHAT DO YOU WANT TO BUILD?",
      image: [
        {
          title: "New Highmark Stadium",
          url: "/projects/new-highmark-stadium",
          image: "/projects/new-highmark-stadium.jpg",
          location: "Orchard Park, New York",
          sector: "Sports / Entertainment",
        },
        {
          title: "UC Berkeley, The Gateway",
          url: "/projects/uc-berkeley-the-gateway",
          image: "/projects/uc-berkeley-the-gateway.jpg",
          location: "Berkeley, California",
          sector: "Education",
        },
        {
          title:
            "University of Rochester Medical Center, New ED and In-Patient Bed Tower",
          url: "/projects/urmc-bed-tower",
          image: "/projects/urmc-bed-tower.jpg",
          location: "Rochester, New York",
          sector: "Healthcare",
        },
        {
          title:
            "San Francisco International Airport Terminal 3 West Modernization",
          url: "/projects/sfo-terminal-3-modernization",
          image: "/projects/sfo-terminal-3-modernization.jpg",
          location: "San Francisco, California",
          sector: "Aviation / Transportation",
        },
        {
          title: "City of Memphis, Lester Community Center",
          url: "/projects/lester-community-center",
          image: "/projects/lester-community-center.jpg",
          location: "Memphis, Tennessee",
          sector: "Government / Public",
        },
      ],
      CTA: { text: "OUR MARKET SECTORS", url: "/market-sectors" },
    },
    contentSections: [
      {
        items: [
          {
            title: "Maryland Public Health Laboratory",
            url: "/projects/maryland-health-lab",
            image: "/project1.jpg",
            location: "Baltimore, Maryland",
            sector: "Healthcare",
          },
          {
            title: "Bayfront Health Medical Pavilion at Institute Square",
            url: "/projects/bayfront-health-institute-square",
            image: "/project2.jpeg",
            location: "St. Petersburg, Florida",
            sector: "Healthcare",
          },
          {
            title: "Bayfront Health Women's Center",
            url: "/projects/bayfront-womens-center",
            image: "/project3.jpeg",
            location: "St. Petersburg, Florida",
            sector: "Healthcare",
          },
          {
            title: "Serendipity Arts Live Museum (The Brij)",
            url: "/projects/serendipity-arts-live-museum-the-brij",
            image: "/project4.png",
            location: "New Delhi",
            sector: "Cultural / Entertainment",
          },
          {
            title: "Confidential Client Data Center Facility",
            url: "/projects/confidential-data-center",
            image: "/project5.jpg",
            location: "Johor Bahru",
            sector: "Data Center",
          },
          {
            title: "Placer County Health and Human Services",
            url: "/projects/placer-county-health-services",
            image: "/project6.jpg",
            location: "Auburn, California",
            sector: "Government / Public",
          },
          {
            title: "Indira Gandhi International Airport",
            url: "/projects/igi-airport",
            image: "/project7.jpg",
            location: "New Delhi",
            sector: "Aviation / Transportation",
          },
          {
            title: "Allen Hazen Water Tower",
            url: "/projects/allen-hazen-water-tower",
            image: "/project8.jpg",
            location: "Des Moines, Iowa",
            sector: "Government / Public",
          },
          {
            title: "Des Moines International Airport Terminal Expansion",
            url: "/projects/des-moines-airport-terminal",
            image: "/project9.jpg",
            location: "Des Moines, Iowa",
            sector: "Aviation / Transportation",
          },
          {
            title: "Chase Bank West Des Moines",
            url: "/projects/chase-bank-west-des-moines",
            image: "/project10.jpg",
            location: "Des Moines, Iowa",
            sector: "Commercial",
          },
          {
            title: "Morgan Stanley West Des Moines Branch Office",
            url: "/projects/morgan-stanley-west-des-moines",
            image: "/project11.jpg",
            location: "West Des Moines, Iowa",
            sector: "Commercial",
          },
          {
            title: "Des Moines Area Community College",
            url: "/projects/des-moines-community-college",
            image: "/project12.jpg",
            location: "Ankeny, Iowa",
            sector: "Education",
          },
          {
            title: "Landmark 55",
            url: "/projects/landmark-55",
            image: "/project13.jpg",
            location: "Hanoi",
            sector: "Commercial / Residential",
          },
          {
            title: "Emaar Square",
            url: "/projects/emaar-square",
            image: "/project14.jpg",
            location: "Istanbul",
            sector: "Commercial / Residential",
          },
          {
            title: "LUMIÈRE Riverside",
            url: "/projects/lumiere-riverside",
            image: "/project15.jpg",
            sector: "Commercial / Residential",
          },
        ],
      },
    ],
  });
}
