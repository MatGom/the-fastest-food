import bigBoyBurgerImg from '../images/burger-img/big-boy.png';
import quarterpunderBurgerImg from '../images/burger-img/quarter-pounder.png';
import halfPunderburgerImg from '../images/burger-img/half-pounder.png';

import { type ProductsType } from './product-type';

export const burgerWelcomeTextOne: string = `The fastest served burgers in town! They are so good you would want to eat them quick!`;
export const burgerWelcomeTextTwo: string = `Our chef is known to make the tastiest burgers in the world! We believe that burgers are the best with fries and fizzy drink, and that is why we always serve them in meals!`;

export const burgers: ProductsType = {
  burger1: {
    id: 'burger1',
    name: 'Big Boy',
    image: bigBoyBurgerImg,
    alt: 'Burger big boy',
    sizes: {
      medium: {
        size: 'Medium',
        price: 5.99,
      },
      large: {
        size: 'Large',
        price: 7.99,
      },
      xl: {
        size: 'XL',
        price: 9.99,
      },
    },
    info: {
      ingredients: 'Two 100% beef patties, cheese, red onions, tomatoes, lettuce, mayo, seeded burger bun',
      description: 'Our signature burger! If our chef loves it, you will love it too!',
    },
  },

  burger2: {
    id: 'burger2',
    name: 'Quarter Pounder',
    image: quarterpunderBurgerImg,
    alt: 'Burger quarter pounder',
    sizes: {
      medium: {
        size: 'Medium',
        price: 4.99,
      },
      large: {
        size: 'Large',
        price: 6.99,
      },
      xl: {
        size: 'XL',
        price: 8.99,
      },
    },
    info: {
      ingredients: '100% beef patty, cheese, red onions, tomatoes, pickles, lettuce, burger sauce, seeded burger bun',
      description: 'Is there a burger lover that does not like the quarter pounders?',
    },
  },

  burger3: {
    id: 'burger3',
    name: 'Half Pounder',
    image: halfPunderburgerImg,
    alt: 'Burger half pounder',
    sizes: {
      medium: {
        size: 'Medium',
        price: 6.99,
      },
      large: {
        size: 'Large',
        price: 8.99,
      },
      xl: {
        size: 'XL',
        price: 10.99,
      },
    },
    info: {
      ingredients:
        'Two 100% beef patties, double cheese, red onions, tomatoes, pickles, lettuce, burger sauce, seeded burger bun',
      description: 'The big brother of the quarter pounder. Simply more meat, and more cheese!',
    },
  },
};
