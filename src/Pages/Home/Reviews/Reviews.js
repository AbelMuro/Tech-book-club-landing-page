import React from 'react';
import commonIcons from '~/assets/icons';
import * as styles from './styles.module.css';

function Reviews() {
    return(
        <section className={styles.review}>
            <div className={styles.review_stars}>
                <img src={commonIcons['star']}/>
                <img src={commonIcons['star']}/>
                <img src={commonIcons['star']}/>
                <img src={commonIcons['star']}/>
                <img src={commonIcons['star']}/>
            </div>
            <blockquote className={styles.review_quote}>
                "This book club transformed my technical 
                reading from a solitary activity into an 
                enriching community experience. The 
                discussions are gold!"
            </blockquote>
            <em className={styles.review_author}>
                Sara Chen, Software Architect
            </em>
        </section>
    )
} 

export default Reviews;