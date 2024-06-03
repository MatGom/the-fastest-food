import ProductPage from '../../components/ProductPage/ProductPage';

import { pizzas, pizzaWelcomeTextOne, pizzaWelcomeTextTwo } from '../../data/pizzas-data';

export default function Pizzas() {
  return (
    <ProductPage
      pageTitle='Pizzas'
      products={pizzas}
      initialSelectedSize='Large'
      welcomeTextOne={pizzaWelcomeTextOne}
      welcomeTextTwo={pizzaWelcomeTextTwo}
    />
  );
}
