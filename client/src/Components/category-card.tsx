import { Link } from "react-router-dom";
import PrimaryBtn from "../layouts/primary-btn";

type CardProperties = {
  imgUrl: string;
  title: string;
  href: string;
};

const CategoryCard = (props: CardProperties) => {
  return (
    <div className="w-[400px] h-full  p-5 card">
      <div className="flex flex-col justify-between items-center card-content p-4 h-full bg-white shadow-md rounded-lg">
        <img
          className="h-[470px] p-1 w-full rounded-lg"
          src={props.imgUrl}
          alt="Product Image"
        />
        <h3 className="text-2xl p-3 playfair">{props.title}</h3>

        <div>
          <Link to={props.href}>
            <PrimaryBtn>Shop</PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
