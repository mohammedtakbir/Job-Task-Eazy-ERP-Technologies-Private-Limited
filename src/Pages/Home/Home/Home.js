import React from 'react';
import Banner from '../Banner/Banner';
import FavoriteEvent from '../FavoriteEvent/FavoriteEvent';
import Speakers from '../Speakers/Speakers';
import Sponsors from '../Sponsors/Sponsors';

const Home = () => {
    return (
        <div>
            <Banner />
            <FavoriteEvent />
            <Speakers />
            <Sponsors />
        </div>
    );
};

export default Home;