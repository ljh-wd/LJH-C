import { Link } from "react-router-dom";
import ProductBtn from "./productBtn";
import { currencyFormatter } from "../utils/currencyFormatter";

type CardProperties = {
  imgUrl: string;
  title: string;
  amount: number;
  id: string;
  gender: string;
  colour: string[];
  sizes: string[];
};

const ProductIdCard = (props: CardProperties) => {
  return (
    <div className="bg-white w-80 shadow-md rounded-xl duration-500  hover:shadow-xl h-fit">
      <Link to={`/shop/tops/${props.id}`}>
        <img
          src={props.imgUrl}
          className="h-80 w-80 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">LJH-C</span>
          <h4 className="text-lg font-bold text-black truncate block capitalize playfair">
            {props.title}
          </h4>
          <div className="flex items-start flex-col">
            <p className="text-lg text-zinc-500 font-light cursor-auto my-3">
              {currencyFormatter.format(props.amount)}
            </p>
            <p className="font-thin text-black">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident, ullam.
            </p>
            <p className="py-2 text-zinc-700">
              <span className="text-black">Colour: </span>
              {props.colour.join(", ")}
            </p>
            <p className="py-2 text-zinc-700">
              <span className="text-black">Gender:</span> {props.gender}
            </p>
            <div className="py-4 flex justify-between items-center gap-5">
              <ProductBtn>Add To Basket</ProductBtn>
              <select name="sizes" required={true}>
                <option disabled value="" selected>
                  Choose a size
                </option>
                <option value="XS">{props.sizes[0]}</option>
                <option value="S">{props.sizes[1]}</option>
                <option value="M">{props.sizes[2]}</option>
                <option value="L">{props.sizes[3]}</option>
                <option value="XL">{props.sizes[4]}</option>
              </select>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductIdCard;
