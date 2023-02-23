import { useBasket } from "../../Context/basketContext";
import useCustomQuery from "../../Hooks/customUseQuery";
import { currencyFormatter } from "../../utils/currencyFormatter";

interface Props {
  qty: number;
  id: string;
}

const BasketCard = ({ id, qty }: Props) => {
  const { data } = useCustomQuery(
    "Products",
    "http://localhost:8000/api/products"
  );

  const { removeFromBasket } = useBasket();

  const product = data?.products?.find((item: any) => item._id === id);

  if (product == null) return null;

  return (
    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={product.imgUrl}
          alt="Black Leather Bag"
          className="hidden md:block w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <p className="text-xs leading-3 text-gray-800  md:pt-0 pt-4">
          id: {id}
        </p>
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800 ">
            {product.title}
          </p>
          <p>Quantity: {qty}</p>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div className="flex itemms-center">
            <p
              onClick={() => removeFromBasket(id)}
              className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
            >
              Remove
            </p>
          </div>
          <p className="text-base font-black leading-none text-gray-800 ">
            {currencyFormatter.format(product.amount)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
