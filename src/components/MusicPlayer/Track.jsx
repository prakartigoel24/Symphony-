import React from 'react'

const Track = () => {
  return (
    <div className='bg-red-600 grid col-span-2 w-full grid-flow-col items-center justify-center'>
      <div className='hidden sm:block h-16 w-16 mr-4'>
        <img src="/logo1.jpg" alt="Song img" className=' rounded-full'/>
      </div>
      <div>
        <p className='font-semibold truncate'>Song Name</p>
        <p className='text-gray-300 truncate'>Artist name</p>
      </div>
    </div>
  )
}

export default Track