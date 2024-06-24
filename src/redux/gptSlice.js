import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({

    name:"gpt",
    initialState:{
        showGPTsearch:false,
        movieResults: null,
        movieNames: null,
    },
    reducers:{
        toggleGPTbtn:(state,action)=>{
            state.showGPTsearch=!state.showGPTsearch
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
          },
    }
})

export const {toggleGPTbtn,addGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;