import { currencyFormatter } from "../../utils/currencyFormatter";

interface Props {
  title: string;
  amount: number;
  imgUrl: string;
}

const BasketCard = (props: Props) => {
  return (
    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={props.imgUrl}
          alt="Black Leather Bag"
          className="md:hidden w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <p className="text-xs leading-3 text-gray-800  md:pt-0 pt-4">RF293</p>
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800 ">
            {props.title}
          </p>
          <select
            aria-label="Select quantity"
            className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none   "
          >
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div className="flex itemms-center">
            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
              Remove
            </p>
          </div>
          <p className="text-base font-black leading-none text-gray-800 ">
            {currencyFormatter.format(props.amount)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
