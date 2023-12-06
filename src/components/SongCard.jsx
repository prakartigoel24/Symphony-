import React from 'react'
import { useDispatch } from 'react-redux'

const SongCard = ({song, i}) => {
  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 rounded-lg cursor-pointer mb-4 mt-4 items-center justify-center'>
      <div className="relative w-full h-56 group">
        <div className="absolute inset-0 justify-center items-center group-hover:flex">

        </div>
        <img src={song?.images?.coverart} alt="song_img" />
      </div>
      <div className="mt-4 flex flex-col justify-center items-center">
        <p className='font-semibold text-lg'>{song?.title}</p>
        <p className='text-sm truncate text-gray-300 mt-1'>{song?.subtitle}</p>
      </div>
    </div>
  )
}

export default SongCard