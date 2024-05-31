import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";


const VideoTitle = ({title,overview}) => {

  return (
    <>
    <div className='text-white pt-72 absolute bg-gradient-to-r from-black w-1/2 h-[120%] '>
        <h1 className='text-5xl font-bold text-red-600 pl-6 p-3 '>{title}</h1>
        <p className='pl-6  opacity-80 pt-4'>{overview}</p>
        <div className='flex pl-6 p-3'>
            <button className='px-5 p-2 bg-white text-black rounded text-lg font-semibold flex items-center hover:opacity-80'> <p><FaPlay /></p> <p className='pl-3'>Play</p></button>
            <button className='px-5 p-2 bg-gray-200 bg-opacity-75 text-white rounded text-lg font-semibold flex items-center ml-4 hover:opacity-80'> <p><FiInfo/></p> <p className='pl-3'>More Info</p></button>
        </div>
    </div>

    </>
  )
}

export default VideoTitle