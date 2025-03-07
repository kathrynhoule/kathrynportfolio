import React from "react";
import styles from './App.module.css';
import Navbar from "./components/navbar/Navbar";
import Headline from "./components/headline/Headline";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";


const App = () => {
     return (
          <div className={styles.App}>
               <Navbar />
               <Headline />
               <About />
               <Projects />
               <Experience />
               <Contact />
          </div>
     );
}

export default App;