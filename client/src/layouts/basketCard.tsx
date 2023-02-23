import { useBasket } from "../Context/basketContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import fetchProducts from "../Lib/axios";
import { useQuery } from "@tanstack/react-query";

interface Props {
  qty: number;
  id: string;
}

const BasketCard = ({ id, qty }: Props) => {
  function wait(duration: number) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }

  const { data } = useQuery({
    queryKey: ["Products"],
    queryFn: () =>
      wait(1500).then(() =>
        fetchProducts("http://localhost:8000/api/products")
      ),
  });

  const { removeFromBasket, increaseQuantity, decreaseQuantity } = useBasket();

  const product = data?.products?.find((item: any) => item._id === id);

  if (product == null) return null;

  return (
    <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50 shadow-md px-4">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={product.imgUrl}
          alt="Black Leather Bag"
          className="hidden md:block w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base playfair leading-none text-gray-800 ">
            {product.name}
          </p>
          <p className="flex gap-5">
            Quantity:{" "}
            <span
              onClick={() => decreaseQuantity(id)}
              className="px-2 bg-[#222] cursor-pointer text-white"
            >
              -
            </span>
            {qty}
            <span
              onClick={() => increaseQuantity(id)}
              className="px-2 bg-[#222] cursor-pointer text-white"
            >
              +
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center"></div>
          <p className="text-base font-thin leading-none text-gray-800 ">
            {currencyFormatter.format(product.amount)}
          </p>
        </div>
        <div>colour: {product.colour.join(", ")}</div>
      </div>
      <p
        onClick={() => removeFromBasket(id)}
        className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
      >
        Remove
      </p>
    </div>
  );
};

export default BasketCard;
