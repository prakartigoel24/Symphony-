import React from 'react'

const Track = ({isPlaying,isActive,activeSong}) => {
  return (
    <div className='bg-red-600 grid col-span-2 w-full grid-flow-col items-center justify-center'>
      <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
        <img src={activeSong?.images?.coverart} alt="cover art" className=' rounded-full'/>
      </div>
      <div>
        <p className='font-semibold truncate'>{activeSong?.title ? activeSong?.title : 'No active Song'}</p>
        <p className='text-gray-300 truncate'> {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}</p>
      </div>
    </div>
  )
}

export default Track