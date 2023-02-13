import Nav from "../../layouts/nav";
import Footer from "../../layouts/footer";
import ProductCard from "../../Components/productCard";
import useCustomQuery from "../../Hooks/customUseQuery";

const Jumpers = () => {
  const { data, error, isLoading } = useCustomQuery(
    "jumpers",
    "http://localhost:8000/api/jumpers"
  );

  return (
    <>
      <Nav />
      {data && (
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
          {error && <div>{error}</div>}
          {isLoading && <div>Loading</div>}
          {data.products.map((product: any) => (
            <ProductCard
              href={"jumpers"}
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

export default Jumpers;
