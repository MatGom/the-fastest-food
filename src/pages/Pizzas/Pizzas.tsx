import styles from './Pizzas.module.css';

export default function Pizzas() {
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
    </section>
  );
}
