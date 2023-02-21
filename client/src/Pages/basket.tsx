import PrimaryBtn from "../layouts/primary-btn";
import { Link } from "react-router-dom";

const Basket = () => {
  return (
    <>
      <div className="w-full h-full bg-black  bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0">
        <div
          className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div className="flex items-end lg:flex-row flex-col justify-end">
            <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white text-black overflow-y-scroll overflow-x-hidden lg:h-screen h-auto">
              <div className="flex justify-between px-5 items-center w-full text-black">
                <Link to="/">
                  <PrimaryBtn>Back</PrimaryBtn>
                </Link>
                <p className="lg:text-4xl text-3xl  leading-10 pt-3 playfair  text-black">
                  Basket
                </p>
              </div>
            </div>
            <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 :bg-gray-900 h-full">
              <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 ">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800 ">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800 ">
                      $9,000
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 ">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800 ">$30</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 ">Tax</p>
                    <p className="text-base leading-none text-gray-800 ">$35</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800 ">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800 ">
                      $10,240
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-5">
                    <PrimaryBtn>Checkout</PrimaryBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
