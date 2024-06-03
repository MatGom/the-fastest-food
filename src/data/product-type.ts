type ProductSizeType = {
  size: string;
  price: number;
};

export type ProductType = {
  id: string;
  name: string;
  image: string;
  alt: string;
  sizes: {
    medium: ProductSizeType;
    large: ProductSizeType;
    xl: ProductSizeType;
  };
  info: {
    ingredients: string;
    description: string;
  };
};

export type ProductsType = Record<string, ProductType>;
