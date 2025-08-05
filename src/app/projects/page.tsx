import Image from "next/image";
import { ProjectProps } from "@/components/Project";
import Link from "next/link";
import ProjectDisplay from "./ProjectDisplay";

type ProjectsApi = {
  OurProjects: {
    title: string;
    slug: string;
    heading: string;
    subHeading: string;
    url: string;
    CTA: { text: string; url: string };
  };
  contentSections: {
    items: ProjectProps[];
  }[];
};

export default async function ProjectsPage() {
  
  const res = await fetch("http://localhost:3000/api/projects");
  const data: ProjectsApi = await res.json();

  const { OurProjects, contentSections } = data;
  const projects = data.contentSections?.[0]?.items ?? [];

  return (
    <div className="">
      <div className="relative h-[37rem] md:h-screen w-full overflow-hidden">
        <Image
          src="/Lester-Community-Center-1_thumb-projects-featured-header.jpg"
          alt="bgimage"
          width={1000}
          height={700}
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        {/*  Overlay */}
        {OurProjects && (
          <div className=" relative z-10 flex items-center h-full px-24 text-white bg-black/30">
            <div className="text-left max-w-xl">
              <h2 className="text-md font-bold mb-10">{OurProjects.title}</h2>
              <h1 className="text-4xl font-bold mb-4">{OurProjects.heading}</h1>
              <h2 className="text-lg font-medium mb-8">
                {OurProjects.subHeading}
              </h2>
              <div>
                {OurProjects.CTA?.url && (
                  <Link href={OurProjects.CTA.url}>
                    <span className="text-md px-2 font-bold text-white hover:text-orange-800">
                      {OurProjects.CTA.text}
                    </span>
                    <span className="relative top-2 text-5xl font-semibold text-orange-600 px-1 py-3 transition-transform duration-300 hover:text-orange-400 hover:translate-x-2 ">
                      →
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <ProjectDisplay projects={projects} />
    </div>
  );
}
