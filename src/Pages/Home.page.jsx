import React, { useEffect, useState } from 'react'
import axios from 'axios';

// Components
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';

// Layout Hoc
import DefaultLayoutHoc from '../Layouts/Default.layout';

const HomePage = () => {
    const [recommendMovies, setrecommendMovies] = useState([]);
    const [premierMovies, setpremierMovies] = useState([]);
    const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get('/movie/popular');
            setrecommendMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get('/movie/top_rated');
            setpremierMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get('/movie/upcoming');
            setonlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);

    return (
        <>
            <HeroCarousel />
            <div className='container mx-auto px-2 md:px-12 my-12'>
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-2 my-3'>The best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            <div className='container mx-auto px-4 md:px-12 mt-20'>
                <PosterSlider title="Recommended Movies" subtitle="List of recommended movies" posters={recommendMovies} isDark={false} />
            </div>

            <div className='bg-premier-800 py-2'>
                <div className='container mx-auto md:px-2 my-8 flex flex-col gap-3'>
                    <div className='px-12 md:flex hidden'>
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className='w-full h-full' />
                    </div>

                    <div className='container mx-auto px-4 md:px-12'>
                        <PosterSlider title="Premiers" subtitle="Brand new releases every Friday" posters={premierMovies} isDark={true} />
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4 md:px-12 mt-16'>
                <PosterSlider title="Online Streaming Events"
                    // subject blank??
                    subject="" posters={onlineStreamEvents}
                    isDark={false} />
            </div>
        </>
    );
}

export default DefaultLayoutHoc(HomePage);