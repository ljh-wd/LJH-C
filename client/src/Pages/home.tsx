import Nav from "../layouts/nav";
import Footer from "../layouts/footer";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Nav />
      <div className="h-full grid grid-rows-1 grid-cols-6">
        <div className="col-span-6 md:col-span-2">
          <h1>Your style is what you choose.</h1>
        </div>
        <div className="landing-page bg-clip-path w-full bg-cover bg-right bg-no-repeat h-full col-span-4"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
