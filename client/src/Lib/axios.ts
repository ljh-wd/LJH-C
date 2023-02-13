import axios from "axios";

const fetchProducts = async (url: string) => {
  const response = await axios
    .get(url)
    .then((response) => {
      if (!response.status) throw new Error("Failed to fetch products");
      return response.data;
    })
    .catch((err) => {
      throw new Error("Failed to fetch products");
    });

  return response;
};

export default fetchProducts;
