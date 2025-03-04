import React from 'react';
import { getImageURL } from '../../utils';
import styles from './About.module.css';

const About = () => {
     return (
          <section>
          <h2>About</h2>
          <div>
               <img 
                    src = {getImageURL("about/aboutImg.png")} 
                    alt = "image of me"
                    className={styles.aboutImg}
               />
          </div>
          </section>
     )
}

export default About; 