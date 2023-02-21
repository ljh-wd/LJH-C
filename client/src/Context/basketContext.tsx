import { ReactNode, createContext } from "react";
import BasketModal from "../layouts/basket/basket-modal";

type BasketProviderProps = {
  children: ReactNode;
};

type BasketContext = {
  increaseQty: (number: number) => void;
  decreaseQty: (number: number) => void;
  removeFromBasket: (id: string) => void;
};

const basketContext = createContext({} as BasketContext);

export function BasketContextProvider({ children }: BasketProviderProps) {
  function increaseQty(number: number) {
    console.log("Added to basket");
  }
  function decreaseQty(number: number) {}
  function removeFromBasket(id: string) {}
  return (
    <basketContext.Provider
      value={{
        increaseQty,
        decreaseQty,
        removeFromBasket,
      }}
    >
      {children}
      <BasketModal />
    </basketContext.Provider>
  );
}
