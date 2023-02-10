import Nav from "../layouts/nav";
import Footer from "../layouts/footer";
import PrimaryBtn from "../layouts/primary-btn";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Nav />
      <div className="h-full grid grid-rows-1 grid-cols-6">
        <div className="col-span-6 md:col-span-2 flex justify-center items-center pb-40 flex-col gap-10">
          <h1 className="playfair text-3xl">Your style is what you choose.</h1>
          <PrimaryBtn>Shop Now</PrimaryBtn>
        </div>
        <div className="landing-page bg-clip-path w-full bg-cover bg-right bg-no-repeat h-full col-span-4"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
