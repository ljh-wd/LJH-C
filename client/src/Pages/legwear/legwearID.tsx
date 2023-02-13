import Nav from "../../layouts/nav";
import Footer from "../../layouts/footer";
import ProductIdCard from "../../Components/productIdCard";
import useCustomQuery from "../../Hooks/customUseQuery";
import { useParams } from "react-router-dom";

const LegwearId = () => {
  const _id = useParams();
  const legID = _id.id;
  const { data, error, isLoading } = useCustomQuery(
    "legwear",
    "http://localhost:8000/api/legwear"
  );

  let filteredArr = data?.products.filter(
    (product: any) => product._id === legID
  );

  return (
    <>
      <Nav />

      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <div className="h-screen">
          {filteredArr.map((item: any) => (
            <div
              className="w-full mx-auto grid grid-cols-1  justify-items-center mt-10 h-screen"
              key={item._id}
            >
              <ProductIdCard
                gender={item.gender}
                sizes={item.sizes}
                colour={item.colour}
                title={item.name}
                amount={item.amount}
                imgUrl={item.imgUrl}
                id={item._id}
              />
            </div>
          ))}
        </div>
      )}

      <Footer />
    </>
  );
};

export default LegwearId;
