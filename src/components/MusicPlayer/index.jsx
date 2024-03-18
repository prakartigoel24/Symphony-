import React from 'react'
import Track from './Track'
import Controls from './Controls'
import Seekbar from './Seekbar'
import Player from './Player'
import Volumebar from './Volumebar';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nextSong,prevSong,playPause,setActiveSong, selectGenreListId } from '../../redux/Slices/PlayerSlice'

const MusicPlayer = () => {

  const {currentSongs, currentIndex, isActive, isPlaying, activeSong, genreListId} = useSelector((state)=> state.player);

  const dispatch = useDispatch();

  return (
    <div className='bg-white fixed bottom-0 w-full grid md:grid-cols-8 grid-cols-6'>
        <Track
        isPlaying={isPlaying} 
        isActive={isActive} 
        activeSong={activeSong} />
        <div className='w-full md:col-start-3 col-span-4'>
        <Controls
        isPlaying={isPlaying}
        isActive={isActive}
        currentSongs={currentSongs}
        />
        <Seekbar/>
        <Player
        isPlaying={isPlaying}
        activeSong={activeSong}
        currentIndex={currentIndex}
        />
        </div>
        <Volumebar/>
    </div>
  )
}

export default MusicPlayer