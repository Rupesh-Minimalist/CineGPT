import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux";

const SecondaryContainer = () => {

  const movList=useSelector(store=>store.movies)
  
  return (
    <div className='bg-black -mb-96'>
      <div className=' -mt-52 md:-mt-40 -ml-10 md:-ml-5 z-40 relative'>
        <MovieList title={"Now Playing"} movies={movList.NowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movList.TopRatedMovies}/>
        <MovieList title={"Popular"} movies={movList.PopularMovies}/>
        <MovieList title={"Upcoming Blockbusters"} movies={movList.UpcomingMovies}/>
        <MovieList title={"OLD is GOLD"} movies={movList.TopRatedMovies}/>
        {/* <MovieList title={"Horror"} movies={movList.NowPlayingMovies}/> */}
        
      </div>  
    </div>
    
  )
}

export default SecondaryContainer