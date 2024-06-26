import { useSelector } from "react-redux";
import useTrailer from "../customHooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const vid = useSelector((store) => store.movies?.trailerVideo);

  useTrailer(movieId);

  return (
    <div className="relative overflow-hidden w-full md:pt-[56.25%] pt-[730px]">
      <iframe
        className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 scale-150"
        src={
          "https://www.youtube.com/embed/" + vid?.key + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
