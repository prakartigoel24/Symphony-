import React from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopSongs from "./components/TopSongs";
import TopArtists from "./components/TopArtists";
import AroundYou from "./components/AroundYou";
import SearchPage from "./components/SearchPage";
import TopPlay from "./components/TopPlay";
import MusicPlayer from "./components/MusicPlayer";
import { useSelector } from "react-redux";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <SearchBar />
        <div className="flex flex-col lg:grid lg:grid-cols-3 overflow-y-auto no-scrollbar">
          <div className="top-0 h-fit lg:h-full lg:overflow-auto relative">
            <TopPlay />
          </div>
          <div className="h-full pb-40 lg:col-span-2 lg:order-first lg:overflow-y-auto no-scrollbar -mt-8 -ml-3">
            <Routes>
              <Route path="/" element={<Explore />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-songs" element={<TopSongs />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </div>
        </div>

        {activeSong?.title && (
          <div className="fixed sm:h-28 h-20 bottom-0 left-0 right-0 animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
