import Nav from "../layouts/nav";
import Footer from "../layouts/footer";
import CategoryCard from "../Components/category-card";

const Categories = () => {
  let categories: {
    title: string;
    imgUrl: string;
    href: string;
    id: string;
  }[] = [
    {
      title: "Products",
      imgUrl:
        "https://media.istockphoto.com/id/1048695348/photo/cheerful-young-man-pointing-at-himself.jpg?s=612x612&w=0&k=20&c=36UH2zZDheSZM4FykeDBVYCpi9MtibK6HYptC2B0aNs=",
      href: "/shop/tops",
      id: crypto.randomUUID(),
    },
  ];

  return (
    <>
      <Nav />
      <div className="w-full h-screen flex flex-col">
        <div className="h-full flex flex-col justify-center items-center w-full overflow-hidden">
          <div className="p-20 bg-slate-100 w-full flex justify-center items-center">
            <h1 className="text-2xl playfair uppercase bg-black px-7 py-1 rounded shadow-md text-[#eee]">
              Products
            </h1>
          </div>
          <div className="w-full h-full flex justify-center items-center bg-slate-100 rounded shadow">
            {categories.map((category) => (
              <CategoryCard
                imgUrl={category.imgUrl}
                title={category.title}
                key={category.id}
                href={category.href}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Categories;
