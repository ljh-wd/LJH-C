import PrimaryBtn from "../layouts/primary-btn";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 h-screen  flex items-center justify-center flex-col  gap-12">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div>
          <div>
            <div>
              <div className="mb-5">
                <h1 className="my-2 text-gray-800 playfair text-2xl">
                  Couldn't fetch the requested resource.
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please go back to the shop to find what
                  you're looking for.
                </p>
              </div>
              <Link to="/shop">
                <PrimaryBtn>Go back home</PrimaryBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
