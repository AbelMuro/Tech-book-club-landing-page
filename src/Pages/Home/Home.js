import React from 'react';
import Header from './Header';
import ClubDetails from './ClubDetails';
import ClubMessage from './ClubMessage';
import TechJourney from './TechJourney';
import MembershipOptions from './MembershipOptions';

function Home(){
    return (
        <>
            <Header/>
            <ClubDetails/>
            <ClubMessage/>
            <TechJourney/>
            <MembershipOptions/>
        </>
    )
}

export default Home;