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
                        <h2 className="text-2xl font-bold mb-4 px-4">Plays in NCR Delhi</h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    {...settings}
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IEZlYiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00350604-fdcxgnrfrx-portrait.jpg"
                                    value="kanan-gill-is-this-it/ET00350604"
                                    title="Kanan Gill - Is this It? - Mumbai"
                                    subtitle="Comedy | English | 18yrs + | 2hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyNiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00333442-nzzyamqbla-portrait.jpg"
                                    value="masala-sandwich/ET00333442"
                                    title="Hamare Zamane Mai by Amit Tandon Live - Mumbai"
                                    subtitle="Comedy | Hindi, English | 1hr 30mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA4IE1hcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00349382-hfyfkcubfu-portrait.jpg"
                                    value="sunburn-arena-ft-martin-garrix-mumbai/ET00349382"
                                    title="Sunburn Arena Ft. Martin Garrix - Mumbai"
                                    subtitle="EDM, Pop | English | 7hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00350485-brpurzsfxs-portrait.jpg"
                                    value="kr-na-the-dollar-sign-india-tour-mumbai/ET00350485"
                                    title="KR$NA - The Dollar Sign India Tour (Mumbai)"
                                    subtitle="Music Shows | English, Hindi | 21yrs + | 7hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNSBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00349573-xvfskkxnhf-portrait.jpg"
                                    value="pathaan-first-day-first-show-mumbai-srk-universe/ET00349573"
                                    title="PATHAAN FIRST DAY FIRST SHOW MUMBAI SRK UNIVERSE"
                                    subtitle="Screening | Hindi | 2hrs 25mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBGZWIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337512-fbtzjarljt-portrait.jpg"
                                    value="comic-con-india-mumbai-2023/ET00337512"
                                    title="Comic Con India – Mumbai 2023"
                                    subtitle="Comics | English | All age groups | 9hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IEZlYg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00350624-vzhcufsyxg-portrait.jpg"
                                    value="zakir-khan-live/ET00350624"
                                    title="Zakir Khan Live - Tata Theatre: NCPA"
                                    subtitle="Comedy | Hindi | 16yrs + | 2hrs 30mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 py-3 flex">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNSBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00131881-yqcflpncbd-portrait.jpg"
                                    value="vipul-goyal-live/ET00131881"
                                    title="Vipul Goyal Live in Mumbai"
                                    subtitle=" Comedy | English, Hindi | 16yrs + | 1hr"
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
