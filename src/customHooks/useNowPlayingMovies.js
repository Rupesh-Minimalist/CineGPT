import { API_OPTIONS, CORSProxy } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const ismovie = useSelector((store) => store.movies.addNowPlayingMovies);

  useEffect(() => {
    if (!ismovie) fetchNowPlaying();
  }, []);

  async function fetchNowPlaying() {
   
      let response = await fetch(
        "../../netlify/functions/nowPlaying",
        API_OPTIONS
      );
     
      let ActualDATA = await response.json();
      let list = ActualDATA.results;
  
      dispatch(addNowPlayingMovies(list));
   
  }
};

export default useNowPlayingMovies;
