import React from 'react'

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {

  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className='bg-blue-500 hidden sm:grid w-full h-8 items-center justify-center sm:grid-flow-col'>
        <p>{value === 0 ? '0:00' : getTime(value)}</p>
        <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className='mx-4 w-56 h-1 lg:w-80 xl:w-96 cursor-pointer' 
        />
        <p>{max === 0 ? '0:00' : getTime(max)}</p>
    </div>
  )
}

export default Seekbar