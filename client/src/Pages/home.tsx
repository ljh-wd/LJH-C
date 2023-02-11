import Nav from "../layouts/nav";
import Footer from "../layouts/footer";
import PrimaryBtn from "../layouts/primary-btn";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Nav />
      <div className="h-full grid grid-rows-1 grid-cols-6">
        <div className="col-span-4 lg:col-span-2 flex justify-center items-start pl-10 pb-40 flex-col gap-10">
          <div className="flex flex-col gap-5 after:w-full after:bg-black after:h-[1px] font-[600]">
            <h1 className="playfair uppercase text-4xl tracking-wider">
              Your style.
            </h1>
            <h2 className="playfair text-4xl uppercase tracking-wider">
              is what you choose.
            </h2>
          </div>
          <p className="-mt-[20px] text-md md:text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minus
            cupiditate dicta! Corrupti, omnis quidem.
          </p>
          <a href="/shop">
            <PrimaryBtn>Shop Now</PrimaryBtn>
          </a>
        </div>
        <div className="landing-page lg:bg-clip-path w-full bg-cover bg-right bg-no-repeat h-full col-span-3 lg:col-span-4"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
