import styles from './Deals.module.css';
import { useState } from 'react';
import { pizzas } from '../../data/pizzas-data';
import { burgers } from '../../data/burgers-data';
import { useBasket } from '../../hooks/useBasket';

export default function Deals() {
  const { addToBasket } = useBasket();
  const [selectedDeal, setSelectedDeal] = useState('');
  const [selectedPizza1, setSelectedPizza1] = useState('');
  const [selectedPizza2, setSelectedPizza2] = useState('');
  const [selectedBurger1, setSelectedBurger1] = useState('');
  const [selectedBurger2, setSelectedBurger2] = useState('');

  const handleDealChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeal(event.target.value);
    setSelectedPizza1('');
    setSelectedPizza2('');
    setSelectedBurger1('');
    setSelectedBurger2('');
  };

  const handleAddToBasket = () => {
    if (selectedDeal === 'pizza') {
      const pizza1 = pizzas[selectedPizza1];
      const pizza2 = pizzas[selectedPizza2];
      const highestPricePizza = pizza1.sizes.large.price > pizza2.sizes.large.price ? pizza1 : pizza2;
      const freePizza = pizza1.sizes.large.price > pizza2.sizes.large.price ? pizza2 : pizza1;
      const description = `Buy One Get One Free Pizza Deal: ${highestPricePizza.name} and ${freePizza.name}`;
      addToBasket({
        id: `${selectedPizza1}-${selectedPizza2}-deal`,
        name: description,
        size: 'Large',
        price: highestPricePizza.sizes.large.price,
        quantity: 1,
        description,
      });
    } else if (selectedDeal === 'burger') {
      const burger1 = burgers[selectedBurger1];
      const burger2 = burgers[selectedBurger2];
      const lowestPriceBurger = burger1.sizes.large.price < burger2.sizes.large.price ? burger1 : burger2;
      const highestPriceBurger = burger1.sizes.large.price >= burger2.sizes.large.price ? burger1 : burger2;
      const description = `Buy One Get 50% Off Burger Deal: ${highestPriceBurger.name} and ${lowestPriceBurger.name}`;
      addToBasket({
        id: `${selectedBurger1}-${selectedBurger2}-deal`,
        name: description,
        size: 'Large',
        price: highestPriceBurger.sizes.large.price + lowestPriceBurger.sizes.large.price / 2,
        quantity: 1,
        description,
      });
    }
    setSelectedDeal('');
  };

  const renderPizzaOptions = () =>
    Object.values(pizzas)
      .filter(pizza => pizza.sizes.large)
      .map(pizza => (
        <option key={pizza.id} value={pizza.id}>
          {pizza.sizes.large.size} {pizza.name} - £{pizza.sizes.large.price}
        </option>
      ));

  const renderBurgerOptions = () =>
    Object.values(burgers)
      .filter(burger => burger.sizes.large)
      .map(burger => (
        <option key={burger.id} value={burger.id}>
          {burger.sizes.large.size} {burger.name} - £{burger.sizes.large.price}
        </option>
      ));

  return (
    <section className={styles.deals}>
      <h2 className={styles.dealsTitle}>Deals</h2>
      <div className={styles.dealsWelcomeText}>
        <p>Buying in bulks? Please check our deals! Our offers are the best in the market! </p>
        <p>
          All of our chefs understand that after trying our delicious food, you would want to buy as much as possible
          for as little as possible!
        </p>
      </div>
      <select value={selectedDeal} onChange={handleDealChange} className={styles.select}>
        <option value=''>Select a deal</option>
        <option value='pizza'>Buy One Get One Free Pizza (Large)</option>
        <option value='burger'>Buy One Burger, Get 50% Off Next Burger</option>
      </select>

      {selectedDeal === 'pizza' && (
        <div className={styles.dealOptions}>
          <h3>Select Pizzas</h3>
          <select value={selectedPizza1} onChange={e => setSelectedPizza1(e.target.value)} className={styles.select}>
            <option value=''>Select first pizza</option>
            {renderPizzaOptions()}
          </select>
          <select value={selectedPizza2} onChange={e => setSelectedPizza2(e.target.value)} className={styles.select}>
            <option value=''>Select second pizza</option>
            {renderPizzaOptions()}
          </select>
        </div>
      )}

      {selectedDeal === 'burger' && (
        <div className={styles.dealOptions}>
          <h3>Select Burgers</h3>
          <select value={selectedBurger1} onChange={e => setSelectedBurger1(e.target.value)} className={styles.select}>
            <option value=''>Select first burger</option>
            {renderBurgerOptions()}
          </select>
          <select value={selectedBurger2} onChange={e => setSelectedBurger2(e.target.value)} className={styles.select}>
            <option value=''>Select second burger</option>
            {renderBurgerOptions()}
          </select>
        </div>
      )}

      {selectedDeal && (
        <>
          {(selectedDeal === 'pizza' && selectedPizza1 && selectedPizza2) ||
          (selectedDeal === 'burger' && selectedBurger1 && selectedBurger2) ? (
            <button onClick={handleAddToBasket} className={styles.addToBasketButton}>
              Add to Basket
            </button>
          ) : (
            <p className={styles.selectPrompt}>Please select both items to proceed</p>
          )}
        </>
      )}
    </section>
  );
}
