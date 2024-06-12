import { createContext, useState, ReactNode, useEffect, useCallback } from 'react';

type BasketItemType = {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
};

type BasketContextType = {
  basket: BasketItemType[];
  totalPrice: number;
  addToBasket: (item: Omit<BasketItemType, 'quantity'>) => void;
  clearBasket: () => void;
  increaseQuantity: (id: string, size: string) => void;
  decreaseQuantity: (id: string, size: string) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

type BasketProviderProps = {
  children: ReactNode;
};

const getInitialBasket = () => {
  const savedBasket = localStorage.getItem('basket');
  return savedBasket ? JSON.parse(savedBasket) : [];
};

export const BasketProvider = ({ children }: BasketProviderProps) => {
  const [basket, setBasket] = useState<BasketItemType[]>(getInitialBasket);
  console.log(basket);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  console.log(basket);

  useEffect(() => {
    const newTotalPrice = basket.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(newTotalPrice);
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addToBasket = useCallback((item: Omit<BasketItemType, 'quantity'>) => {
    setBasket(prevBasket => {
      const existingItemIndex = prevBasket.findIndex(
        basketItem => basketItem.id === item.id && basketItem.size === item.size
      );

      if (existingItemIndex >= 0) {
        const updatedBasket = [...prevBasket];
        updatedBasket[existingItemIndex] = {
          ...updatedBasket[existingItemIndex],
          quantity: updatedBasket[existingItemIndex].quantity + 1,
        };
        return updatedBasket;
      }

      const newBasket = [...prevBasket, { ...item, quantity: 1 }];
      return newBasket;
    });
  }, []);

  const clearBasket = useCallback(() => {
    setBasket([]);
    localStorage.removeItem('basket');
  }, []);

  const increaseQuantity = useCallback((id: string, size: string) => {
    setBasket(prevBasket => {
      return prevBasket.map(item => {
        if (item.id === id && item.size === size) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  }, []);

  const decreaseQuantity = useCallback((id: string, size: string) => {
    setBasket(prevBasket => {
      return prevBasket
        .map(item => {
          if (item.id === id && item.size === size) {
            return { ...item, quantity: Math.max(item.quantity - 1, 0) };
          }
          return item;
        })
        .filter(item => item.quantity > 0);
    });
  }, []);

  return (
    <BasketContext.Provider value={{ basket, totalPrice, addToBasket, clearBasket, increaseQuantity, decreaseQuantity }}>{children}</BasketContext.Provider>
  );
};

export { BasketContext };
