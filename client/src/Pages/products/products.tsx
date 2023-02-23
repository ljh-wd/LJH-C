import Nav from "../../layouts/nav";
import Footer from "../../layouts/footer";
import ProductCard from "../../Components/productCard";
import Loading from "../../layouts/loading";
import ErrorPage from "../../layouts/error";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../../Lib/axios";
import Dropdown from "../../Components/dropdown";

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

const Products = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Products"],
    queryFn: () =>
      wait(1500).then(() =>
        fetchProducts("http://localhost:8000/api/products")
      ),
  });

  return (
    <>
      <Nav />
      {isError && <ErrorPage />}
      {isLoading && <Loading />}
      <div className="flex justify-between items-center w-full h-20 bg-slate-200 p-5">
        <Dropdown
          optionOne={"A-Z"}
          optionTwo={"Z-A"}
          optionThree={"Price: High - Low"}
          optionFour={"Price: Low - High"}
        >
          Sort
        </Dropdown>
      </div>
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
    </>
  );
};

export default Products;
