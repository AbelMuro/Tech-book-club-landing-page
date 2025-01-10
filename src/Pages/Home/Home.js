import React from 'react';
import Header from './Header';
import ClubDetails from './ClubDetails';
import ClubMessage from './ClubMessage';
import TechJourney from './TechJourney';
import MembershipOptions from './MembershipOptions';
import Reviews from './Reviews';
import Footer from './Footer';

function Home(){
    return (
        <>
            <Header/>
            <ClubDetails/>
            <ClubMessage/>
            <TechJourney/>
            <MembershipOptions/>
            <Reviews/>
            <Footer/>
        </>
    )
}

export default Home;