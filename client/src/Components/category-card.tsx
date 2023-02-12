import { Link } from "react-router-dom";
import ProductBtn from "./productBtn";

type CardProperties = {
  imgUrl: string;
  title: string;
  href: string;
};

const CategoryCard = (props: CardProperties) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <img src={props.imgUrl} className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <p className="text-lg playfair text-black truncate block capitalize my-2">
          {props.title}
        </p>
        <div className="flex items-center justify-center">
          <Link to="/shop/tops">
            <ProductBtn>Shop</ProductBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
