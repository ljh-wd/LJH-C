import Nav from "../../layouts/nav";
import Footer from "../../layouts/footer";
import ProductIdCard from "../../Components/productIdCard";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchProducts from "../../Lib/axios";
import ErrorPage from "../../layouts/error";
import Loading from "../../layouts/loading";

const ProductsID = () => {
  const _id = useParams();
  const topID = _id.id;
  function wait(duration: number) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["Products"],
    queryFn: () =>
      wait(0).then(() =>
        fetchProducts("https://LJH-C-API.onrender.com/api/products")
      ),
  });

  let filteredArr = data?.products.filter(
    (product: any) => product._id === topID
  );

  if (filteredArr && filteredArr.length == 0) {
    return <ErrorPage />;
  }

  return (
    <>
      <Nav />

      {isError && <ErrorPage />}
      {isLoading && <Loading />}
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

export default ProductsID;
