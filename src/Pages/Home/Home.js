import React from 'react';
import Banner from './Banner';
import Infor from './Infor';
import MakeAppointment from './MakeAppointment';
import Servicesd from './Servicesd';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Infor></Infor>
            <Servicesd></Servicesd>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;