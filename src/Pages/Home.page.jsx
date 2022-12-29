import React, { useState } from 'react'

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

    return (
        <>
            <HeroCarousel />
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider title="Recommended Movies" subtitle="List of recommended movies" posters={recommendMovies} isDark={false} />
            </div>

            <div className='bg-premier-800 py-12'>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className='w-full h-full' />
                    </div>

                    <div className='container mx-auto px-4 md:px-12 my-8'>
                        <PosterSlider title="Premiers" subtitle="Brand new releases every Friday" posters={premierMovies} isDark={true} />
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider title="Online Streaming Events"
                    // subject blank??
                    subject="" posters={onlineStreamEvents}
                    isDark={false} />
            </div>
        </>
    );
}

export default DefaultLayoutHoc(HomePage);