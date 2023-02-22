import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
type BasketProviderProps = {
  children: ReactNode;
};
type BasketContextProps = {
  addToBasket: (id: any) => void;
};

type BasketItem = {
  id: string;
  quantity: number;
};

const basketContext = createContext({} as BasketContextProps);

export function useBasket() {
  return useContext(basketContext);
}

export function BasketProvider({ children }: BasketProviderProps) {
  const [items, setItems] = useLocalStorage<BasketItem[]>("Items", []);

  function addToBasket(id: any) {
    setItems((prevArray: []) => {
      return [...prevArray, { id: id }];
    });
  }
  // ! localStorage.clear();
  console.log(items);
  return (
    <basketContext.Provider
      value={{
        addToBasket,
      }}
    >
      {children}
    </basketContext.Provider>
  );
}
