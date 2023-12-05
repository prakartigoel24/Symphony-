import React from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import { useGetGlobalSongsDataQuery } from "./redux/APIs/ShazamApi1";

const App = () => {
  const { data, isError , isLoading , error} = useGetGlobalSongsDataQuery();

  return (
    <div className="main">
      <div className="header flex flex-row justify-between items-center">
        <SearchBar />
        <Navbar />

        <div>
          {!isError ? <>{console.log(data?.tracks)}</> : "Error is there...."}
        </div>
      </div>
    </div>
  );
};

export default App;
