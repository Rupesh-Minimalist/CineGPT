import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterImg}) => {
  if(!posterImg) return ;
  return (
    <div className='w-36 hover:scale-105 transition-all'>
        <img src={IMG_CDN_URL+posterImg} alt='poster' className='rounded-xl '></img>
    </div>
  )
}

export default MovieCard