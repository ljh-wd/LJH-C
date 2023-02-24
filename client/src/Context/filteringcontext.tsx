import { createContext, ReactNode, useContext, useState } from "react";
type FilterProviderProps = {
  children: ReactNode;
};
type FilterContextProps = {
  AtoZ: (queryKey: any) => void;
  ZtoA: (queryKey: any) => void;
  LowToHigh: (queryKey: any) => void;
  HighToLow: (queryKey: any) => void;
  query: any;
};

const filterContext = createContext({} as FilterContextProps);

export function useFilter() {
  return useContext(filterContext);
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [query, setQuery] = useState("");

  function AtoZ(queryKey: any) {
    setQuery(queryKey);
    return query;
  }

  function ZtoA(queryKey: any) {
    setQuery(queryKey);
    return query;
  }

  function HighToLow(queryKey: any) {
    setQuery(queryKey);
    return query;
  }

  function LowToHigh(queryKey: any) {
    setQuery(queryKey);
    return query;
  }

  return (
    <filterContext.Provider
      value={{
        AtoZ,
        ZtoA,
        HighToLow,
        LowToHigh,
        query,
      }}
    >
      {children}
    </filterContext.Provider>
  );
}
