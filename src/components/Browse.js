import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from "./SecondaryContainer";
import usePopular from '../customHooks/usePopular';
import useTopRated from '../customHooks/useTopRated';
import useUpcoming from '../customHooks/useUpcoming';

const Browse = () => {


  useNowPlayingMovies(); // calling custom hook
  usePopular();
  useTopRated();
  useUpcoming();

  
  return (
    <>      
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
    </>
  )
}

export default Browse