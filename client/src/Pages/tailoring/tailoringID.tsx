import Nav from "../../layouts/nav";
import Footer from "../../layouts/footer";
import ProductIdCard from "../../Components/productIdCard";
import useCustomQuery from "../../Hooks/customUseQuery";
import { useParams } from "react-router-dom";

const TailoringID = () => {
  const _id = useParams();
  const TailorID = _id.id;
  const { data, error, isLoading } = useCustomQuery(
    "tailoring",
    "http://localhost:8000/api/tailoring"
  );

  let filteredArr = data?.products.filter(
    (product: any) => product._id === TailorID
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

export default TailoringID;
