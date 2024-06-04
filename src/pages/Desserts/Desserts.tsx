import ProductPage from '../../components/ProductPage/ProductPage';

import { desserts, dessertsWelcomeTextOne, dessertsWelcomeTextTwo } from '../../data/desserts-data';

export default function Desserts() {
  return (
    <ProductPage
      pageTitle='Desserts'
      products={desserts}
      initialSelectedSize='Medium'
      welcomeTextOne={dessertsWelcomeTextOne}
      welcomeTextTwo={dessertsWelcomeTextTwo}
    />
  );
}
