import React from 'react';
import Header from './Header';
import ClubDetails from './ClubDetails';
import ClubMessage from './ClubMessage';
import TechJourney from './TechJourney';

function Home(){
    return (
        <>
            <Header/>
            <ClubDetails/>
            <ClubMessage/>
            <TechJourney/>
        </>
    )
}

export default Home;