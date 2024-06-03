import mozzarellaPizzaImg from '../images/pizza img/mozzarella.jpg';
import fetaPassionPizzaImg from '../images/pizza img/feta.jpg';
import simplyHamPizzaImg from '../images/pizza img/ham.jpg';
import funghiPizzaImg from '../images/pizza img/mushrooms.jpg';
import hawaiianPizzaImg from '../images/pizza img/hawaiian.jpg';
import meatyPizzaImg from '../images/pizza img/meaty.jpg';
import signaturePizzaImg from '../images/pizza img/meaty-special.jpg';
import sausagePizzaImg from '../images/pizza img/sausage.jpg';
import vegetarianPizzaImg from '../images/pizza img/vegetarian.jpg';
import vegySpecialPizzaImg from '../images/pizza img/vegetarian-special.jpg';

type PizzaSizeType = {
  size: 'Medium' | 'Large' | 'XL';
  price: number;
};

type PizzaType = {
  id: string;
  name: string;
  image: string;
  alt: string;
  sizes: {
    medium: PizzaSizeType;
    large: PizzaSizeType;
    xl: PizzaSizeType;
  };
  info: {
    ingredients: string;
    description: string;
  };
};

export type PizzasType = Record<string, PizzaType>;

export const pizzas: PizzasType = {
  pizza1: {
    id: 'pizza1',
    name: 'Mozzarella',
    image: mozzarellaPizzaImg,
    alt: 'Pizza mozzarella',
    sizes: {
      medium: {
        size: 'Medium',
        price: 8.99,
      },
      large: {
        size: 'Large',
        price: 11.99,
      },
      xl: {
        size: 'XL',
        price: 14.99,
      },
    },
    info: {
      ingredients: 'Tomato base sauce, basil, cheddar, mozzarella, cherry tomatoes',
      description: 'Simple, but delicious! For those that love the taste of mozzarella!',
    },
  },

  pizza2: {
    id: 'pizza2',
    name: 'Feta passion',
    image: fetaPassionPizzaImg,
    alt: 'Pizza feta passion',
    sizes: {
      medium: {
        size: 'Medium',
        price: 9.99,
      },
      large: {
        size: 'Large',
        price: 12.99,
      },
      xl: {
        size: 'XL',
        price: 15.99,
      },
    },
    info: {
      ingredients: 'Tomato base sauce, basil, cheddar, feta, cherry tomatoes',
      description: 'This delicious pizza is a great source of protein for anyone!',
    },
  },

  pizza3: {
    id: 'pizza3',
    name: 'Simply ham',
    image: simplyHamPizzaImg,
    alt: 'Pizza simply ham',
    sizes: {
      medium: {
        size: 'Medium',
        price: 8.99,
      },
      large: {
        size: 'Large',
        price: 11.99,
      },
      xl: {
        size: 'XL',
        price: 13.99,
      },
    },
    info: {
      ingredients: 'Tomato base sauce, basil, cheddar, ham, cherry tomatoes',
      description: 'This simple pizza is great for all those ham lovers!',
    },
  },

  pizza4: {
    id: 'pizza4',
    name: 'Funghi',
    image: funghiPizzaImg,
    alt: 'Pizza funghi',
    sizes: {
      medium: {
        size: 'Medium',
        price: 9.99,
      },
      large: {
        size: 'Large',
        price: 12.99,
      },
      xl: {
        size: 'XL',
        price: 15.99,
      },
    },
    info: {
      ingredients: 'Tomato base sauce, basil, cheddar, mushrooms, cherry tomatoes',
      description: 'If you like the mushrooms, you will love this pizza!',
    },
  },

  pizza5: {
    id: 'pizza5',
    name: 'Hawaiian',
    image: hawaiianPizzaImg,
    alt: 'Pizza hawaiian',
    sizes: {
      medium: {
        size: 'Medium',
        price: 9.99,
      },
      large: {
        size: 'Large',
        price: 12.99,
      },
      xl: {
        size: 'XL',
        price: 15.99,
      },
    },
    info: {
      ingredients: 'Tomato base sauce, basil, cheddar, pineapple, ham',
      description: 'For anyone that likes a bit of a sweet taste in pizza, especially for those that love pineapples!',
    },
  },

  pizza6: {
    id: 'pizza6',
    name: 'Meaty One',
    image: meatyPizzaImg,
    alt: 'Pizza meaty one',
    sizes: {
      medium: {
        size: 'Medium',
        price: 10.99,
      },
      large: {
        size: 'Large',
        price: 13.99,
      },
      xl: {
        size: 'XL',
        price: 16.99,
      },
    },
    info: {
      ingredients: 'Tomato base sauce, basil, cheddar, black olives, cherry tomatoes, jalapeno, beef, sausage',
      description: 'Any meat lovers out there? This pizza is a great choice for you!',
    },
  },

  pizza7: {
    id: 'pizza7',
    name: 'The Signature',
    image: signaturePizzaImg,
    alt: 'Pizza the signature',
    sizes: {
      medium: {
        size: 'Medium',
        price: 10.99,
      },
      large: {
        size: 'Large',
        price: 13.99,
      },
      xl: {
        size: 'XL',
        price: 16.99,
      },
    },
    info: {
      ingredients: 'Tomato base sauce, basil, cheddar, black olives, cherry tomatoes, lime, beef, red onion',
      description: 'We are very proud of our signature pizza! We are sure that you will love it!',
    },
  },

  pizza8: {
    id: 'pizza8',
    name: 'Sausage One',
    image: sausagePizzaImg,
    alt: 'Pizza sausage one',
    sizes: {
      medium: {
        size: 'Medium',
        price: 9.99,
      },
      large: {
        size: 'Large',
        price: 12.99,
      },
      xl: {
        size: 'XL',
        price: 15.99,
      },
    },
    info: {
      ingredients: 'Tomato base sauce, parsley, cheddar, sausage',
      description:
        'Sounds very simple, but this pizza actually differs a lot from the others, yet it is still delicious!',
    },
  },

  pizza9: {
    id: 'pizza9',
    name: 'Vegetarian',
    image: vegetarianPizzaImg,
    alt: 'Pizza vegetarian',
    sizes: {
      medium: {
        size: 'Medium',
        price: 9.99,
      },
      large: {
        size: 'Large',
        price: 12.99,
      },
      xl: {
        size: 'XL',
        price: 15.99,
      },
    },
    info: {
      ingredients: 'Tomato base sauce, basil, cheddar, black olives, red onion, red peppers, jalapeno',
      description: 'For anyone that prefers a pizza without a meat in it! And it is delicious!',
    },
  },

  pizza10: {
    id: 'pizza10',
    name: 'Vegy Special',
    image: vegySpecialPizzaImg,
    alt: 'Pizza vegy special',
    sizes: {
      medium: {
        size: 'Medium',
        price: 10.99,
      },
      large: {
        size: 'Large',
        price: 13.99,
      },
      xl: {
        size: 'XL',
        price: 16.99,
      },
    },
    info: {
      ingredients: 'Tomato base sauce, basil, cheddar, cherry tomatoes, red onion, jalapeno, broccoli',
      description: 'This one is our special variant of a vegetarian pizza, and we are very proud of it!',
    },
  },
};
