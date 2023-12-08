import React from "react";
import {
  useGetTopSongsQuery,
  useGetTopSongsByGenreQuery,
} from "../redux/APIs/ShazamApi1";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import SongCard from "./SongCard";
import { GenreToListId } from "../assets/genreToListId";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopSongCard = ({ song, i }) => {
  return (
    <div className="flex flex-row w-full items-center rounded-lg mb-2 py-2 p-4 cursor-pointer">
      <h1 className="font-bold text-base text-white mr-3">{i + 1}.</h1>
      <div className="flex flex-row">
        <img
          className="w-28 h-28 rounded-lg"
          src={song.images?.coverart}
          alt={song?.title}
        />
        <div className="flex flex-col justify-center mx-3">
          <p className="text-xl font-bold text-white">{song?.title}</p>
          <p className="text-base mt-1 text-gray-300">{song?.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const Explore = () => {
  const [genreId, setGenreId] = useState("genre-global-chart-1");

  const { data: topSongs, isFetching, isError } = useGetTopSongsQuery();
  const {
    data: topSongsByGenre,
    isFetching: isFetchingSongsByGenre,
    isError: isErrorForSongsByGenre,
  } = useGetTopSongsByGenreQuery(genreId);
  const topFiveSongs = topSongs?.tracks?.slice(0, 5);

  if (isFetching) return <Loader />;
  if (isError) return <ErrorComponent />;

  return (
    <div className="flex flex-col m-4 w-fit">
      <div className="flex flex-col m-4 w-fit">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Top Songs</h1>
          <Link to="/top-songs">see more</Link>
        </div>
        <div className="mt-4 flex flex-col">
          {topFiveSongs?.map((song, i) => {
            return <TopSongCard song={song} i={i} key={song?.key} />;
          })}
        </div>
      </div>

      {/* Top Artists slider section */}
      <div className="flex flex-col m-4 w-fit">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Top Artists</h1>
          <Link to="/top-artists">see more</Link>
        </div>
        <div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4"
          >
            {topFiveSongs?.map((song) => (
              <SwiperSlide
                key={song?.key}
                style={{ width: "25%", height: "auto" }}
                className="shadow-lg rounded-full animate-slideright"
              >
                <img
                  src={song?.images?.background}
                  alt="Name"
                  className="rounded-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="m-4 flex flex-col w-fit">
        <div className="sm:flex sm:justify-between sm:items-center">
          <h1 className="text-2xl font-bold">Discover</h1>
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
        <div className="flex flex-wrap justify-center items-center m-4">
          {isErrorForSongsByGenre ? (
            <ErrorComponent />
          ) : isFetchingSongsByGenre ? (
            <Loader />
          ) : (
            topSongsByGenre?.tracks?.map((song, i) => {
              return <SongCard song={song} key={song?.key} i={i} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
