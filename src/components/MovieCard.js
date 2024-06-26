import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterImg, name, ratings, date }) => {
  if (!posterImg) return null;

  return (
    <div className="w-44 ">
      <div className="overflow-hidden">
        <img
          src={IMG_CDN_URL + posterImg}
          alt="poster"
          className="rounded-xl transform transition-transform duration-300 hover:scale-110 w-full h-auto"
          style={{ height: "280px", objectFit: "cover" }}
        />
      </div>
      <p className="text-white font-semibold">{name}</p>
      <span className="text-white opacity-60">{date}</span>
      
        
    </div>
  );
};

export default MovieCard;
