import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS_POPULAR } from "../utils/constant";
import { addPopularMovies } from "../redux/movieSlice";

const usePopular=()=>{

    let dispatch=useDispatch();
    const ismovie=useSelector(store=>store.movies.PopularMovies)

    useEffect(()=>{
        if(!ismovie) fetchPopular();
    },[])

    async function fetchPopular(){
        
        let response=await fetch("https://proxy.cors.sh/https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS_POPULAR);
    
        let ActualDATA=await response.json();
        let list=ActualDATA.results;
        
        dispatch(addPopularMovies(list));
    
    }
}

export default usePopular;

