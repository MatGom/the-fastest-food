import toffeeCheesecake from '../images/desserts-img/toffee-cheesecake.png';
import toffeeIcecreams from '../images/desserts-img/toffee-icecreams.png';

import { type ProductsType } from './product-type';

export const dessertsWelcomeTextOne: string = `If you like the toffees like we do, then you came to the right place!`;
export const dessertsWelcomeTextTwo: string = `Our chefs believe that the toffees are the kings and queens of sweets! If you do not believe that, you will after you try our desserts!`;

export const desserts: ProductsType = {
  dessert1: {
    id: 'dessert1',
    name: 'Toffee Cheesecake',
    image: toffeeCheesecake,
    alt: 'Toffee cheesecake',
    sizes: {
      medium: {
        size: 'Medium',
        price: 3.99,
      },
      large: {
        size: 'Large',
        price: 4.99,
      },
      xl: {
        size: 'XL',
        price: 5.99,
      },
    },
    info: {
      ingredients: 'Toffee icing, blueberries, raspberries, mint, cookie crumble, toffee cream foam',
      description: 'Simply the best cheesecake out there!',
    },
  },

  dessert2: {
    id: 'dessert2',
    name: 'Toffee Icecreams',
    image: toffeeIcecreams,
    alt: 'Toffee icecreams',
    sizes: {
      medium: {
        size: 'Medium',
        price: 2.99,
      },
      large: {
        size: 'Large',
        price: 3.99,
      },
      xl: {
        size: 'XL',
        price: 4.99,
      },
    },
    info: {
      ingredients: 'Toffee icing, blueberries, raspberries, mint, toffee icecreams, waffle',
      description: 'If you do not believe that heaven exist, you will when eating those!',
    },
  },
};
