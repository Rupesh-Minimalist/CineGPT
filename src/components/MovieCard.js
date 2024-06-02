import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterImg}) => {
  return (
    <div className='w-36'>
        <img src={IMG_CDN_URL+posterImg} alt='poster' className='rounded-xl '></img>
    </div>
  )
}

export default MovieCard