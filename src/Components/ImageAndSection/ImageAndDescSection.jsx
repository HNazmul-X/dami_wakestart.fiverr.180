import React from "react";
import CHROME_IMG from "../../Images/Chrome.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const ImageAndDescSection = ({ leftOrder, rightOrder }) => {
    const data = {
        image: CHROME_IMG,
        title: "Rw Chrome",
        desc: "RW Chrome is our custom all-in-one Chrome extension that is free for all Restock World members.",
        features: ["Autofill and auto checkout", "custom retailers and bot scripts", "Create your own script with DIY", "Thousands of checkout, millions in profit"],
    };

    return (
        <div className="image-and-section">
            <div className="image-and-section__wrapper">
                <div className="row align-items-center row-cols-1 row-cols-lg-2 col-12 col-md-9 col-lg-12 mx-auto">
                    <ScrollAnimation duration={0.5} animateIn={"animate__zoomIn"} className="col image-and-section__image" style={{ order: leftOrder }}>
                        <img src={CHROME_IMG} alt="" />
                    </ScrollAnimation>
                    <ScrollAnimation duration={0.5} animateIn={"animate__zoomIn"} className="col image-and-section__desc" style={{ order: rightOrder }}>
                        <h2 className="text-purple fw-800 title">Rw Chrome</h2>
                        <p className=" text-blue-grey fs-4 subtitle ">RW Chrome is our custom all-in-one Chrome extension that is free for all Restock World members.</p>
                        <ul className="list">
                            {data?.features.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default ImageAndDescSection;
