import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { API_OPTIONS_UPCOMING } from "../utils/constant";
import { addUpcomingMovies } from "../redux/movieSlice";

const useUpcoming=()=>{

    let dispatch=useDispatch();

    useEffect(()=>{
        fetchUpcoming();
    },[])

    async function fetchUpcoming(){


        let response=await fetch("https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS_UPCOMING);
    
        let ActualDATA=await response.json();
        let list=ActualDATA.results;

        dispatch(addUpcomingMovies(list));
    
    }
}

export default useUpcoming;
