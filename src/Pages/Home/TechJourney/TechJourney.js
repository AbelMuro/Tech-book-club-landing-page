import React from 'react';
import commonIcons from '~/assets/images';
import icons from './icons';
import * as styles from './styles.module.css';


//this is where i left off, need to finish the html elements and css for desktop

function TechJourney() {
    return(
        <section className={styles.journey}>
            <h1 className={styles.journey_title}>
                Your tech reading journey
            </h1>
            <div className={styles.journey_step}>
                <div className={styles.journey_step_number}>
                    1
                </div>
                <img className={styles.journey_step_arrow} src={icons['arrow']}/>
                <p className={styles.journey_step_desc}>
                    Choose your membership tier
                </p>
            </div>
            <div className={styles.journey_step}>
                <div className={styles.journey_step_number}>
                    2
                </div>
                <img className={styles.journey_step_arrow} src={icons['arrow']}/>
                <p className={styles.journey_step_desc}>
                    Get your monthly book selection
                </p>
            </div>
            <div className={styles.journey_step}>
                <div className={styles.journey_step_number}>
                    3
                </div>
                <img className={styles.journey_step_arrow} src={icons['arrow']}/>
                <p className={styles.journey_step_desc}>
                    Join our discussion forums
                </p>
            </div>
            <div className={styles.journey_step}>
                <div className={styles.journey_step_number}>
                    4
                </div>
                <img className={styles.journey_step_arrow} src={icons['arrow']}/>
                <p className={styles.journey_step_desc}>
                    Attend exclusive meetups
                </p>
            </div>
            <img className={styles.glow} src={commonIcons['patternGlow']}/>
        </section>
    )
}
export default TechJourney;