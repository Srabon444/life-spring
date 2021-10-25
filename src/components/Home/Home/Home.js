import React from 'react';
import OurPartners from '../../OurPartners/OurPartners';
import Reviews from '../../Reviews/Reviews';
import AllServices from '../AllServices/AllServices';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AllServices></AllServices>
            <Reviews></Reviews>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;