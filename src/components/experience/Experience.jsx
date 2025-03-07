import React from 'react'
import { getImageURL } from '../../utils';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';

const Experience = () => {
  return (
    <section id="experience">
     <h2>Experience</h2>
     <div>
          <div>
               {skills.map((skill, id) => {
                    return (<div key={id}>
                         <div><img src={getImageURL(skill.imageSrc)} alt={skill.title} />
                         <p>{skill.title}</p>
                         </div>
                    </div>
                    );
               })}
          </div>
          <ul>
               {
                    history.map((historyItem, id) => {
                         return (
                              <li key={id}>
                                   <img src={getImageURL(historyItem.imageSrc)} alt={`$(historyItem.organization) Logo`} />
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