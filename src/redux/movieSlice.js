import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({

    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        PopularMovies:null,
        TopRatedMovies:null,
        UpcomingMovies:null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies:(state,actions)=>{
            state.NowPlayingMovies=actions.payload
        },
        addPopularMovies:(state,actions)=>{
            state.PopularMovies=actions.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;