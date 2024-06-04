import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerUpper}>
        <h4 className={styles.footerTitle}>The Fastest Food</h4>
        <ul className={styles.footerList}>
          <li className={styles.footerListItem}>
            <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : undefined)} end>
              Home
            </NavLink>
          </li>
          <li className={styles.footerListItem}>
            <NavLink to='/deals' className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Deals
            </NavLink>
          </li>
          <li className={styles.footerListItem}>
            <NavLink to='/pizzas' className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Pizzas
            </NavLink>
          </li>
          <li className={styles.footerListItem}>
            <NavLink to='/burgers' className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Burgers
            </NavLink>
          </li>
          <li className={styles.footerListItem}>
            <NavLink to='/desserts' className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Desserts
            </NavLink>
          </li>
          <li className={styles.footerListItem}>
            <NavLink to='/drinks' className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Drinks
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.footerLower}>
        <p className={styles.footerLowerText}>
          <i className='fa-regular fa-copyright'></i>
          {new Date().getFullYear()} The Fastest Food. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
