import React from 'react'
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

const Volumebar = () => {
  return (
    <div className='bg-amber-900 w-full hidden md:grid md:col-span-2 md:justify-center md:items-center md:grid-flow-col'>
    <BsFillVolumeUpFill size={25} color="#FFF" className="cursor-pointer"/>
    {/* <BsVolumeDownFill size={25} color="#FFF" className="cursor-pointer"/> */}
    {/* <BsFillVolumeMuteFill size={25} color="#FFF"  className="cursor-pointer"/> */}
    <input
      type="range"
      className="lg:w-48 h-1 cursor-pointer ml-3"
    />
    </div>
  )
}

export default Volumebar