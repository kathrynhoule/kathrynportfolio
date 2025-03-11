import React from 'react';
import styles from './Contact.module.css';
import { getImageURL } from '../../utils';

// need to change this section in the future
// don't love the layout right now, it looks very unlike anything else on the page
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
     <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out to me!</p>
     </div>
     <ul className={styles.links}>
          <li className={styles.link}>
               <img src={getImageURL("contact/placeholder.png")} alt="github icon" />
               <a href="www.github.com">github</a>
          </li>

          <li className={styles.link}>
               <img src={getImageURL("contact/placeholder.png")} alt="Linkedin icon" />
               <a href="www.mylinkedin.com">linkedin</a>
          </li>
     </ul>
    </footer>
  )
}

export default Contact;