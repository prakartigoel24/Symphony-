import React, { useRef } from 'react'

const Player = () => {
  const audioRef = useRef();
  return (
    <audio src="" ref={audioRef} />
    )
}

export default Player