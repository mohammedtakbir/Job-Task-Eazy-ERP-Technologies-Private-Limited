import React from 'react';
import Banner from '../Banner/Banner';
import FavoriteEvent from '../FavoriteEvent/FavoriteEvent';
import Speakers from '../Speakers/Speakers';

const Home = () => {
    return (
        <div>
            <Banner />
            <FavoriteEvent />
            <Speakers />
        </div>
    );
};

export default Home;