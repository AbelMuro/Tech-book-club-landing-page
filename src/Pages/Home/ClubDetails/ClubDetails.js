import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

//this is where i left off, i will need to work on the tablet responsiveness of this component

function ClubDetails() {
    return(
        <article className={styles.details}>
            <img className={styles.details_image}/>
            <section className={styles.details_content}> 
                <h2>
                    Read together, grow together
                </h2>
                <ul className={styles.details_list}>
                    <li>
                        <img src={icons['checkmark']}/> 
                        Monthly curated tech reads selected by industry experts
                    </li>
                    <li>
                        <img src={icons['checkmark']}/> 
                        Virtual and in-person meetups for deep-dive discussions
                    </li>
                    <li>
                        <img src={icons['checkmark']}/> 
                        Early access to new tech book releases
                    </li>
                    <li>
                        <img src={icons['checkmark']}/> 
                        Author Q&A sessions with tech thought leaders
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default ClubDetails;