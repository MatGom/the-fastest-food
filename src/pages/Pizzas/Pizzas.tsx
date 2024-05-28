import styles from './Pizzas.module.css';

import { type ChangeEvent, useState } from 'react';

import { pizzas } from '../../data/pizzas-data';

export default function Pizzas() {
  const [selectedSize, setSelectedSize] = useState('Large');

  const handleChangeSize = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  return (
    <section className={styles.pizzas}>
      <h2 className={styles.pizzasTitle}>Pizzas</h2>
      <div className={styles.pizzasDescription}>
        <p>Our pizzas are prepared extremely fast, without compromising their quality!</p>
        <p>
          Did you know that our chef is the world champion in pizza acrobatics? He holds the Guinness World Record for
          the fastest spinning of pizza dough!
        </p>
      </div>
      <div className={styles.productsContainer}>
        {Object.values(pizzas).map(pizza => (
          <div key={pizza.id} className={styles.productCard}>
            <img src={pizza.image} alt={pizza.alt} />
            <div className={styles.productCardInfo}>
              <h3 className={styles.productTitle}>{pizza.name}</h3>
              <div className={styles.dropdownContainer}>
                <select value={selectedSize} className={styles.select} onChange={handleChangeSize}>
                  {Object.values(pizza.sizes).map(size => (
                    <option key={size.size} value={size.size}>
                      {size.size}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.productButtonsContainer}>
                <button className={styles.infoButton}>Info</button>
                <button className={styles.addButton}>
                  <i className='fa-solid fa-plus'></i>
                  <p>{selectedSize === 'Large' ? `£${pizza.sizes.large.price}` : `£${pizza.sizes.medium.price}`}</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
