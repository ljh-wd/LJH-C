// import ProductCard from "../Components/productCard";
import Nav from "../layouts/nav";
import Footer from "../layouts/footer";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../Lib/axios";
import ProductCard from "../Components/productCard";

const Tops = () => {
  const { data, error, isError, isLoading } = useQuery(["Tops"], () =>
    fetchProducts("http://localhost:8000/api/tops")
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.log("Error", error);
    return <div>Failed to fetch</div>;
  }

  return (
    <>
      <Nav />
      {data && (
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
          {data.products.map((product: any) => (
            <ProductCard
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

export default Tops;
