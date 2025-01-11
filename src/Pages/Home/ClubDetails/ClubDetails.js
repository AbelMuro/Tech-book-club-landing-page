import React from 'react';
import icons from './icons';
import images from './images';
import {useMediaQuery} from '~/hooks'
import * as styles from './styles.module.css';

function ClubDetails() {
    const [tablet] = useMediaQuery('(max-width: 850px)');
    const [mobile] = useMediaQuery('(max-width: 550px)');

    const changeImage = () => {
        if(mobile)
            return images['mobileImage'];
        else if(tablet)
            return images['tabletImage'];
        else
            return images['desktopImage'];
    }


    return(
        <article className={styles.details}>
            <img className={styles.details_image} src={changeImage()} alt={'a group of people reading books'}/>
            <section className={styles.details_content}> 
                <h2>
                    Read together, grow together
                </h2>
                <ul className={styles.details_list}>
                    <li>
                        <img src={icons['checkmark']} alt={'check mark'}/> 
                        Monthly curated tech reads selected by industry experts
                    </li>
                    <li>
                        <img src={icons['checkmark']} alt={'check mark'}/> 
                        Virtual and in-person meetups for deep-dive discussions
                    </li>
                    <li>
                        <img src={icons['checkmark']} alt={'check mark'}/> 
                        Early access to new tech book releases
                    </li>
                    <li>
                        <img src={icons['checkmark']} alt={'check mark'}/> 
                        Author Q&A sessions with tech thought leaders
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default ClubDetails;