import React from "react";
import { FaPlay } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="text-white pt-72 absolute bg-gradient-to-r from-black w-1/2 h-[122%] z-10">
        <h1 className="text-2xl pt-20 md:pt-0 md:text-5xl font-bold text-red-600 pl-4 md:pl-8 p-3 ">
          {title}
        </h1>
        <p className="text-sm md:text-md opacity-80 pl-4 md:pl-8 hidden md:inline-block">
          {overview}
        </p>
        <div className="flex pl-4 md:pl-8 p-3 h-14">
          <button className="px-2 py-0 text-xs md:px-5 md:p-2 bg-white text-black rounded md:text-lg font-semibold flex items-center hover:opacity-80">
            {" "}
            <p>
              <FaPlay />
            </p>{" "}
            <p className="pl-3">Play</p>
          </button>
          <button className="px-2 py-0 text-xs md:px-5 md:p-2 bg-gray-200 bg-opacity-75 text-white rounded md:text-lg font-semibold flex items-center ml-4 hover:opacity-80">
            {" "}
            <p>
              <FiInfo />
            </p>{" "}
            <p className="pl-3">More Info</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
