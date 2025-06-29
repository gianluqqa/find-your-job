import React from "react";

interface SearchInputsProps {
  isMobile?: boolean;
}

const SearchInputs: React.FC<SearchInputsProps> = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <input
          type="text"
          placeholder="Job title or keyword"
          className="bg-slate-800/50 border border-emerald-700/30 rounded-xl px-4 py-2.5 text-sm text-emerald-100 placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm w-full"
        />
        <input
          type="text"
          placeholder="Location"
          className="bg-slate-800/50 border border-emerald-700/30 rounded-xl px-4 py-2.5 text-sm text-emerald-100 placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm w-full"
        />
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-3">
      <div className="relative">
        <input
          type="text"
          placeholder="Job title or keyword"
          className="bg-slate-800/50 border border-emerald-700/30 rounded-xl px-4 py-2.5 text-sm text-emerald-100 placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm w-48"
        />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Location"
          className="bg-slate-800/50 border border-emerald-700/30 rounded-xl px-4 py-2.5 text-sm text-emerald-100 placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-all duration-300 backdrop-blur-sm w-40"
        />
      </div>
    </div>
  );
};

export default SearchInputs;
