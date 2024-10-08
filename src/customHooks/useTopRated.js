import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS_TOP_RATED, CORSProxy } from "../utils/constant";
import { addTopRatedMovies } from "../redux/movieSlice";

const useTopRated=()=>{

    let dispatch=useDispatch();

    const ismovie=useSelector(store=>store.movies.TopRatedMovies)

    useEffect(()=>{
      if(!ismovie) fetchTopRated();
    },[])

    async function fetchTopRated(){


        let response=await fetch(CORSProxy+"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS_TOP_RATED);
    
        let ActualDATA=await response.json();
        let list=ActualDATA.results;

        dispatch(addTopRatedMovies(list));
    
    }
}

export default useTopRated;

