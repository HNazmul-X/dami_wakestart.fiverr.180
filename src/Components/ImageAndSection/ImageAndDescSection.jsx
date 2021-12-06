import React from 'react';
import CHROME_IMG from "../../Images/Chrome.svg"


const ImageAndDescSection = () => {
    const data = {
        image:CHROME_IMG,
        title:"Rw Chrome",
        desc:"RW Chrome is our custom all-in-one Chrome extension that is free for all Restock World members."
        ,features:["Autofill and auto checkout","custom retailers and bot scripts","Create your own script with DIY","Thousands of checkout, millions in profit"]
    }

    return (
        <div className="image-and-section">
            <div className="image-and-section__wrapper">
                <div className="row align-items-center row-cols-1 row-cols-md-2">
                    <div className="col image-and-section__image">
                        <img src={CHROME_IMG} alt="" />
                    </div>
                    <div className="col image-and-section__desc">
                        <h2 className="text-purple fw-800 title">Rw Chrome</h2>
                        <p className=" text-blue-grey fs-4 subtitle ">RW Chrome is our custom all-in-one Chrome extension that is free for all Restock World members.</p>
                        <ul className="list">
                            {data?.features.map(item => <li>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageAndDescSection;