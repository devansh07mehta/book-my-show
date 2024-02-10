import React from 'react';
import Slider from 'react-slick';

import img1 from "../../../public/img/ent-1.avif"
import img2 from "../../../public/img/ent-2.avif"
import img3 from "../../../public/img/ent-3.avif"
import img4 from "../../../public/img/ent-4.avif"
import img5 from "../../../public/img/ent-5.avif"
import img6 from "../../../public/img/ent-6.avif"
import img7 from "../../../public/img/ent-7.avif"
import img8 from "../../../public/img/ent-8.avif"
import img9 from "../../../public/img/ent-9.avif"
import img10 from "../../../public/img/ent-10.avif"

const EntertainmentCard = (props) => {
    return <>
        <div className='w-full h-30 px-2'>
            <img src={props.src} alt="Entertainment" className='w-full h-full rounded-lg' />
        </div>
    </>
}

// Main Component
const EntertainmentCardSlider = () => {
    const EntertainmentImage = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
    ];
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 350,
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
                {EntertainmentImage.map((image, index) => (
                    <EntertainmentCard src={image} key={index} />
                ))}

            </Slider>
        </>
    )
}
export default EntertainmentCardSlider;