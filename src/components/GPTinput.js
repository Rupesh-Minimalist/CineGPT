import React, { useRef } from 'react'
import lang from "../utils/languageConstants"
import { useDispatch, useSelector } from 'react-redux'
import genAI from '../utils/genAI'
import { API_OPTIONS_SEARCH } from '../utils/constant'
import { addGptMovieResult } from '../redux/gptSlice'


const GPTinput = () => {

  const choosenlang=useSelector(store=>store.config.lang)
  

  const inputText=useRef(null)
  const dispatch=useDispatch()
  const searchTMDB=async(movie)=>{

    let response= await fetch("https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/search/movie?query="
      +movie+
      "&include_adult=false&language=en-US&page=1", API_OPTIONS_SEARCH)

    let data= await response.json();
    let list=data.results

     return list;
  }

  const HandleSearchBtn=async()=> {
  
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      inputText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result give ahead. Example Result: Don,Sholay,Gadar,Lakshay,Shahenshah";

    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const listofMov = response.text().split(",");
    console.log(listofMov);

    const promiseArray=listofMov.map(movie=>searchTMDB(movie));
    const TMDBresults= await Promise.all(promiseArray)   // beacuse seatchTMDB is async
    console.log(TMDBresults);

    dispatch(
      addGptMovieResult({ movieNames: listofMov, movieResults: TMDBresults })
    );


  }

  return (
    <div >
     <form onSubmit={e=>e.preventDefault()}>

        <div className='absolute top-[30%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <input type='text' ref={inputText} className='rounded-2xl md:rounded-l-xl w-[360px] md:w-[500px] pl-3 py-3  text-white bg-gray-700 ' placeholder={lang[choosenlang].gptSearchPlaceholder}></input>
            <button className='rounded-md md:rounded-r-xl bg-animated-gradient px-10 md:px-5 py-2 md:py-3  text-white absolute top-14 left-1/2 -translate-x-1/2 md:static md:top-0 md:-translate-x-1/2 md:left-0' onClick={HandleSearchBtn}>{lang[choosenlang].search}</button>
        </div>
     </form>

    </div>
  )
}

export default GPTinput