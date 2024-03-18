import React from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

const Volumebar = ({ value, min, max, onChange, setVolume }) => {
  return (
    <div className=" w-full hidden md:grid md:col-span-2 md:justify-center md:items-center md:grid-flow-col">
      {value <= 1 && value > 0.5 && (
        <BsFillVolumeUpFill
          size={25}
          color="#FFF"
          className="cursor-pointer"
          onClick={() => setVolume(0)}
        />
      )}

      {value <= 0.5 && value > 0 && (
        <BsVolumeDownFill
          size={25}
          color="#FFF"
          onClick={() => setVolume(0)}
          className="cursor-pointer"
        />
      )}
      {value === 0 && (
        <BsFillVolumeMuteFill
          size={25}
          color="#FFF"
          onClick={() => setVolume(1)}
          className="cursor-pointer"
        />
      )}

      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="lg:w-48 h-1 cursor-pointer ml-3"
      />
    </div>
  );
};

export default Volumebar;
