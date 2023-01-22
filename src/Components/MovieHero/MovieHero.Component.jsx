import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";
import MovieInfo from "./MovieInfo.Component";

const MovieHero = () => {
    const { movie, rentMovie, buyMovie } = useContext(MovieContext);
    const genres = movie.genres?.map(({ name }) => name).join(", ");
    // console.log(genres);

    return (
        <>
            <div>
                {/* Mobile & Tab Screen Size */}
                <div className='md:hidden w-full'>
                    <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="cover poster" className='rounded' style={{ width: "100%" }} />
                </div>

                <div className='flex flex-col gap-3 md:hidden'>
                    <div className='flex flex-col-reverse gap-3 px-4 my-3'>
                        <div className='text-black flex flex-col gap-2 md:px-4'>
                            <h4>5K rating</h4>
                            <h4>Hindi, Gujarati, English, Kannada, Telugu</h4>
                            <h4>
                                {movie.runtime} min | {genres}
                            </h4>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 md:px-4 md:w-screen text-xl px-4'>
                        <button onClick={rentMovie} className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>Rent ₹ 149
                        </button>
                        <button onClick={buyMovie} className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>Buy ₹ 159
                        </button>
                    </div>
                </div>

                {/* Large Screen Device */}
                <div className='relative hidden w-full md:flex' style={{ height: "40rem" }}>
                    <div className='absolute z-10 w-full h-full' style={{
                        backgroundImage: "linear-gradient(90deg, rgb(34,34,34) 24.95%, rgb(34,34,34) 38.3%, rgb(34,34,34,0.04) 97.47%, rgb(34,34,34) 100%)"
                    }} />

                    <div className='absolute z-30 left-24 top-40 flex items-center gap-10'>
                        <div className='w-64 h-95' style={{
                            height: "24rem"
                        }}>
                            <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster"
                                className='w-full h-full rounded-lg' />
                        </div>

                        <div>
                            <MovieInfo movie={movie} />
                        </div>
                    </div>

                    <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Background Poster"
                        className='w-full object-cover absolute' style={{ height: "100%" }} />
                </div>
            </div>
        </>
    );
}

export default MovieHero;