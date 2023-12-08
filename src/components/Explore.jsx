import React from "react";
import {
  useGetTopSongsByGenreQuery,
} from "../redux/APIs/ShazamApi1";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import SongCard from "./SongCard";
import { GenreToListId } from "../assets/genreToListId";
import { useState } from "react";


const Explore = () => {
  const [genreId, setGenreId] = useState("genre-global-chart-1");

  const {
    data: topSongsByGenre,
    isFetching: isFetchingSongsByGenre,
    isError: isErrorForSongsByGenre,
  } = useGetTopSongsByGenreQuery(genreId);
  
  if(isErrorForSongsByGenre) return <ErrorComponent/>
  if(isFetchingSongsByGenre) return <Loader/>

  return (
    <div className="flex flex-col w-fit">
      <div className="m-4 flex flex-col w-fit">
        <div className="flex flex-col justify-center items-center lg:justify-between lg:items-center lg:flex-row mx-4">
          <h1 className="text-3xl font-bold">Discover</h1>
          <select
            onChange={(e) => {
              setGenreId(e.target.value);
            }}
            value={genreId}
            className="bg-black rounded-lg text-gray-300 p-3 text-sm outline-none mt-5 mb-5"
          >
            {GenreToListId.map((obj, i) => (
              <option key={obj.listid} value={obj.listid}>
                {obj.genre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {
            topSongsByGenre?.tracks?.map((song, i) => {
              return <SongCard song={song} key={song?.key} i={i} />;
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
