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
  size: 'Medium' | 'Large';
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
  };
};

type PizzasType = {
  pizza1: PizzaType;
  pizza2: PizzaType;
  pizza3: PizzaType;
  pizza4: PizzaType;
  pizza5: PizzaType;
  pizza6: PizzaType;
  pizza7: PizzaType;
  pizza8: PizzaType;
  pizza9: PizzaType;
  pizza10: PizzaType;
};

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
        price: 9.99,
      },
      large: {
        size: 'Large',
        price: 12.99,
      },
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
    },
  },
};
