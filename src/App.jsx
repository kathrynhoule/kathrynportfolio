import React from "react";
import styles from './App.module.css';
import Navbar from "./components/navbar/Navbar";
import Headline from "./components/headline/Headline";
import About from "./components/about/About";

const App = () => {
     return (
          <div className={styles.App}>
               <Navbar />
               <Headline />
               <About />
          </div>
     );
}

export default App;