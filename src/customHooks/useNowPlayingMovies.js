import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const isMoviesLoaded = useSelector((store) => store.movies.addNowPlayingMovies.length > 0);

  useEffect(() => {
    if (!isMoviesLoaded) {
      fetchNowPlaying();
    }
  }, [isMoviesLoaded]);

  async function fetchNowPlaying() {
    try {
      const response = await fetch('./netlify/functions/nowPlaying', API_OPTIONS);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const movies = data.results;
      dispatch(addNowPlayingMovies(movies));
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  }
};

export default useNowPlayingMovies;
