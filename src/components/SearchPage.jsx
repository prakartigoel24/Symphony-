import React from "react";
import { useGetSongsBySearchQuery } from "../redux/APIs/ShazamApi1";
import ErrorComponent from "./ErrorComponent";
import SongCard from "./SongCard";
import Loader from "./Loader";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const searchTerm = useSelector((state) => state.searchTerm.value);
  const { data, isFetching, isError } = useGetSongsBySearchQuery(searchTerm);
  const songs = data?.tracks?.hits.map((song) => song.track);

  if (isFetching) return <Loader />;

  if (isError) return <ErrorComponent />;

  return (
    <div className="flex flex-col m-4">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
