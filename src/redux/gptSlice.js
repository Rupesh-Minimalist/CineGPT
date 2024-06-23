import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({

    name:"gpt",
    initialState:{
        showGPTsearch:false
    },
    reducers:{
        toggleGPTbtn:(state,action)=>{
            state.showGPTsearch=!state.showGPTsearch
        }
    }
})

export const {toggleGPTbtn}=gptSlice.actions;
export default gptSlice.reducer;