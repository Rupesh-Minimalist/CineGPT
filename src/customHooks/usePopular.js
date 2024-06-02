import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { API_OPTIONS_POPULAR } from "../utils/constant";
import { addPopularMovies } from "../redux/movieSlice";

const usePopular=()=>{

    let dispatch=useDispatch();

    useEffect(()=>{
        fetchPopular();
    },[])

    async function fetchPopular(){


        let response=await fetch("https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_OPTIONS_POPULAR);
    
        let ActualDATA=await response.json();
        let list=ActualDATA.results;
        
        dispatch(addPopularMovies(list));
    
    }
}

export default usePopular;

