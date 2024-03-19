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

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) return <Loader />;

  if (isError) return <ErrorComponent />;

  return (
    <div className="flex flex-col m-4 w-fit">
      <h2 className="font-bold text-3xl mx-4 text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i}
          isPlaying={isPlaying}
          activeSong={activeSong} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
