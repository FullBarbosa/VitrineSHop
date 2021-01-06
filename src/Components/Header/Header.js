import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <nav className={styles.header}>
          
        <ul>
          <li>
            <NavLink activeClassName={styles.active} className={styles.link} to="/">Produto</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} className={styles.link} to="/Contato">Contato</NavLink>
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default Header
