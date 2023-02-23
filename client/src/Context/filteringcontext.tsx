import { createContext, ReactNode, useContext, useState } from "react";
type FilterProviderProps = {
  children: ReactNode;
};
type FilterContextProps = {
  AtoZ: () => void;
};

const filterContext = createContext({} as FilterContextProps);

export function useFilter() {
  return useContext(filterContext);
}

export function BasketProvider({ children }: FilterProviderProps) {
  function AtoZ() {}

  return (
    <filterContext.Provider
      value={{
        AtoZ,
      }}
    >
      {children}
    </filterContext.Provider>
  );
}
