import PrimaryBtn from "../layouts/primary-btn";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-y-5">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#222] w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl playfair italic font-bold">Thank You !</h1>
          <p>Thanks for shopping with us!</p>
          <p>Confirmation will be sent to your email shortly.</p>
          <Link to="/">
            <PrimaryBtn>Back Home</PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
