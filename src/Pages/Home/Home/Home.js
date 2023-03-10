import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FavoriteEvent from '../FavoriteEvent/FavoriteEvent';
import JoinWithEmail from '../JoinWithEmail/JoinWithEmail';
import Speakers from '../Speakers/Speakers';
import Sponsors from '../Sponsors/Sponsors';

const Home = () => {
    return (
        <div>
            <Banner />
            <FavoriteEvent />
            <Speakers />
            <Sponsors />
            <About />
            <JoinWithEmail />
        </div>
    );
};

export default Home;