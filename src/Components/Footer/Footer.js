import React from 'react'
import styles from './Footer.module.css';
import git from "../../img/github.svg";
import linkedin from "../../img/linkedin.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>Entre em Contato</h1>

      <div className={styles.contato}>
      <a href="https://github.com/FullBarbosa" >
            <img src={git} alt="GitHub"/>
       </a> 
       <a href="https://www.linkedin.com/in/diogobarbosa22/">
            <img src={linkedin} alt="Linkedin"/>
       </a>
      </div>
    </div>
  )
}

export default Footer
