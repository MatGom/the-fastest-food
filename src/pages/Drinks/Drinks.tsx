import ProductPage from '../../components/ProductPage/ProductPage';

import { drinks, drinksWelcomeTextOne, drinksWelcomeTextTwo } from '../../data/drinks-data';

export default function Drinks() {
  return (
    <ProductPage
      pageTitle='Drinks'
      products={drinks}
      initialSelectedSize='Medium'
      welcomeTextOne={drinksWelcomeTextOne}
      welcomeTextTwo={drinksWelcomeTextTwo}
    />
  );
}
