import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({

    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies:(state,actions)=>{
            state.NowPlayingMovies=actions.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },
    }
})

export const {addNowPlayingMovies,addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;