import Nav from "../../layouts/nav";
import Footer from "../../layouts/footer";
import ProductCard from "../../Components/productCard";
import Loading from "../../layouts/loading";
import ErrorPage from "../../layouts/error";
import { useQuery, useMutation } from "@tanstack/react-query";
import fetchProducts from "../../Lib/axios";
import Dropdown from "../../Components/dropdown";
import { useFilter } from "../../Context/filteringcontext";

const Products = () => {
  const { query } = useFilter();

  function wait(duration: number) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["Products", query],
    queryFn: () =>
      wait(1000).then(() =>
        fetchProducts(
          `https://LJH-C-API.onrender.com/api/products?sort=${query}`
        )
      ),
  });

  return (
    <div className="h-full w-full">
      <Nav />
      {isError && <ErrorPage />}
      {isLoading && <Loading />}
      {!isLoading && !isError && (
        <div className="flex justify-center items-center w-full bg-neutral-300 p-5 h-fit mt-[68px]">
          <Dropdown
            optionOne={"A-Z"}
            optionTwo={"Z-A"}
            optionThree={"Price: High - Low"}
            optionFour={"Price: Low - High"}
          >
            Sort
          </Dropdown>
        </div>
      )}
      {data && (
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
          {data?.products?.map((product: any) => (
            <ProductCard
              href="products"
              title={product.name}
              imgUrl={product.imgUrl}
              amount={product.amount}
              key={product._id}
              id={product._id}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Products;
