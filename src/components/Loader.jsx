import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center my-56">
        <div className="w-28 h-28 border-8 animate-spin border-gray-300 border-t-amber-950 rounded-full">
          <img src="/logo1-removebg.png" alt="Loading img ..." />
        </div>
      <h2 className="py-5">Loading...</h2>
    </div>
  );
};

export default Loader;
