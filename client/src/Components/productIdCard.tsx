import { useNavigate } from "react-router-dom";
import ProductBtn from "./productBtn";
import { currencyFormatter } from "../utils/currencyFormatter";
import PrimaryBtn from "../layouts/primary-btn";

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
  const navigate = useNavigate();

  return (
    <div className="flex items-start flex-col justify-around">
      <button
        onClick={() => navigate(-1)}
        className="playfair tracking-wider bg-[#222] text-[#eee] uppercase px-7 py-3 rounded-sm transition hover:bg-transparent hover:text-[#222] hover:border hover:border-[#222] "
      >
        Back
      </button>
      <div className="bg-white w-80 shadow-md rounded-xl duration-500  hover:shadow-xl h-fit">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdCard;
