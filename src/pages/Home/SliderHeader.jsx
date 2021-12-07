import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode,Autoplay, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SLIDER_IMG_ONE from "../../Images/slider-1.jpeg";
import SLIDER_IMG_TWO from "../../Images/FOOTER_BG.jpg";
import { InlineIcon } from "@iconify/react";
import Tilt from "react-vanilla-tilt";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation,Autoplay, Thumbs]);

const SliderHeader = () => {
    const sliderData = [
        {
            id: "ADKNDMD__DIED",
            title: "First With info Data 1",
            text: "We Provide Detailed Step By Step Guides And Videos Along With 1 On 1 Staﬀ Support To Keep You On Point For Every Release.",
            img: SLIDER_IMG_ONE,
        },
        {
            id: "sha512-mYZEvshBRHG",
            title: "First With info Data 2",
            text: "We Provide Detailed Step By Step Guides And Videos Along With 1 On 1 Staﬀ Support To Keep You On Point For Every Release.",
            img: SLIDER_IMG_TWO,
        },
        {
            id: "sIAiyH5PzCFTCfbWfoYbO",
            title: "First With info Data 3",
            text: "We Provide Detailed Step By Step Guides And Videos Along With 1 On 1 Staﬀ Support To Keep You On Point For Every Release.",
            img: SLIDER_IMG_ONE,
        },
        {
            id: "RR8hUCfRQn9j9RPKEVXo",
            title: "First With info Data 4",
            text: "We Provide Detailed Step By Step Guides And Videos Along With 1 On 1 Staﬀ Support To Keep You On Point For Every Release.",
            img: SLIDER_IMG_TWO,
        },
        {
            id: "9LiwoxLPYn6hNZlvUOR8tSnaxlD",
            title: "First With info Data 5",
            text: "We Provide Detailed Step By Step Guides And Videos Along With 1 On 1 Staﬀ Support To Keep You On Point For Every Release.",
            img: SLIDER_IMG_ONE,
        },
        {
            id: "kita_ditam_ar_paina",
            title: "First With info Data 6",
            text: "We Provide Detailed Step By Step Guides And Videos Along With 1 On 1 Staﬀ Support To Keep You On Point For Every Release.",
            img: SLIDER_IMG_TWO,
        },
    ];
    const [sliderPreviewData, setSliderPreviewData] = useState({ ...sliderData[0] });


    return (
        <header id="sliderHeader">
            <Navbar />
            <div className="slider-header-carousel row m-0 w-100">
                <div className="carousel-side col-12 p-0 col-lg-12">
                    <div className="slider-preview" style={{ backgroundImage: `url(${sliderPreviewData?.img})` }}>
                        <div className="mt-auto preview__text">
                            <h1>{sliderPreviewData?.title}</h1>
                            <p className="col-12 col-sm-10 col-md-9 col-lg-7">{sliderPreviewData?.text}</p>
                            <button className="btn bg-red text-white btn-lg">Join now for free</button>
                        </div>
                        <div className="slider-area">
                            <Swiper
                                breakpoints={{
                                    992: {
                                        spaceBetween: 20,
                                        slidesPerView: 1.5,
                                    },
                                    300: {
                                        spaceBetween: 20,
                                        slidesPerView: 2,
                                    },
                                }}
                                autoplay={{
                                    delay:3000
                                }}
                                loop={true}
                                className={"header-swiper"}>
                                {sliderData.map((e, i) => (
                                    <SwiperSlide>
                                        {({ isActive }) => {
                                            useEffect(()=> {
                                                if(isActive){
                                                    setSliderPreviewData(e)
                                                    
                                                }

                                            },[isActive])
                                            return (
                                                <Tilt className="p-0 m-0 w-100 bg-transparent">
                                                    <div style={{ backgroundImage: `url(${e?.img})` }} className="header_slider-card d-flex align-items-center">
                                                        <h6>{e?.title}</h6>
                                                    </div>
                                                </Tilt>
                                            );
                                        }}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* <div className="advantage-text col-12 col-lg-3">
                    <div className="text-center py-5">
                        <h1>The Ultimate Advantage</h1>
                        <p className="text-blue-grey fw-500">Providing our members with the highest quality information, reselling tools, and more. Learn how to capitalize on the resell market.</p>
                        <button className="btn text-red ">
                            Become A member <InlineIcon icon="codicon:arrow-right" className="" />{" "}
                        </button>
                    </div>
                </div> */}
            </div>
        </header>
    );
};

export default SliderHeader;
