import PrimaryBtn from "../layouts/primary-btn";

type CardProperties = {
  imgUrl: string;
  title: string;
  href: string;
};

const CategoryCard = (props: CardProperties) => {
  return (
    <div className="w-[400px] h-[700px]  p-3 card">
      <div className="flex flex-col justify-between items-center card-content p-4 h-full bg-white shadow-md rounded-lg">
        <img
          className="h-full w-full rounded-lg"
          src={props.imgUrl}
          alt="Product Image"
        />
        <h3 className="text-2xl p-3 playfair">{props.title}</h3>

        <div>
          <a href={props.href}>
            <PrimaryBtn>Shop</PrimaryBtn>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
