import React from 'react';
import POKEMON_ICON from "../../Images/Pokemon.svg"

const EndlessCard = () => {
    return (
        <article className="endless-card">
            <div className="d-flex align-items-center">
                <img src={POKEMON_ICON} alt="" className="flex-shrink-0 m-4" />
                <h3>Exclusive info & release Guide</h3>
            </div>
            <div className="desc p-4 pt-0">
                <p>
                    Our members are kept up to date on every sneaker release and are equipped with early links, extensive site lists, and guides. Our one on one support will help you setup your bots
                    to ensure that you cook.{" "}
                </p>
            </div>
        </article>
    );
};

export default EndlessCard;