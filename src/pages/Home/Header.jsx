import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import AMAZON from "../../Images/Amazon.png";

SwiperCore.use([Autoplay]);

const fastest_monitor_data = [
    {
        image: AMAZON,
        title: "Amazon",
        text: "covering GPU's Consoles and More",
    },
    {
        image: AMAZON,
        title: "Amazon",
        text: "covering GPU's Consoles and More",
    },
    {
        image: AMAZON,
        title: "Amazon",
        text: "covering GPU's Consoles and More",
    },
    {
        image: AMAZON,
        title: "Amazon",
        text: "covering GPU's Consoles and More",
    },
    {
        image: AMAZON,
        title: "Amazon",
        text: "covering GPU's Consoles and More",
    },
    {
        image: AMAZON,
        title: "Amazon",
        text: "covering GPU's Consoles and More",
    },
    {
        image: AMAZON,
        title: "Amazon",
        text: "covering GPU's Consoles and More",
    },
];

const Header = () => {
    return (
        <header id="header">
            <Navbar />
            <div className="header-content">
                <div className="container">
                    <div className="py-5">
                        <div className="col-12 col-md-8 col-lg-6 text-light">
                            <h1 className="display-5 fw-bold">Exclusive, All-In-One Reselling Community.</h1>
                            <p className="fs-5 mt-4 fw-500">
                                Restock World provides fast monitors, early info, custom tools, and much more, all with the goal of ensuring that each member turns a profit.
                            </p>
                            <div className="py-3 text-center d-flex flex-column flex-md-row text-lg-start">
                                <button className="btn btn-shadow mb-2 mb-lg-0 me-0 me-lg-4 fw-bold rounded-pill bg-purple1-to-purple2 text-light fs-5  py-2 px-5">Sold out</button>
                                <button className="btn btn-shadow rounded-pill bg-white text-black fw-bold fs-5  py-2 px-5">Sold out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacing">
                {[...new Array(8)].map((e,i) => <div className={`${ i>5?"":"p-2"} p-md-3 p-lg-5`}></div>)}
            </div>
            {/* FASTEST MONITOR */}
            <div className="fastest-monitor">
                <div className="container">
                    <h1 className="text-light display-5 fw-bold mb-5">The Fastest Monitor</h1>
                </div>
                <div className=" ps-1 ps-md-3 ps-md-5">
                    <Swiper
                        slidesPerView={"auto"}
                        centeredSlides={false}
                        spaceBetween={50}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper">
                        {fastest_monitor_data.map((e, i) => (
                            <SwiperSlide className="fastest-monitor_card">
                                <div className="fastest-monitor_card_wrapper">
                                    <div className="image">
                                        <img src={e.image} alt="" />
                                    </div>
                                    <div className="text-and-title">
                                        <h3 className="mb-0">{e.title}</h3>
                                        <p>{e.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </header>
    );
};

export default Header;
