import React from "react";
import { useGetTopSongsQuery } from "../redux/APIs/ShazamApi1";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import PlayPause from "./PlayPause";

import { playPause, setActiveSong } from "../redux/Slices/PlayerSlice";
import { useDispatch, useSelector } from "react-redux";

const TopSongCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className={`flex flex-row w-full items-center rounded-lg mb-2 py-2 px-4 cursor-pointer 
    ${activeSong?.title === song.title && 'bg-slate-400/20 bg-opacity-70'}`}>
      <h1 className="font-bold text-base text-white mr-3">{i + 1}.</h1>
      <div className="flex justify-between items-center w-full">
        <div className="flex">
          <img
            className="w-24 h-24 rounded-lg"
            src={song.images?.coverart}
            alt={song?.title}
          />
          <div className="flex flex-col justify-center mx-3">
            <p className="text-md md:text-lg font-bold text-white">
              {song?.title}
            </p>
            <p className="text-base mt-1 text-gray-300">{song?.subtitle}</p>
          </div>
        </div>
        <div className="scale-125">
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
      </div>
    </div>
  );
};

const TopPlay = () => {
  const { data: topSongs, isFetching, isError } = useGetTopSongsQuery();
  const topFiveSongs = topSongs?.tracks?.slice(0, 5);

  const dispatch = useDispatch();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: topSongs, i }));
    dispatch(playPause(true));
  };

  if (isFetching) return <Loader />;
  if (isError) return <ErrorComponent />;

  return (
    <div className="flex flex-col m-4 lg:-mt-2 lg:-ml-8 w-full px-5">
      <div className="flex flex-col m-4 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Top Songs</h1>
          <Link to="/top-songs">see more</Link>
        </div>
        <div className="mt-4 flex flex-col w-full">
          {topFiveSongs?.map((song, i) => {
            return (
              <TopSongCard
                song={song}
                i={i}
                key={song?.key}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, i)}
              />
            );
          })}
        </div>
      </div>

      {/* Top Artists slider section */}
      <div className="flex flex-col m-4 w-fit">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Top Artists</h1>
          <Link to="/top-artists">see more</Link>
        </div>
        <div className="lg:mb-20">
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
                style={{ width: "25%", height: "25%" }}
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
    </div>
  );
};

export default TopPlay;
