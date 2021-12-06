import React from 'react';
import ImageAndDescSection from '../../Components/ImageAndSection/ImageAndDescSection';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const CustomTools = () => {
    return (
        <section id="custom-tools">
            <SectionTitle text="Custom Tools" />
            <div className="container">
                <ImageAndDescSection />
                <ImageAndDescSection rightOrder={0} leftOrder={1} />
                <ImageAndDescSection />
                <ImageAndDescSection rightOrder={0} leftOrder={1} />
            </div>
        </section>
    );
};

export default CustomTools;