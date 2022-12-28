import React, {useState} from 'react'

// Components
import EntertainmentCard from '../Components/Entertainment/EntertainmentCard.Component';
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
        </>
    );
}

export default DefaultLayoutHoc(HomePage);