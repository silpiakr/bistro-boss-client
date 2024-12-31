import React from 'react';
import Banner from './Banner';
import Category from './Category';
import ChefService from './ChefService';
import PopulerMenu from './PopulerMenu';
import Recommendes from './Recommendes';
import Contact from './Contact';
import Features from './Features';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopulerMenu></PopulerMenu>
            <Contact></Contact>
            <Recommendes></Recommendes>
            <Features></Features>
        </div>
    );
};

export default Home;