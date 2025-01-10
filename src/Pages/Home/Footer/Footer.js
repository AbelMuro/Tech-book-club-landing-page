import React from 'react';
import icons from './icons';
import commonIcons from '~/assets/icons';
import commonImages from '~/assets/images';
import * as styles from './styles.module.css';

// this is where i left off, i need to finish the hover states for the social icons in this component

function Footer(){
    return(
        <footer className={styles.footer}>
            <section className={styles.footer_content}>
                <h1 className={styles.footer_content_title}>
                    Ready to debug your reading list?
                </h1>
                <button className={styles.footer_content_button}>
                    review membership options
                    <img src={icons['arrowUp']}/>
                </button>
                <div className={styles.footer_content_misc}>
                    <img src={commonImages['avatars']}/> 
                    <div className={styles.footer_content_misc_stars}>
                        <img src={commonIcons['star']}/>
                        <img src={commonIcons['star']}/>
                        <img src={commonIcons['star']}/>
                        <img src={commonIcons['star']}/>
                        <img src={commonIcons['star']}/>                        
                    </div> 
                    <small>
                        200+ developers joined already
                    </small>
                </div>
                <div className={styles.footer_content_bar}>
                    <em>
                        &copy; 2024 - Tech Book Club
                    </em>
                    <div className={styles.footer_content_bar_social}>
                        <img src={icons['bluesky']}/>
                        <img src={icons['linkedin']}/>
                    </div>
                </div>      
            </section>
        </footer>
    )
}

export default Footer;