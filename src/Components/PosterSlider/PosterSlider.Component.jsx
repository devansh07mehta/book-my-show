import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Component';

const PosterSlider = (props) => {
    const { posters, title, subtitle, isDark, config } = props;
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                },
            },
        ]
    };
    return (
        <>
            <div className='flex flex-col items-start sm:ml-3 ml-0 my-2'>
                <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}>
                    {title}
                </h3>
                <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
                    {subtitle}
                </p>
            </div>

            <Slider {...settings}>
                {
                    posters.map((each, index) => (
                        <Poster {...each} isDark={isDark} key={index} />
                    ))
                }
            </Slider>
        </>
    );
}

export default PosterSlider;