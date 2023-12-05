import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <div
      className="bg-transparent p-6 text-sky-200 sticky w-10 rounded-xl z-50 flex h-16 justify-center items-center"
    >
      <div
        className={`flex flex-col gap-3 absolute top-16 px-3 py-3 bg-transparent w-full font-semibold ${
          !navbarOpen ? "flex" : "hidden"
        } `}
      >
        {/* <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/" className="hover:text-gray-400">
          Coins
        </Link>
        <Link to="/" className="hover:text-gray-400">
          Exchanges
        </Link>
        <Link to="/" className="hover:text-gray-400">
          Developer
        </Link> */}
      </div>

      <button onClick={() => setNavbarOpen(!navbarOpen)} className="">
        {!navbarOpen ? (
          <AiOutlineClose size={24} color={"white"} />
        ) : (
          <TiThMenu size={24} />
        )}
      </button>
    </div>
  );
};
export default Navbar;
