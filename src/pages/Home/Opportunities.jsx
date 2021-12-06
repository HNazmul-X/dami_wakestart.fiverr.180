import React from "react";
import EndlessCard from "../../Components/EndlessCard/EndlessCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import POKEMON_ICON from "../../Images/Pokemon.svg"

const Opportunities = () => {

    const endless_card_data  = [
        {
            icon:POKEMON_ICON,
            title:"Exclusive info & Release Guide",
            text:""
        }
    ]

    return (
        <section id="opportunities">
            <SectionTitle text={"Endless Opportunities"} />
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2">
                    {[...new Array(6)].map((e, i) => (
                        <div className="col mb-4">
                            <EndlessCard />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Opportunities;
