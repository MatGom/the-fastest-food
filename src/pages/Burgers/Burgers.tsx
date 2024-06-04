import ProductPage from '../../components/ProductPage/ProductPage';

import { burgers, burgerWelcomeTextOne, burgerWelcomeTextTwo } from '../../data/burgers-data';

export default function Burgers() {
  return (
    <ProductPage
      pageTitle='Burgers'
      products={burgers}
      initialSelectedSize='Medium'
      welcomeTextOne={burgerWelcomeTextOne}
      welcomeTextTwo={burgerWelcomeTextTwo}
    />
  );
}
