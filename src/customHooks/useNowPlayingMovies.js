import {API_OPTIONS} from "../utils/constant"
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../redux/movieSlice';
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
  
  const dispatch =useDispatch()

  const ismovie=useSelector(store=>store.movies.addNowPlayingMovies);

  useEffect(()=>{
    if (!ismovie) fetchNowPlaying();
  },[])

  async function fetchNowPlaying(){

    try{
      let response= await fetch('https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      let ActualDATA=await response.json();
      let list=ActualDATA.results;
      // console.log(list);
      dispatch(addNowPlayingMovies(list))

    }
    catch(err){
      // console.log("Failed to fetch",err)
    }
  }
 
}

export default useNowPlayingMovies;