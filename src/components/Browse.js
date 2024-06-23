import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from "./SecondaryContainer";
import usePopular from '../customHooks/usePopular';
import useTopRated from '../customHooks/useTopRated';
import useUpcoming from '../customHooks/useUpcoming';
import GPTSearch from "./GPTsearch";
import { useSelector } from 'react-redux';

const Browse = () => {


  useNowPlayingMovies(); // calling custom hook
  usePopular();
  useTopRated();
  useUpcoming();

  const gptView=useSelector(store=>store.gpt.showGPTsearch)

  
  return (
    <>      
            <Header/>
            {gptView ? 
              <GPTSearch/>
              :
              <>
               <MainContainer/>
               <SecondaryContainer/>
              </>
            
            }
              
    </>
  )
}

export default Browse