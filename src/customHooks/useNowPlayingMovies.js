import { API_OPTIONS } from "../utils/constant";
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
        "https://proxy.cors.sh/https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
     
      let ActualDATA = await response.json();
      let list = ActualDATA.results;
  
      dispatch(addNowPlayingMovies(list));
   
  }
};

export default useNowPlayingMovies;
