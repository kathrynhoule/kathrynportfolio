import React from "react";
import styles from './App.module.css';
import Navbar from "./components/navbar/Navbar";
import Headline from "./components/headline/Headline";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";


const App = () => {
     return (
          <div className={styles.App}>
               <Navbar />
               <Headline />
               <About />
               <Projects />
               <Experience />
          </div>
     );
}

export default App;