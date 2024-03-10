import React, { createContext, useContext, useState } from "react";

interface CardItem {
  id: number;
  name: string;
  img: string;
  quantity: number;
}

interface CardContextType {
  cardItems: CardItem[];
  addToCard: (item: CardItem) => void;
  removeFromCart: (id: number) => void;
}

const CardContext = createContext<CardContextType>({
  cardItems: [],
  addToCard: () => {},
  removeFromCart: () => {},
});

export const useCard = () => useContext(CardContext);

export const CardProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [cardItems, setCardItems] = useState<CardItem[]>([]);

  const addToCard = (item: CardItem) => {
    setCardItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        };
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCardItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CardContext.Provider value={{ cardItems, addToCard, removeFromCart }}>
      {children}
    </CardContext.Provider>
  );
};
