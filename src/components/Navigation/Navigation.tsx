import styles from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationTitle}>
        <h1>The Fastest Food</h1>
        <div className={styles.navigationBasket}>
          <i className='fa-solid fa-basket-shopping'></i>
        </div>
      </div>
      <div className={styles.navigationListContainer}>
        <ul className={styles.navigationList}>
          <li className={`${styles.navigationListItem} ${styles.navigationListMainItem}`}>
            <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : undefined)} end>
              Home
            </NavLink>
          </li>
          <li className={`${styles.navigationListItem} ${styles.navigationListMainItem}`}>
            <NavLink to='/deals' className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Deals
            </NavLink>
          </li>
          <li className={styles.navigationListItem}>
            <NavLink to='/pizzas' className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Pizzas
            </NavLink>
          </li>
          <li className={styles.navigationListItem}>
            <NavLink to='/burgers' className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Burgers
            </NavLink>
          </li>
          <li className={styles.navigationListItem}>
            <NavLink to='/desserts' className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Desserts
            </NavLink>
          </li>
          <li className={styles.navigationListItem}>
            <NavLink to='/drinks' className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Drinks
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
