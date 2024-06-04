import styles from './Basket.module.css';

import { useBasket } from '../../hooks/useBasket';

type BasketPropsType = {
  closeBasket: () => void;
};

export default function Basket({ closeBasket }: BasketPropsType) {
  const { basket, totalPrice, clearBasket } = useBasket();

  return (
    <div className={styles.basket}>
      <h3 className={styles.basketTitle}>Basket</h3>
      <div className={styles.basketContent}>
        {basket.length === 0 ? (
          <p className={styles.basketEmptyText}>Your basket is empty!</p>
        ) : (
          <>
            <ul className={styles.basketList}>
              {basket.map(item => (
                <li key={item.id + item.size} className={styles.basketListItem}>
                  <h4 className={styles.basketListItemTitle}>
                    {item.name} ({item.size})
                  </h4>
                  <div className={styles.basketListItemContent}>
                    <p className={styles.basketListItemPrice}>£{(item.price * item.quantity).toFixed(2)}</p>
                    <div className={styles.basketListItemButtons}>
                      <button>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                      <p>{item.quantity}</p>
                      <button>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
        {basket.length === 0 ? (
          <div className={styles.basketOptionsButton}>
            <button onClick={closeBasket} className={styles.closeBasketButton}>
              Close
            </button>
          </div>
        ) : (
          <div className={styles.basketOptionsButtons}>
            <button onClick={closeBasket} className={styles.closeBasketButton}>
              Close
            </button>
            <button onClick={clearBasket} className={styles.clearBasketButton}>
              Clear basket
            </button>
          </div>
        )}
        {basket.length !== 0 && (
          <button className={styles.checkoutButton}>
            <p>Checkout</p>
            <p>£{totalPrice.toFixed(2)}</p>
          </button>
        )}
      </div>
    </div>
  );
}
