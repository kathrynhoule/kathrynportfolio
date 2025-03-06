import React from 'react';
import { getImageURL } from '../../utils';
import styles from './About.module.css';

const About = () => {
     return (
          <section className={styles.container}>
          <h2 className={styles.title}>About</h2>
          <div className={styles.content}>
               <img 
                    src = {getImageURL("about/aboutImg.png")} 
                    alt = "image of me"
                    className={styles.aboutImg}
               />
               <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                    <img 
                         src = {getImageURL("about/arrowIcon.png")} 
                         alt = "arrow icon"
                         className={styles.arrowIcon}
                    />
                    <div className={styles.aboutItemText}>
                         <h3>Frontend Developer</h3>
                         <p>Lorem ipsum placeholder text</p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img 
                         src = {getImageURL("about/arrowIcon.png")} 
                         alt = "arrow icon"
                         className={styles.arrowIcon}
                    />
                    <div className={styles.aboutItemText}>
                         <h3>Backend Developer</h3>
                         <p>Lorem ipsum placeholder text</p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img 
                         src = {getImageURL("about/arrowIcon.png")} 
                         alt = "arrow icon"
                         className={styles.arrowIcon}
                    />
                    <div className={styles.aboutItemText}>
                         <h3>UX Designer</h3>
                         <p>Lorem ipsum placeholder text</p>
                    </div>
                    </li>
               </ul>
          </div>
          </section>
     )
}

export default About; 