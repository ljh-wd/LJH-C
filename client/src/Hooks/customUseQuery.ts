import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../Lib/axios";

export default function useCustomQuery(key: string, url: string) {
  const { isError, isLoading, data, error } = useQuery([key], () =>
    fetchProducts(url)
  );
  if (isLoading) return isLoading;
  if (isError) return error;

  console.log(data);

  return { data, isLoading, error };
}
