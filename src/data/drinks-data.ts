import tomatoJuiceImg from '../images/drinks-img/tomato-juice.png';
import cherryJuiceImg from '../images/drinks-img/cherry-juice.png';
import carrotJuiceImg from '../images/drinks-img/carrot-juice.png';

import { type ProductsType } from './product-type';

export const drinksWelcomeTextOne: string = `Fancy some healthy drinks? Our's are of best quality!`;
export const drinksWelcomeTextTwo: string = `Even our chefs believe that it is healthy to consume fruits! They are rich in vitamins and can make tasty drinks!`;

export const drinks: ProductsType = {
  drink1: {
    id: 'drink1',
    name: 'Tomato juice',
    image: tomatoJuiceImg,
    alt: 'Tomato juice',
    sizes: {
      medium: {
        size: 'Medium',
        price: 1.99,
      },
      large: {
        size: 'Large',
        price: 2.49,
      },
      xl: {
        size: 'XL',
        price: 2.99,
      },
    },
    info: {
      ingredients: 'Freshly squeezed 100% tomato juice',
      description: 'Yes tomatoes are fruits, and this is a drink, not a ketchup!',
    },
  },

  drink2: {
    id: 'drink2',
    name: 'Cherry juice',
    image: cherryJuiceImg,
    alt: 'Cherry juice',
    sizes: {
      medium: {
        size: 'Medium',
        price: 1.99,
      },
      large: {
        size: 'Large',
        price: 2.49,
      },
      xl: {
        size: 'XL',
        price: 2.99,
      },
    },
    info: {
      ingredients: 'Freshly squeezed 100% cherry juice',
      description: `Cherry'o! Super tasty and refreshing!`,
    },
  },

  drink3: {
    id: 'drink3',
    name: 'Carrot juice',
    image: carrotJuiceImg,
    alt: 'Carrot juice',
    sizes: {
      medium: {
        size: 'Medium',
        price: 1.99,
      },
      large: {
        size: 'Large',
        price: 2.49,
      },
      xl: {
        size: 'XL',
        price: 2.99,
      },
    },
    info: {
      ingredients: 'Freshly squeezed 100% carrot juice',
      description: 'Carrots are actually vegetables but can make a tasty and healthy juice!',
    },
  },
};
