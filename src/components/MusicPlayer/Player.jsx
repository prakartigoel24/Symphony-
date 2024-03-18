import React, { useEffect, useRef } from 'react'

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
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

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    audioRef.current.currentTime = seekTime;
  }, [seekTime]);


  return (
    <audio 
      src={activeSong?.hub?.actions[1]?.uri}
      ref={audioRef} 
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
    )
}

export default Player