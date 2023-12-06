import React from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopSongs from './components/TopSongs';
import TopArtists from './components/TopArtists';
import AroundYou from './components/AroundYou';

const App = () => {
  return (
    <div className="main">
        <div className="header flex flex-row justify-between items-center">
        <SearchBar />
        <Navbar />
      </div>
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/around-you" element={<AroundYou />} />
            <Route path="/top-artists" element={<TopArtists />} />
            <Route path="/top-songs" element={<TopSongs />} />
            {/* <Route path="/artists/details/:artistId" element={} />
            <Route path="/song/details/:songId" element={} /> */}
          </Routes>
    </div>
  );
};

export default App;
