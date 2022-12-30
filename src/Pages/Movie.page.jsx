import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/Movie.context';
import MovieLayoutHoc from '../Layouts/Movie.layout';
import Slider from 'react-slick';
import { FaCcVisa, FaApplePay } from 'react-icons/fa'

const MoviePage = () => {
    const { id } = useParams();

    const { movie } = useContext(MovieContext);

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
            const getRecommendMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(getRecommendMovies.data.results);
        }
        requestRecommendedMovies();
    }, [id]);

    const setingCast = {};

    const settings = {};

    return <>
        {/* MovieHero */}
        <div className='py-12 container px-4 lg:ml-20 lg:w-2/1'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-gray-800 font-bold text-2xl'>About the movies</h1>
                <p>{movie.overview}</p>
            </div>

            <div className='my-8'>
                <hr />
            </div>

            <div className='my-8'>
                <h2 className='text-gray-800 font-bold text-2xl my-3'>Applicable offers</h2>
                <div className='flex flex-col gap-3 lg:flex-row'>
                    <div className='flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
                        <div className='w-8 h-8'>
                            <FaCcVisa className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MovieLayoutHoc(MoviePage);