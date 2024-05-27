import styles from './Navigation.module.css';

import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationTitle}>
        <h1>The Fastest Food</h1>
        <div className={styles.navigationBasket}>
          <i className='fa-solid fa-basket-shopping'></i>
        </div>
      </div>
      <ul className={styles.navigationList}>
        <li className={`${styles.navigationListItem} ${styles.navigationListMainItem}`}>
          <Link to='/'>Home</Link>
        </li>
        <li className={`${styles.navigationListItem} ${styles.navigationListMainItem}`}>
          <Link to='/deals'>Deals</Link>
        </li>
        <li className={styles.navigationListItem}>
          <Link to='/pizzas'>Pizzas</Link>
        </li>
        <li className={styles.navigationListItem}>
          <Link to='/burgers'>Burgers</Link>
        </li>
        <li className={styles.navigationListItem}>
          <Link to='/desserts'>Desserts</Link>
        </li>
        <li className={styles.navigationListItem}>
          <Link to='/drinks'>Drinks</Link>
        </li>
      </ul>
    </nav>
  );
}
