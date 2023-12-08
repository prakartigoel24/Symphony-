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

const App = () => {
  return (
    <div className="main">
      <div className="flex flex-col ">
        <SearchBar />
        <Navbar />
      </div>
      <div className="relative top-0 h-fit">
        <TopPlay />
      </div>
      <div className="flex-1 h-fit pb-40">
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/around-you" element={<AroundYou />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-songs" element={<TopSongs />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
