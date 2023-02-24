import { ReactNode, useState } from "react";
import { useFilter } from "../Context/filteringcontext";

type DropdownProps = {
  children: ReactNode;
  optionOne: ReactNode;
  optionTwo: ReactNode;
  optionThree: ReactNode;
  optionFour: ReactNode;
};

const Dropdown = ({
  children,
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
}: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const { AtoZ, ZtoA, HighToLow, LowToHigh } = useFilter();

  return (
    <div className="inline-flex bg-white border rounded-md">
      <button
        disabled
        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
      >
        {children}
      </button>

      <div onClick={() => setOpen(!open)} className="relative">
        <button
          type="button"
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`absolute transition-all left-[-180%] top-[70%] z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${
            !open && "opacity-0 h-0 transition-all"
          }`}
        >
          <div className="p-2">
            <button
              type="submit"
              onClick={() => AtoZ("name")}
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              {optionOne}
            </button>
            <button
              onClick={() => ZtoA("-name")}
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              {optionTwo}
            </button>
            <button
              onClick={() => HighToLow("-amount")}
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              {optionThree}
            </button>
            <button
              onClick={() => LowToHigh("amount")}
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              {optionFour}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
