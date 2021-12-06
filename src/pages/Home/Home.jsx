import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/navbar/Navbar';
import CustomTools from './CustomTools';
import FAQ from './FAQ';
import Header from './Header';
import Opportunities from './Opportunities';

const Home = () => {
    return (
        <>
            <Header/>
            <Opportunities/>
            <CustomTools/>
            <FAQ/>
            <Footer/>
            
         </>
    );
};

export default Home;