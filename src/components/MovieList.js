import React from 'react';
import MovieCard from './MovieCard';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  const handleScrollLeft = () => {
    const foodCategory = document.querySelector('.categories');
    foodCategory.scrollLeft -= 480;
  };

  const handleScrollRight = () => {
    const foodCategory = document.querySelector('.categories');
    foodCategory.scrollLeft += 480;
  };

  return (
    <>
      <div className='mb-5 '>
        <div className="text-white font-bold flex justify-between ml-14 ">
          <h1 className="text-xl">{title}</h1>
          <div className="flex mt-3 ">
            <div
              className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] mx-2 bg-gray-800 rounded-full mb-3"
              onClick={handleScrollLeft}
            >
              <FaArrowLeft />
            </div>
            <div
              className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] mx-2 bg-gray-800 rounded-full"
              onClick={handleScrollRight}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto scroll-smooth no-scrollbar mr-2">
          <div className="categories flex gap-8 justify-around pl-14  ">
            {movies.map((x) => (
              <MovieCard key={x.id} posterImg={x.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
