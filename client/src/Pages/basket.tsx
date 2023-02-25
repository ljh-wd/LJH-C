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

  function handleSubmit() {
    localStorage.clear();
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["all-products-for-basket"],
    queryFn: () => fetchProducts("https://LJH-C-API.onrender.com/api/products"),
  });

  let shipping = 6.99;
  let subtotal = currencyFormatter.format(
    items.reduce((total: number, item: any) => {
      const product = data?.products?.find((i: any) => i._id === item.id);
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
                  <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800 ">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800 ">
                      {subtotal}
                    </p>
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
                <p className="my-5 lg:text-4xl text-3xl font-black leading-9 text-gray-800">
                  Payment
                </p>
                <div>
                  <div className="p10-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="card-nr"
                      >
                        Card Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        name="card-number"
                        id="card-nr"
                        className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="text"
                        placeholder="1234 1234 1234 1234"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="card-expiry"
                        >
                          Expiry Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          name="exp-date"
                          id="card-expiry"
                          className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                          type="text"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="card-cvc"
                        >
                          CVC <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="card-CVC"
                          required
                          id="card-cvc"
                          className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                          type="text"
                          placeholder="CVC"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="card-name"
                      >
                        Name on Card <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="card-nameholder"
                        required
                        id="card-name"
                        className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="text"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="card-email"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="card-email"
                        required
                        id="card-email"
                        className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                        type="email"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800 ">
                      Total
                    </p>
                    {
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
                    }
                  </div>
                  <div className="flex items-center justify-center py-5">
                    <Link onClick={handleSubmit} to="/checkout">
                      <button className="playfair tracking-wider bg-[#222] text-[#eee] uppercase px-7 py-3 rounded-sm transition hover:bg-transparent hover:text-[#222] hover:border hover:border-[#222] ">
                        Checkout
                      </button>
                    </Link>
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
