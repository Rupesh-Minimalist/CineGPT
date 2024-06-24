import React from 'react'
import GPTinput from './GPTinput'
import GPTsuggestion from './GPTsuggestion'
import { loginImage } from '../utils/constant'
import gptImage from "../images/gptImage.jpg"

const GPTsearch = () => {
  return (
    <div>
      <div className=' -z-10 fixed'>
        <img src={gptImage} alt='img'></img>
      </div>  
      <GPTinput/>
      <GPTsuggestion/>
    </div>
  )
}

export default GPTsearch