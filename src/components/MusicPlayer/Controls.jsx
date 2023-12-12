import React from 'react'
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";
import { FaShuffle, FaRepeat } from "react-icons/fa6";


const Controls = () => {
  return (
    <div className='bg-yellow-600 grid grid-flow-col w-full h-12 items-center justify-around'>
      <FaRepeat  size={18} className=''/>
      <IoMdSkipBackward size={25} className=''/>
      <FaPlayCircle size={36} className=''/>
      <FaPauseCircle size={36} className=''/>
      <IoMdSkipForward size={25} className=''/>
      <FaShuffle size={18} className=''/>
    </div>
  )
}

export default Controls