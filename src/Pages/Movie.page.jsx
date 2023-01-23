import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/Movie.context';
import MovieLayoutHoc from '../Layouts/Movie.layout';
import Slider from 'react-slick';
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa'
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component'
import MovieHero from '../Components/MovieHero/MovieHero.Component';
import Cast from "../Components/Cast/Cast.Component";

const MoviePage = () => {
    const { id } = useParams();

    const { movie, setMovie } = useContext(MovieContext);

    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        }
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        }
        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(getRecommendedMovies.data.results);
        }
        requestRecommendedMovies();
    }, [id]);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        };
        requestMovie();
    }, [id]);

    const settingCast = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const settings = {
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 4
                },
            },
        ]
    };

    return <>
        {/* MovieHero */}
        <MovieHero />
        <div className='my-12 px-4 lg:mx-20 lg:w-2/1'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-gray-800 font-bold text-2xl'>About the movies</h1>
                <p>{movie.overview}</p>
            </div>

            <div className='my-8'>
                <hr />
            </div>

            <div className='my-8'>
                <h2 className='text-gray-800 font-bold text-2xl my-3'>Applicable offers</h2>
                <div className='flex flex-col gap-3 lg:flex-row lg:w-2/3'>
                    <div className='flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
                        <div className='w-8 h-8'>
                            <FaCcVisa className='w-full h-full' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <h3 className='text-gray-700 text-xl font-bold'>Visa Stream Offer</h3>
                            <p className='text-gray-600'>Get 50% off upto INR 150 on all <b>RuPay</b> cards on BookMyShow Stream</p>
                        </div>
                    </div>
                    <div className='flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
                        <div className='w-8 h-8'>
                            <FaCcApplePay className='w-full h-full' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <h3 className='text-gray-700 text-xl font-bold'>Film Pass</h3>
                            <p className='text-gray-600'>Get 50% off upto INR 150 on all <b>RuPay</b> cards pn BookMyShow Stream</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-8'>
                <hr />
            </div>

            {/* Cast & Crew Slider */}
            <div className='my-8'>
                <h2 className='text-gray-800 font-bold text-2xl mb-4'>
                    Cast and Crew
                </h2>
                <Slider {...settingCast}>
                    {cast.map((castData) => (
                        <Cast
                            image={castData.profile_path}
                            castName={castData.original_name}
                            role={castData.character}
                        />
                    ))}
                </Slider>
            </div>

            <div className='my-8'>
                <hr />
            </div>

            {/* Recommended movie slider */}
            <div className='my-8'>
                <PosterSlider config={settings} title="Recommended Movies" posters={recommendedMovies} isDark={false} />
            </div>

            <div className='my-8'>
                <hr />
            </div>

            {/* Exclusive movie slide => Similar Movies */}
            <div className='my-8'>
                <PosterSlider config={settings} title="BMS XCLUSIVE" posters={similarMovies} isDark={false} />
            </div>
        </div>
    </>
}

export default MovieLayoutHoc(MoviePage);