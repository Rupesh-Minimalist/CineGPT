import React from 'react'
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux'


const GPTinput = () => {

  const choosenlang=useSelector(store=>store.config.lang)

  return (
    <div className=' '>
    <form >

        <div className='absolute top-56 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <input type='text' className='w-[500px] pl-3 py-3 rounded-l-xl text-white bg-gray-700' placeholder={lang[choosenlang].gptSearchPlaceholder}></input>
            <button className='rounded-r-xl bg-red-600 px-3 py-3 hover:bg-red-700  text-white'>{lang[choosenlang].search}</button>
        </div>


    </form>

    </div>
  )
}

export default GPTinput