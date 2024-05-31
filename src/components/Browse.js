import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {


  useNowPlayingMovies(); // calling hook

  
  return (
    <>      
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
            <div className='bg-black h-screen w-full'></div>
    </>
  )
}

export default Browse