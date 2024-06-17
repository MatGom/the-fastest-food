import styles from './Home.module.css';
import homeImage from '../../images/home-chef.jpg';

export default function Home() {
  return (
    <section className={styles.home}>
      <h2 className={styles.homeTitle}>Home</h2>
      <div className={styles.homeImageContainer}>
        <img src={homeImage} alt='Picture of chef' />
        <h3 className={styles.homeSubtitle}>
          The best and <br /> <span>The Fastest Food</span> <br /> in town!
        </h3>
      </div>
      <div className={styles.homeInfo}>
        <p className={styles.homeInfoTextOne}>
          Our team is passionate about food. We take pride in preparing meals that are not only of the highest quality
          but also look fantastic and taste even better! We know that once you place an order, you can't wait for it to
          be delivered. That's why our delivery system is incredibly fast as our drivers were once top racing
          competitors! Our award-winning chefs are renowned not only for their speed but also for the deliciousness of
          their meals.
        </p>
        <p className={styles.homeInfoTextTwo}>
          Explore our menu! We are confident that once you try our food, you'll become a loyal customer for life!
        </p>
      </div>
    </section>
  );
}
