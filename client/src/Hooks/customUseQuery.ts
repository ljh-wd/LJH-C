import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../Lib/axios";

export default function useCustomQuery(url: string, queryKey: string[]) {
  const { isError, isLoading, data, error } = useQuery(queryKey, () =>
    fetchProducts(url)
  );

  return { data, isLoading, error, isError };
}
