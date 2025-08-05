// app/api/contact-info/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    heading: "CONTACT US",
    subheading:
      "Thanks for your interest in Turner. Whether you are looking to start a project, get support, or just have a general question, we want to hear from you. Drop us a line and we will get back to you.",
    sections: {
      headquarters: {
        title: "HEADQUARTERS",
        name: "Turner Construction Company",
        address1: "66 Hudson Boulevard East",
        address2: "New York, NY 10001",
        phone: "(212) 229-6000",
        email: "turner@tcco.com",
      },
      ethics: {
        title: "ETHICS AND COMPLIANCE HOTLINE",
        description:
          "Report issues 24 hours a day, 7 days a week to Turner’s Confidential Reporting System",
        phone: "(888) 738-1924",
        url: "https://turnerconstruction.ethicspoint.com",
      },
      subcontractors: {
        title: "SUBCONTRACTORS",
        description:
          "Before reaching out, please review our prequalification requirements.",
        cta: "BECOME A SUBCONTRACTORS",
        url: "/subcontractors",
      },
    },
  });
}
