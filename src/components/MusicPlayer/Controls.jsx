import React from 'react'
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";
import { FaShuffle, FaRepeat } from "react-icons/fa6";


const Controls = () => {
  return (
    <div className='bg-yellow-600 grid grid-flow-col w-full h-12 items-center justify-around'>
      <FaRepeat  size={20} className=''/>
      <IoMdSkipBackward size={26} className=''/>
      <FaPlay size={36} className=''/>
      <FaPause size={36} className=''/>
      <IoMdSkipForward size={26} className=''/>
      <FaShuffle size={20} className=''/>
    </div>
  )
}

export default Controls