import React, { useState } from 'react';
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
    const [images, setImages] = useState([{
        adult: false,
        backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
        genre_ids: [16, 878, 28],
        id: 610150,
        original_language: "ja",
        original_title: "ドラゴンボール超 スーパーヒーロー",
        overview:
            "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
        popularity: 5953.989,
        poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
        release_date: "2022-06-11",
        title: "Dragon Ball Super: Super Hero",
        video: false,
        vote_average: 8,
        vote_count: 1426,
    },
    {
        "adult": false,
        "backdrop_path": "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
        "belongs_to_collection": {
            "id": 94602,
            "name": "Puss in Boots Collection",
            "poster_path": "/anHwj9IupRoRZZ98WTBvHpTiE6A.jpg",
            "backdrop_path": "/feU1DWV5zMWxXUHJyAIk3dHRQ9c.jpg"
        },
        "budget": 90000000,
        "genres": [],
        "homepage": "https://www.dreamworks.com/movies/puss-in-boots-the-last-wish",
        "id": 315162,
        "imdb_id": "tt3915174",
        "original_language": "en",
        "original_title": "Puss in Boots: The Last Wish",
        "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        "popularity": 9694.931,
        "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        "production_companies": [],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "2022-12-07",
        "revenue": 254905780,
        "runtime": 103,
        "spoken_languages": [
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            },
            {
                "english_name": "Spanish",
                "iso_639_1": "es",
                "name": "Español"
            }
        ],
        "status": "Released",
        "tagline": "Say hola to his little friends.",
        "title": "Puss in Boots: The Last Wish",
        "video": false,
        "vote_average": 8.62,
        "vote_count": 2026
    }]);

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: true
    }

    return (
        <>
            <div className='container lg:hidden'>
                <HeroSlider {...settings}>
                    {
                        images.map((images, index) => {
                            return (
                                <div className="container md:h-80 px-2 py-3 focus:outline-none" key={index}>
                                    <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className="w-full h-full rounded-md object-cover" />
                                </div>
                            )

                        })
                    }

                </HeroSlider>
            </div>
            <div className='container hidden lg:block'>
                <HeroSlider {...settings}>
                    {
                        images.map((images, index) => {
                            return (
                                <div className="container w-full h-96 px-2 py-3 focus:outline-none" key={index}>
                                    <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className="w-full h-full rounded-md object-cover" />
                                </div>
                            )

                        })
                    }

                </HeroSlider>
            </div>
        </>
    )
}

export default HeroCarousel;