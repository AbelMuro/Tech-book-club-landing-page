import React from 'react';
import icons from './icons';
import commonIcons from '~/assets/images'
import * as styles from './styles.module.css';

function MembershipOptions() {
    return(
        <section className={styles.membership}>
            <h1 className={styles.membership_title}>
                Membership options
            </h1>
            <div className={styles.membership_option}>
                <h2 className={styles.membership_option_title}>
                    Starter 
                </h2>
                <strong className={styles.membership_option_price}>
                    <span>
                        $19
                    </span>
                    /month
                </strong>
                <hr className={styles.membership_option_line}/>
                <div className={styles.membership_option_detail}>
                    <img src={icons['checkbox']} alt='check box'/>
                    1 book/month
                </div>
                <div className={styles.membership_option_detail}>
                    <img src={icons['checkbox']} alt='check box'/>
                    Online forums
                </div>
                <button className={styles.membership_option_button}>
                    Subscribe now
                </button>
            </div>
            <div className={styles.membership_option}>
                <h2 className={styles.membership_option_title}>
                    Pro 
                </h2>
                <strong className={styles.membership_option_price}>
                    <span>
                        $29
                    </span>
                    /month
                </strong>
                <hr className={styles.membership_option_line}/>
                <div className={styles.membership_option_detail}>
                    <img src={icons['checkbox']} alt='check box'/>
                    2 books/month
                </div>
                <div className={styles.membership_option_detail}>
                    <img src={icons['checkbox']} alt='check box'/>
                    Virtual meetups
                </div>
                <button className={styles.membership_option_button}>
                    Subscribe now
                </button>
                <img className={styles.membership_option_glow} src={commonIcons['patternGlow']}/>
            </div>
            <div className={styles.membership_option}>
                <h2 className={styles.membership_option_title}>
                    Enterprise
                </h2>
                <strong className={styles.membership_option_price}>
                    <span>
                        Custom
                    </span>
                </strong>
                <hr className={styles.membership_option_line}/>
                <div className={styles.membership_option_detail}>
                    <img src={icons['checkbox']} alt='check box'/>
                    Team access
                </div>
                <div className={styles.membership_option_detail}>
                    <img src={icons['checkbox']} alt='check box'/>
                    Private sessions
                </div>
                <button className={styles.membership_option_button}>
                    talk to us
                </button>
            </div>
        </section>
    )
}

export default MembershipOptions;