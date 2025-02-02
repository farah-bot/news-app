import * as React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <form className="w-full max-w-md">
      <div className="flex items-center w-full px-4 py-2 bg-white rounded-lg border border-neutral-200">
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        <input
          type="search"
          id="searchInput"
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-400"
          placeholder="Cari disini..."
        />
        <button type="submit" aria-label="Search">
          <Search className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </form>
  );
}
