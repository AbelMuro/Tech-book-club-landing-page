import React from 'react';
import images from './images';
import commonImages from '~/assets/images';
import commonIcons from '~/assets/icons';
import {useMediaQuery} from '~/hooks';
import icons from './icons';
import * as styles from './styles.module.css';

function Header() {
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
        <header className={styles.header}>
            <section>
                <img className={styles.header_icon} src={icons['logo']} alt='book club logo'/>
                <section className={styles.header_content}>
                    <h1 className={styles.header_content_title}>
                        Join the ultimate tech book club
                    </h1>
                    <p className={styles.header_content_desc}>
                        Turn your reading time into learning time with fellow tech enthusiasts. 
                        Get curated recommendations, join vibrant discussions, and level up 
                        your skills one chapter at a time.
                    </p>
                    <button className={styles.header_content_button}>
                        REVIEW MEMBERSHIP OPTIONS
                        <img src={icons['arrowDown']}/>
                    </button>
                    <div className={styles.header_content_misc}>
                        <img src={commonImages['avatars']} alt='three individuals smiling'/>
                        <div className={styles.header_content_stars}>
                            <img src={commonIcons['star']} alt='yellow star'/>
                            <img src={commonIcons['star']} alt='yellow star'/>
                            <img src={commonIcons['star']} alt='yellow star'/>
                            <img src={commonIcons['star']} alt='yellow star'/>
                            <img src={commonIcons['star']} alt='yellow star'/>
                        </div>
                        <p>
                            200+ developers joined already
                        </p>
                    </div>
                </section>
                <img className={styles.header_image} src={changeImage()} alt='three individuals reading together'/>
            </section>
            <img className={styles.header_glow} src={commonImages['patternGlow']}/>
        </header>
    )
}

export default Header;