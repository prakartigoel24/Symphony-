import React from "react";
import { useGetTopSongsQuery } from "../redux/APIs/ShazamApi1";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const TopSongCard = ({ song, i }) => {
  return (
    <div className="flex flex-row w-full items-center rounded-lg mb-2 py-2 cursor-pointer">
      <h1 className="font-bold text-base text-white mr-3">{i + 1}.</h1>
      <div className="flex">
        <img
          className="w-24 h-24 rounded-lg"
          src={song.images?.coverart}
          alt={song?.title}
        />
        <div className="flex flex-col justify-center mx-3">
          <p className="text-md md:text-lg font-bold text-white">{song?.title}</p>
          <p className="text-base mt-1 text-gray-300">{song?.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const TopPlay = () => {
  const { data: topSongs, isFetching, isError } = useGetTopSongsQuery();
  const topFiveSongs = topSongs?.tracks?.slice(0, 5);

  if (isFetching) return <Loader />;
  if (isError) return <ErrorComponent />;

  return (
    <div className="flex flex-col m-4 lg:-mt-2 lg:-ml-8 w-fit px-5">
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
