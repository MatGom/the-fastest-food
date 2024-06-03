import { ChangeEvent, useState, useCallback } from 'react';
import styles from './Pizzas.module.css';
import { pizzas } from '../../data/pizzas-data';
import { useBasket } from '../../hooks/useBasket';

export default function Pizzas() {
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: string }>(
    Object.keys(pizzas).reduce((acc, key) => {
      acc[key] = 'Large';
      return acc;
    }, {} as { [key: string]: string })
  );
  const [infoID, setInfoID] = useState<string | null>(null);
  const { addToBasket } = useBasket();

  const handleChangeSize = (event: ChangeEvent<HTMLSelectElement>, id: string) => {
    setSelectedSize({
      ...selectedSize,
      [id]: event.target.value,
    });
  };

  const handleOpenInfo = (id: string) => {
    setInfoID(id);
  };

  const handleCloseInfo = () => {
    setInfoID(null);
  };

  const handleAddToBasket = useCallback(
    (id: string) => {
      const pizza = pizzas[id];
      const size = selectedSize[id];
      const price = pizza.sizes[size.toLowerCase() as keyof typeof pizza.sizes].price;
      const item = {
        id: pizza.id,
        name: pizza.name,
        size,
        price,
      };

      addToBasket(item);
    },
    [selectedSize, addToBasket]
  );

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
                <select
                  value={selectedSize[pizza.id]}
                  className={styles.select}
                  onChange={event => handleChangeSize(event, pizza.id)}>
                  {Object.values(pizza.sizes).map(size => (
                    <option key={size.size} value={size.size}>
                      {size.size}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.productButtonsContainer}>
                <button className={styles.infoButton} onClick={() => handleOpenInfo(pizza.id)}>
                  Info
                </button>
                <button className={styles.addButton} onClick={() => handleAddToBasket(pizza.id)}>
                  <i className='fa-solid fa-plus'></i>
                  <p>{`£${pizza.sizes[selectedSize[pizza.id].toLowerCase() as keyof typeof pizza.sizes].price}`}</p>
                </button>
              </div>
            </div>
            {infoID === pizza.id && (
              <div className={styles.productInfo}>
                <p className={styles.productIngredients}>
                  <span>Ingredients:</span> {pizza.info.ingredients}.
                </p>
                <p className={styles.productDescription}>{pizza.info.description}</p>
                <button onClick={handleCloseInfo}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
