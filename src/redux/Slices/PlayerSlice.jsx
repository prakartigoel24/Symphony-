import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      
    },

    nextSong: (state, action) => {

    },

    prevSong: (state, action) => {
      
    },

    playPause: (state, action) => {
     
    },

    selectGenreListId: (state, action) => {
      
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;