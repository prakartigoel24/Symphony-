import React from 'react'
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

const Volumebar = () => {
  return (
    <div className='bg-amber-900 w-full hidden md:grid md:col-span-2 md:justify-center md:items-center md:grid-flow-col'>
    <BsFillVolumeUpFill size={25} color="#FFF" />
    {/* <BsVolumeDownFill size={25} color="#FFF" /> */}
    {/* <BsFillVolumeMuteFill size={25} color="#FFF"  /> */}
    <input
      type="range"
      className="lg:w-48 h-1"
    />
    </div>
  )
}

export default Volumebar