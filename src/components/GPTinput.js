import React, { useRef, useState } from 'react';
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from 'react-redux';
import genAI from '../utils/genAI';
import { API_OPTIONS_SEARCH } from '../utils/constant';
import { addGptMovieResult } from '../redux/gptSlice';
import { ClipLoader } from 'react-spinners';  

const GPTinput = () => {
  const choosenlang = useSelector(store => store.config.lang);
  const movPresent=useSelector(store=>store.gpt.movieResults);
  const inputText = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); 

  const searchTMDB = async (movie) => {
    let response = await fetch("https://proxy.cors.sh/https://api.themoviedb.org/3/search/movie?query="
      + movie +
      "&include_adult=false&language=en-US&page=1", API_OPTIONS_SEARCH);

    let data = await response.json();
    let list = data.results;
    return list;
  }

  const HandleSearchBtn = async () => {
    setLoading(true);  

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        inputText.current.value +
        ". Only give me names of 5 movies, comma separated like the example result give ahead. Example Result: Don,Sholay,Gadar,Lakshay,Shahenshah";

      const result = await model.generateContent(gptQuery);
      const response = await result.response;
      const listofMov = response.text().split(",");
  

      const promiseArray = listofMov.map(movie => searchTMDB(movie));
      const TMDBresults = await Promise.all(promiseArray);   // because searchTMDB is async

      dispatch(
        addGptMovieResult({ movieNames: listofMov, movieResults: TMDBresults })
      );
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);  // Set loading state to false
    }
  }

  return (
    <div >
      
      <form onSubmit={e => e.preventDefault()}>
        <div className='absolute top-[30%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 '>
          {!movPresent && <p className='text-white font-bold text-2xl text-center hidden md:inline-block  absolute top-20 w-full bg-black bg-opacity-40 rounded-3xl p-5'>Confused what to watch ? Try searching:
          <br></br> <span className='f font-normal text-lg opacity-75 '>Suggest some motivational movies for study. <br></br> Recommend Shahrukh Khan action movies. <br></br> Suggest me Bollywood old comedy movies. </span>
          </p> }

          <input type='text' ref={inputText} className='rounded-2xl md:rounded-l-xl md:rounded-none w-[360px] md:w-[500px] pl-3 py-3 text-white bg-gray-700 ' placeholder={lang[choosenlang].gptSearchPlaceholder}></input>

          <button className='rounded-md md:rounded-r-lg md:rounded-none bg-animated-gradient px-10 md:px-5 py-2 md:py-3 text-white absolute top-14 md:top-0 left-1/2 md:static -translate-x-1/2 md:translate-x-0 w-auto md:w-24' onClick={HandleSearchBtn} disabled={loading}>
            {loading ? <ClipLoader size={18} color={"#ffffff"} className='relative top-1' /> : lang[choosenlang].search}
          </button>

          

        </div>
      </form>
    </div>
  )
}

export default GPTinput;
