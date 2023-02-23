import { createContext, ReactNode, useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import BasketModal from "../layouts/basket/basket-modal";
type BasketProviderProps = {
  children: ReactNode;
};
type BasketContextProps = {
  getQuantity: (id: string) => number;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromBasket: (id: string) => void;
  openBasket: () => void;
  closeBasket: () => void;
  items: BasketItem[];
};

type BasketItem = {
  id: string;
  qty: number;
};

const basketContext = createContext({} as BasketContextProps);

export function useBasket() {
  return useContext(basketContext);
}

export function BasketProvider({ children }: BasketProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useLocalStorage<BasketItem[]>("Items", []);

  function getQuantity(id: string) {
    return items.find((item: any) => item.id === id)?.qty || 0;
  }

  function increaseQuantity(id: string) {
    setItems((currentArr: any) => {
      if (currentArr.find((item: any) => item.id === id) == null) {
        return [...currentArr, { id, qty: 1 }];
      } else {
        return currentArr.map((item: any) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseQuantity(id: string) {
    setItems((currentArr: any) => {
      if (currentArr.find((item: any) => item.id === id)?.qty === 1) {
        return currentArr.filter((item: any) => item.id !== id);
      } else {
        return currentArr.map((item: any) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromBasket(id: string) {
    setItems((currentArr: []) => {
      return currentArr.filter((item: any) => item.id !== id);
    });
  }

  const openBasket = () => setIsOpen(true);
  const closeBasket = () => setIsOpen(false);

  return (
    <basketContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromBasket,
        closeBasket,
        openBasket,
        items,
      }}
    >
      {children}
      <BasketModal />
    </basketContext.Provider>
  );
}
