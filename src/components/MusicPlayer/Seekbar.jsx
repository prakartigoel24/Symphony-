import React from 'react'

const Seekbar = () => {
  return (
    <div className='bg-blue-500 hidden sm:grid w-full h-8 items-center justify-center sm:grid-flow-col'>
        <p>0.00</p>
        <input type="range" name="" id="" className='mx-4 w-56 h-1 lg:w-80 xl:w-96 cursor-pointer' />
        <p>4.43</p>
    </div>
  )
}

export default Seekbar