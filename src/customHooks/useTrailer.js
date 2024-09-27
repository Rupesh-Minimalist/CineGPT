import { useEffect } from 'react'
import { CORSProxy, TRAILER_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../redux/movieSlice';

const useTrailer = (movieId) => {

    const dispatch=useDispatch();
    const ismovie=useSelector(store=>store.movies.trailerVideo)

    useEffect(()=>{
       if(!ismovie) fetchTrailer();
    },[])

    async function fetchTrailer(){

        let response=await fetch(CORSProxy+"https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", TRAILER_OPTIONS)

        let ActualDATA= await response.json();
        let AllTrailer=ActualDATA.results.filter((x)=>x.type==="Trailer");
        let Trailer=AllTrailer[0]

        dispatch(addTrailerVideo(Trailer))

    }
}

export default useTrailer