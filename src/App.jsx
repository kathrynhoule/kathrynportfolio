import React from "react";
import styles from './App.module.css';
import Navbar from "./components/navbar/Navbar";
import Headline from "./components/headline/Headline";

const App = () => {
     return (
          <div className={styles.App}>
               <Navbar />
               <Headline />
          </div>
     );
}

export default App;