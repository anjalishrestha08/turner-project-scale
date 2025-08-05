'use client';

import { useState } from 'react';
import { Project } from '@/components/Project';
import SearchProjects from './Search';
import { ProjectProps } from '@/components/Project';
import Image from 'next/image';

type Props = {
  projects: ProjectProps[];
};

export default function ProjectDisplay({ projects }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const filteredProjects = searchTerm
    ? projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : projects;

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const visibleProjects = filteredProjects.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1); // Reset to page 1 on search
  };

  return (
    <div>
       <div className="flex flex-col w-full md:grid grid-cols-12 mt-1 mb-3 border-b border-gray-200">
        <div className="flex flex-row h-3 md:col-span-6 bg-white items-center border-b md:border-r border-gray-200 justify-left p-6 gap-4 pl-15 pb-8">
          <SearchProjects onSearch={handleSearch} />
        </div>
        <div className="bg-white h-2 md:col-span-6 items-center justify-center border-b md:border-l border-gray-200 p-6 pt-4 pl-15 pb-10">
          <button className="flex flex-row gap-8 text-black">
            <Image
              src="/equalizer.png"
              alt="refine"
              width={28}
              height={10}
              className="border-2"
            />
            <span className="text-gray-500">
              Refine your search
            </span>
          </button>
        </div>
      </div>

      {/* Display projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10 border-b border-gray-300">
        {visibleProjects.map(project => (
          <Project key={project.url} {...project} />
        ))}
      </div>

      {/* Pagination (only when not searching) */}
        <div className="flex justify-center items-center gap-4 mb-10">
          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`px-4 py-2 border ${
                  pageNum === page
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-200'
                } rounded`}
              >
                {pageNum}
              </button>
            );
          })}
          {page < totalPages && (
            <button
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 border bg-white text-gray-700 hover:bg-orange-200 rounded"
            >
              Next →
            </button>
          )}
        </div>
    </div>
  );
}
