import { useEffect } from 'react'
import { TRAILER_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../redux/movieSlice';

const useTrailer = (movieId) => {

    const dispatch=useDispatch();
    useEffect(()=>{
        fetchTrailer();
    },[])

    async function fetchTrailer(){

        let response=await fetch("https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", TRAILER_OPTIONS)

        let ActualDATA= await response.json();
        let AllTrailer=ActualDATA.results.filter((x)=>x.type==="Trailer");
        let Trailer=AllTrailer[0]
        // console.log(Trailer);

        dispatch(addTrailerVideo(Trailer))

        
    }
}

export default useTrailer