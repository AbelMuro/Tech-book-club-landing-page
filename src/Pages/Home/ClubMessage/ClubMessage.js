import React from 'react';
import icons from './icons';
import images from './images';
import {useMediaQuery} from '~/hooks'
import * as styles from './styles.module.css';

function ClubMessage() {
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
        <article className={styles.club}>
            <section className={styles.club_content}>
                <h2 className={styles.club_title}>
                    Not your average book <span>club<img className={styles.pattern} src={icons['pattern']}/></span>
                </h2>
                <p className={styles.club_desc}>
                    Connect with a community that speaks 
                    your language - 
                    from <span>Python</span> to <span>TypeScript</span> and 
                    everything in between. Our discussions blend technical 
                    depth with practical applications.
                </p>                
            </section>
            <div className={styles.image_container}>
                <img className={styles.club_image} src={changeImage()} alt='a group of people collaborating and discussing while holding books'/>
                <img className={styles.tech_logos} alt='logos for typescript, github, and react'/>
            </div>
        </article>
    )
}


export default ClubMessage;