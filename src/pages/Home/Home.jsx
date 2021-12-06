import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import CustomTools from './CustomTools';
import Header from './Header';
import Opportunities from './Opportunities';

const Home = () => {
    return (
        <>
            <Header/>
            <Opportunities/>
            <CustomTools/>
            
         </>
    );
};

export default Home;