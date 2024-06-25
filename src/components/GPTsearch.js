import React from 'react'
import GPTinput from './GPTinput'
import GPTsuggestion from './GPTsuggestion'
import gptImage from "../images/gptImage.jpg"

const GPTsearch = () => {
  return (
    <div >
      <div className=' -z-10 fixed '>
        <img src={gptImage} alt='img' className='h-screen object-cover md:h-full w-screen'></img>
      </div>
      <div className=' '>
        <GPTinput/>
        <GPTsuggestion/>
      </div>  
      
    </div>
  )
}

export default GPTsearch