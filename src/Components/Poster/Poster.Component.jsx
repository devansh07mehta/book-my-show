import React from "react";
import { Link } from "react-router-dom";

const MoviePoster = (props) => {
    return (
        <Link to={`/movie/${props.id}`}>
            <div className="flex flex-col items-start gap-2 px-1 md:px-3">
                <div className="h-44 md:h-79" style={{ height: "24rem" }}>
                    <img
                        src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                        alt="poster"
                        className="w-full h-full rounded-md"
                    />
                </div>
                <h3
                    className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"
                        }`}
                >
                    {props.title}
                </h3>
                {/* <p
      className={`text-lg font-bold ${
        props.isDark ? "text-white" : "text-gray-700"
      }`}
    >
      {props.subtitle}
    </p> */}
            </div>
        </Link>
    );
};

const PlayPoster = (props) => {
    const route = 'https://in.bookmyshow.com/events/'
    const { value } = props;
    return (
        <a
            href={route + value}
            target="_blank"
            rel="noreferrer"
        >
            <div className="flex flex-col items-start gap-2 px-1 md:px-4">
                <div className="w-full h-40 md:h-79" style={{ height: "24rem" }}>
                    <img
                        src={props.src}
                        alt="poster"
                        className="w-full h-full rounded-md object-cover object-center"
                    />
                </div>
                <h3
                    className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"
                        }`}
                >
                    {props.title}
                </h3>
            </div>
        </a >
    );
};

const Poster = (props) => {
    if (props.isPlay) {
        return <PlayPoster {...props} />;
    }
    return <MoviePoster {...props} />;
};

export default Poster;
