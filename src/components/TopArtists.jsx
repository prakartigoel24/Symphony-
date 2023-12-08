import React from "react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import ArtistCard from "./ArtistCard";
import { useGetTopSongsQuery } from "../redux/APIs/ShazamApi1";

const TopArtists = () => {
  const { data: topSongs, isFetching, isError } = useGetTopSongsQuery();

  if (isFetching) return <Loader title="Loading artists..." />;

  if (isError) return <ErrorComponent />;

  return (
    <div className="flex flex-col w-fit">
      <div className="flex flex-col m-4">
        <h2 className="font-bold text-3xl mx-4 text-white text-left mt-4 mb-10">
          Top Artists
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {topSongs?.tracks?.map((track) => (
            <ArtistCard key={track?.key} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
