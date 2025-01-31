import * as React from 'react';
import Image from 'next/image';

export function SearchBar() {
  return (
    <form className="flex flex-col text-base leading-7 text-gray-400 h-[34px] min-w-[240px] w-[492px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap flex-1 gap-2.5 items-center px-4 py-1 bg-white rounded-lg border border-solid border-neutral-200 size-full max-md:max-w-full">
        <label htmlFor="searchInput" className="sr-only">Search</label>
        <input
          type="search"
          id="searchInput"
          className="flex-1 shrink gap-2.5 self-stretch my-auto min-w-[240px] max-md:max-w-full bg-transparent border-none outline-none"
          placeholder="Cari disini..."
        />
        <button type="submit" aria-label="Search">
          <Image 
            src="/icon.svg" 
            alt="Search Icon" 
            width={16} 
            height={16} 
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            loading="lazy" 
          />
        </button>
      </div>
    </form>
  );
}
