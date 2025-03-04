import React from 'react'
import { getImageURL } from '../../utils';
import styles from './Headline.module.css';

const Headline = () => {
  return (
    <section className={styles.constainer}>
     <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Ryn!</h1>
          <p className={styles.description}>
               I'm a fullstack web developer and a recent graduate. I mostly code in React but I also love working with Java and Python on the side. Reach out if you're interested in working with me.
          </p>
          <a href = "mailto:myemail@email.com" className={styles.contantBtn}>Contact Me</a>
     </div>
     <img 
          src = {getImageURL("headline/headlineImg.png")} 
          alt = "image of me"
          className={styles.headlineImg}
     />
     <div className={styles.topBlur} />
     <div className={styles.bottomBlur} />
     </section>
  )
}

export default Headline;