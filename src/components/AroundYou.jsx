import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import SongCard from "./SongCard";
import { useGetTopSongsByCountryQuery } from "../redux/APIs/ShazamApi1";
import { useDispatch, useSelector } from 'react-redux';


const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);

  const { activeSong, isPlaying } = useSelector((state) => state.player);


  const {
    data: songsInCountry,
    isFetching,
    isError,
  } = useGetTopSongsByCountryQuery(country);
  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=${
          import.meta.env.VITE_GEO_API_KEY
        }`
      )
      .then((res) => setCountry(res?.data?.location.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching || loading) return <Loader />;

  if (isError && country !== "") return <ErrorComponent />;

  return (
    <div className="flex flex-col w-fit">
      <div className="flex flex-col m-4">
        <h2 className="font-bold text-center text-3xl mx-4 text-white lg:text-left mt-4 mb-10">
          {" "}
          Around you <span className="font-black">{country}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {songsInCountry?.tracks?.map((song, i) => (
            <SongCard key={song.key} song={song} i={i} 
            isPlaying={isPlaying}
            activeSong={activeSong} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AroundYou;
