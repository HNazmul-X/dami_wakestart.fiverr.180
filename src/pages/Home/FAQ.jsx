import React from 'react';
import FaqCard from '../../Components/FaqCard/Faqcard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const FAQ = () => {
    return (
        <section id="faq" className="py-2 py-md-4 py-lg-5">
            <SectionTitle text="Frequently Asked Questions"></SectionTitle>
            <div className="container">
                <FaqCard/>
                <FaqCard/>
                <FaqCard/>
                <FaqCard/>
            </div>
            <div className="py-2 py-md-2 py-lg-4"></div>
        </section>
    );
};

export default FAQ;