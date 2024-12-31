import React from 'react';
import Banner from './Banner';
import Category from './Category';
import ChefService from './ChefService';
import PopulerMenu from './PopulerMenu';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopulerMenu></PopulerMenu>
        </div>
    );
};

export default Home;