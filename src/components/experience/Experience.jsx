import React from 'react'
import { getImageURL } from '../../utils';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
     <h2 className={styles.title}>Experience</h2>
     <div className={styles.content}>
          <div className={styles.skills}>
               {skills.map((skill, id) => {
                    return (
                         <div className={styles.skill} key={id}>
                         <div className={styles.skillImgContainer}>
                              <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
                         <p>{skill.title}</p>
                         </div>
                    </div>
                    );
               })}
          </div>
          <ul className={styles.history}>
               {
                    history.map((historyItem, id) => {
                         return (
                              <li className={styles.historyItem} key={id}>
                                   <img src={getImageURL(historyItem.imageSrc)} alt={`$(historyItem.organization) Logo`} />
                              <div className={styles.historyItemDetails}>
                                   <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                   <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                   <ul>{historyItem.experiences.map((experience, id) => {
                                        return (
                                             <li key={id}>{experience}</li>
                                        )
                                   })}</ul>
                              </div>
                              </li>
                         )
                    })
               }
          </ul>
     </div>
    </section>
  )
}

export default Experience;