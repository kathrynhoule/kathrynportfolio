import React from "react";
import styles from './App.module.css';
import Navbar from "./components/navbar/Navbar";
import Headline from "./components/headline/Headline";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";


const App = () => {
     return (
          <div className={styles.App}>
               <Navbar />
               <Headline />
               <About />
               <Experience />
          </div>
     );
}

export default App;