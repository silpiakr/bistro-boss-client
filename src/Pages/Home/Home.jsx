import React from 'react';
import Banner from './Banner';
import Category from './Category';
import ChefService from './ChefService';
import PopulerMenu from './PopulerMenu';
import Recommendes from './Recommendes';
import Contact from './Contact';
import Features from './Features';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro-Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopulerMenu></PopulerMenu>
            <Contact></Contact>
            <Recommendes></Recommendes>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;