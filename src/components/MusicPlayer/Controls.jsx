import React from 'react'
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";
import { FaShuffle, FaRepeat } from "react-icons/fa6";


const Controls = ({isPlaying,isActive,currentSongs}) => {
  return (
    <div className='bg-yellow-600 grid grid-flow-col w-full h-12 items-center justify-around'>
      <FaRepeat  size={18} className='cursor-pointer'/>
      <IoMdSkipBackward size={25} className='cursor-pointer'/>
      <FaPlayCircle size={36} className='cursor-pointer'/>
      <FaPauseCircle size={36} className='cursor-pointer'/>
      <IoMdSkipForward size={25} className='cursor-pointer'/>
      <FaShuffle size={18} className='cursor-pointer'/>
    </div>
  )
}

export default Controls