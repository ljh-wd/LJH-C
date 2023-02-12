import ProductCard from "../Components/productCard";
import Nav from "../layouts/nav";
import Footer from "../layouts/footer";

const Gymwear = () => {
  // TODO const {loading, data, error} = useFetch(url)

  let data = [
    {
      title: "Plain white top",
      imgUrl:
        "https://media.istockphoto.com/id/1048695348/photo/cheerful-young-man-pointing-at-himself.jpg?s=612x612&w=0&k=20&c=36UH2zZDheSZM4FykeDBVYCpi9MtibK6HYptC2B0aNs=",
      id: crypto.randomUUID(),
      alt: "White top",
      amount: 7.99,
    },
    {
      title: "Plain white top",
      imgUrl:
        "https://media.istockphoto.com/id/1048695348/photo/cheerful-young-man-pointing-at-himself.jpg?s=612x612&w=0&k=20&c=36UH2zZDheSZM4FykeDBVYCpi9MtibK6HYptC2B0aNs=",
      id: crypto.randomUUID(),
      alt: "White top",
      amount: 7.99,
    },
    {
      title: "Plain white top",
      imgUrl:
        "https://media.istockphoto.com/id/1048695348/photo/cheerful-young-man-pointing-at-himself.jpg?s=612x612&w=0&k=20&c=36UH2zZDheSZM4FykeDBVYCpi9MtibK6HYptC2B0aNs=",
      id: crypto.randomUUID(),
      alt: "White top",
      amount: 7.99,
    },
    {
      title: "Plain white top",
      imgUrl:
        "https://media.istockphoto.com/id/1048695348/photo/cheerful-young-man-pointing-at-himself.jpg?s=612x612&w=0&k=20&c=36UH2zZDheSZM4FykeDBVYCpi9MtibK6HYptC2B0aNs=",
      id: crypto.randomUUID(),
      alt: "White top",
      amount: 7.99,
    },
  ];
  return (
    <>
      <Nav />
      {/* {loading && <div></div>}
      {error && <div></div>}
      {data &&  <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
        {data.map((product) => (
          <ProductCard
            imgUrl={product.imgUrl}
            title={product.title}
            alt={product.alt}
            amount={product.amount}
          />
        ))}
      </div>} */}
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
        {data.map((product) => (
          <ProductCard
            imgUrl={product.imgUrl}
            title={product.title}
            alt={product.alt}
            amount={product.amount}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Gymwear;
