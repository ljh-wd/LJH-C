import PrimaryBtn from "../layouts/primary-btn";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24  flex items-center justify-center flex-col  gap-12">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div>
          <div>
            <div>
              <div className="mb-5">
                <h1 className="my-2 text-gray-800 playfair text-2xl">
                  Looks like you've found the doorway to the great nothing...
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
              </div>
              <Link to="/">
                <PrimaryBtn>Go back home</PrimaryBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
