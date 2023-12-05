import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
      <div className="flex justify-start items-center bg-sky-900 rounded-2xl m-4 w-full">
        <BsSearch className="relative left-4 w-4 h-4" />
        <input
          className="px-4 m-4 w-full relative flex justify-start items-center bg-transparent outline-none"
          // value={query}
          type="text"
          placeholder="Search"
          // onChange={handleInput}
        />
      </div>
  );
};

export default SearchBar;
