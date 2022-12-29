import React from 'react';
import Slider from 'react-slick';

const EntertainmentCard = (props) => {
    return <>
        <div className='w-full h-28 px-2'>
            <img src={props.src} alt="Entertainment" className='w-full h-full rounded-lg' />
        </div>
    </>
}

// Main Component
const EntertainmentCardSlider = () => {
    const EntertainmentImage = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTI1KyBFdmVudHM%3D,otc"
    ];
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <>
            <Slider {...settings}>
                {EntertainmentImage.map((image) => (
                    <EntertainmentCard src={image} />
                ))}
                    
            </Slider>
        </>
    )
}
export default EntertainmentCardSlider;