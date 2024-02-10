import React from "react";
import DefaultLayoutHoc from "../Layouts/Default.layout";

//Components
import Poster from "../Components/Poster/Poster.Component";
import PlayFilter from "../Components/PlayFilters/PlayFilters.Component";

const settings = {
    infinite: true,
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

const PlayPage = () => {
    return (
        <>
            <div className="container mx-auto px-4 my-10">
                <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
                    <div className="lg:w-3/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4 px-1">Plays in NCR Delhi</h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    {...settings}
                                    isPlay={true}
                                    src={process.env.PUBLIC_URL + '/img/play-1.avif'}
                                    value="/anything-but-love/ET00382526"
                                    title="Anything But Love"
                                    subtitle="Comedy, Drama | English | 16yrs + | 1hr 45mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src={process.env.PUBLIC_URL + '/img/play-2.avif'}
                                    value="/jaya-the-victory/ET00377151"
                                    title="JAYA"
                                    subtitle="Drama | English | 2hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src={process.env.PUBLIC_URL + '/img/play-3.avif'}
                                    value="/jar-tar-chi-goshta/ET00364523"
                                    title="Jar Tar Chi Goshta"
                                    subtitle="Drama | Marathi | 3yrs + | 2hrs 30mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src={process.env.PUBLIC_URL + '/img/play-4.avif'}
                                    value="/punha-sahi-re-sahi/ET00051378"
                                    title="Punha Sahi Re Sahi"
                                    subtitle="Drama | Marathi | 2hrs 15mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src={process.env.PUBLIC_URL + '/img/play-5.avif'}
                                    value="/the-company-theatre-s-baaghi-albele/ET00355653"
                                    title="The Company Theatre's Baaghi Albele"
                                    subtitle="Drama | Punjabi, Hindi | 2hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex al">
                                <Poster
                                    isPlay={true}
                                    src={process.env.PUBLIC_URL + '/img/play-6.avif'}
                                    value="/niyam-v-ati-lagu/ET00353823"
                                    title="NIYAM V ATI LAGU"
                                    subtitle="Comedy, Drama | Marathi | 2hrs 30mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src={process.env.PUBLIC_URL + '/img/play-7.avif'}
                                    value="/all-the-best/ET00384424"
                                    title="All The Best"
                                    subtitle="Comedy, Drama | Marathi | All age groups | 2hrs 15mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src={process.env.PUBLIC_URL + '/img/play-8.avif'}
                                    value="/charchaughi/ET00338953"
                                    title="Charchaughi"
                                    subtitle="Drama | Marathi | 5yrs + | 2hrs 45mins"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlayFilter
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                        </div>
                        <div>
                            <PlayFilter
                                title="Language"
                                tags={["English", "Hindi", "Tamil"]}
                            />
                        </div>
                    </div>
                </div>
                {/* 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31104.23539200534!2d77.61554!3d12.969969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c80b1ca7533de73!2zMTLCsDU4JzExLjkiTiA3N8KwMzYnNTUuOSJF!5e0!3m2!1sen!2sus!4v1663427476353!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="play location"
        ></iframe> */}
            </div>
        </>
    );
};

export default DefaultLayoutHoc(PlayPage);
