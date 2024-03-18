import React, { useRef } from 'react'

const Player = ({isPlaying,activeSong,currentIndex}) => {
  const audioRef = useRef();

  if(audioRef.current)
  {
    if(isPlaying){
      var playPromise = audioRef.current.play();
      if(playPromise!==undefined)
      {
        playPromise.then(_=>{
          console.log("Playing track");
        })
        .catch(error=>{
          console.error(error);
        })
      }
    }
    else{
      audioRef.current.pause();
    }
  }
  return (
    <audio 
    src={activeSong?.hub?.actions[1]?.uri}
    ref={audioRef} />
    )
}

export default Player