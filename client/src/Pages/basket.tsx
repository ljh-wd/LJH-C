import PrimaryBtn from "../layouts/primary-btn";
import { Link, useNavigate } from "react-router-dom";
import { useBasket } from "../Context/basketContext";
import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../Lib/axios";
import BasketCard from "../layouts/basketCard";
import { currencyFormatter } from "../utils/currencyFormatter";
import ErrorPage from "../layouts/error";
import Loading from "../layouts/loading";

const Basket = () => {
  const { items } = useBasket();

  function wait(duration: number) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["Products"],
    queryFn: () =>
      wait(1500).then(() =>
        fetchProducts("http://localhost:8000/api/products")
      ),
  });

  let shipping = 6.99;
  let subtotal = currencyFormatter.format(
    items.reduce((total: number, item: any) => {
      const product = data?.products.find((i: any) => i._id === item.id);
      return total + product?.amount * item.qty;
    }, 0)
  );

  const navigate = useNavigate();

  return (
    <>
      {isError && <ErrorPage />}
      <div className="w-full h-full bg-black  bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden">
        <div className="w-full right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700">
          <div className="flex items-end lg:flex-row flex-col justify-end">
            <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white text-black overflow-y-scroll overflow-x-hidden lg:h-screen h-auto">
              <div className="flex justify-between px-5 items-center w-full text-black">
                <button
                  onClick={() => navigate(-1)}
                  className="playfair tracking-wider bg-[#222] text-[#eee] uppercase px-7 py-3 rounded-sm transition hover:bg-transparent hover:text-[#222] hover:border hover:border-[#222] "
                >
                  Back
                </button>
                <p className="lg:text-4xl text-3xl  leading-10 pt-3 playfair  text-black">
                  Basket
                </p>
              </div>
              {isLoading && <Loading />}
              <div className="flex flex-col gap-3">
                {items.map((item: any) => (
                  <BasketCard qty={item.qty} key={item.id} id={item.id} />
                ))}
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
                    {!isLoading && (
                      <p className="text-base leading-none text-gray-800 ">
                        {subtotal}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 ">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800 ">
                      {currencyFormatter.format(shipping)}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800 ">
                      Total
                    </p>
                    {!isLoading && (
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800 ">
                        {currencyFormatter.format(
                          items.reduce((total: number, item: any) => {
                            const product = data?.products.find(
                              (i: any) => i._id === item.id
                            );
                            return (
                              total + product?.amount * item.qty + shipping
                            );
                          }, 0)
                        )}
                      </p>
                    )}
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
