"use client";

import { useState } from "react";

type Props = {
  onSearch: (term: string) => void;
};

export default function SearchProjects({ onSearch }: Props) {
  const [term, setTerm] = useState("");

  const handleClick = () => {
    onSearch(term.trim());
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleClick}
        className="text-4xl text-black hover:scale-105 hover:text-orange-500"
      >
        ⌕
      </button>
      <input
        type="text"
        placeholder="Find A Project"
        className="h-[50px] w-[540px] p-6 outline-none text-black"
        value={term}
        onChange={(e) => {
          const value = e.target.value;
          setTerm(value);

          // If the input is cleared, trigger reset
          if (value.trim() === "") {
            onSearch("");
          }
        }}
      />
    </div>
  );
}
