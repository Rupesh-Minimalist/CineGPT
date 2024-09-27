import React from 'react'
import MovieList from "./MovieList"
import { useSelector } from 'react-redux'

const GPTsuggestion = () => {
  const {movieResults,movieNames}=useSelector(store=>store.gpt)
  
  if(!movieNames) return null;
  return (
    <div className=' bg-black bg-opacity-50 pb-10 pr-5 pt-96 md:pt-80 -ml-6 md:ml-0'>
     {    movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]}/>
        ))
      }
      
    </div>
  )
}

export default GPTsuggestion