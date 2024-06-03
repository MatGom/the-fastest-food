import styles from './Basket.module.css';

import { useBasket } from '../../hooks/useBasket';

type BasketPropsType = {
  closeBasket: () => void;
};

export default function Basket({ closeBasket }: BasketPropsType) {
  const { basket, totalPrice, clearBasket } = useBasket();

  return (
    <div className={styles.basket}>
      <h3>Basket</h3>
      {basket.length === 0 ? (
        <p>Your basket is empty!</p>
      ) : (
        <>
          <ul>
            {basket.map(item => (
              <li key={item.id + item.size}>
                {item.name} ({item.size}) - £{item.price.toFixed(2)} x {item.quantity}
              </li>
            ))}
          </ul>
          <div className={styles.totalPrice}>
            <strong>Total: £{totalPrice.toFixed(2)}</strong>
          </div>
        </>
      )}
      <button onClick={closeBasket}>Close</button>
      <button onClick={clearBasket}>Clear basket</button>
    </div>
  );
}
