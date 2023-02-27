import Nav from "../layouts/nav";
import Footer from "../layouts/footer";
import PrimaryBtn from "../layouts/primary-btn";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Nav />
      <div className="h-full grid grid-rows-1 grid-cols-1 landing-page bg-cover bg-center">
        <div className=" flex justify-center items-start pl-10 pt-10 md:pl-32 pb-40 flex-col gap-10 w-3/4 lg:w-2/4">
          <div className="flex flex-col gap-5 after:w-full after:bg-white after:h-[1px] font-[600]">
            <h1 className="playfair font-thin uppercase text-2xl md:text-4xl tracking-wider  text-white">
              Your style
            </h1>
            <h2 className="playfair font-thin text-2xl md:text-4xl uppercase tracking-wider text-white">
              is what you choose.
            </h2>
          </div>
          <p className="-mt-[20px] text-md md:text-lg font-thin text-white lg:w-3/4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sit
            vero asperiores perspiciatis iste ducimus commodi quam doloremque
            non voluptates.
          </p>
          <Link to="/shop">
            <button className="playfair tracking-wider bg-[#eee] text-[#222] uppercase px-7 py-3 rounded-sm transition  hover:bg-[#111] hover:border hover:text-[#fff] hover:border-[#222] ">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
