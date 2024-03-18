import React from 'react'
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";
import { FaShuffle, FaRepeat } from "react-icons/fa6";


const Controls = ({isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong}) => {
  return (
    <div className='bg-yellow-600 grid grid-flow-col w-full h-12 items-center justify-around'>

      <FaRepeat  size={18} className='cursor-pointer' color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)}/>

      {currentSongs?.length && <IoMdSkipBackward size={25} color="#FFF" className='cursor-pointer' onClick={handlePrevSong}/>}

      {isPlaying ? (
      <FaPauseCircle size={36} className='cursor-pointer' color="#FFF" onClick={handlePlayPause}/>
      ): (
      <FaPlayCircle size={36} className='cursor-pointer' color="#FFF" onClick={handlePlayPause}/>
      )}


      {currentSongs?.length && <IoMdSkipForward size={25} color="#FFF" className='cursor-pointer' onClick={handleNextSong}/>}

      <FaShuffle size={18} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className='cursor-pointer'/>

    </div>
  )
}

export default Controls