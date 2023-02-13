import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../Lib/axios";

interface Test {
  data: any;
  isloading: any;
  error: any;
}

export default function useCustomQuery(key: string, url: string) {
  const {
    isError,
    isLoading,
    data,
    error,
  }: { isError: any; isLoading: any; data: any; error: any } = useQuery(
    [key],
    () => fetchProducts(url)
  );
  if (isLoading) return isLoading;
  if (isError) return error;

  return { data, isLoading, error };
}
