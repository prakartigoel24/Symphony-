import React from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {setSearchTerm} from '../redux/Slices/Search'
import { Link } from "react-router-dom";

const SearchBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=>state.searchTerm.value)
  return (
    <>
      <Link to={`search/`}>
      <div className="flex justify-start items-center  rounded-2xl m-3 w-full"
      >
        <BsSearch className="relative left-4 w-4 h-4 bg-transparent" />
        <input
          className="px-4 m-4 w-full relative flex justify-start items-center outline-none bg-transparent"
          value={searchTerm}
          type="text"
          placeholder="Search for songs..."
          onChange={(e)=> dispatch(setSearchTerm(e.target.value))}
          />
      </div>
      </Link>
          </>
  );
};

export default SearchBar;
