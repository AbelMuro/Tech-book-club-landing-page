import React from 'react';
import commonIcons from '~/assets/images';
import icons from './icons';
import * as styles from './styles.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <section>
                <img className={styles.header_icon} src={icons['logo']}/>
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
                        <img src={icons['avatars']} />
                        <div className={styles.header_content_stars}>
                            <img src={icons['star']}/>
                            <img src={icons['star']}/>
                            <img src={icons['star']}/>
                            <img src={icons['star']}/>
                            <img src={icons['star']}/>
                        </div>
                        <p>
                            200+ developers joined already
                        </p>
                    </div>
                </section>
                <img className={styles.header_image} alt='three individuals reading together'/>
            </section>
            <img className={styles.header_glow} src={commonIcons['patternGlow']}/>
        </header>
    )
}

export default Header;