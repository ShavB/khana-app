import { X } from "lucide-react";
import DeliveryFee from "./DeliveryFee";
import Rating from "./Rating";

export default function SortFilterCommonModel({ options }) {
  let compType = {
    bookingFeeFilter: <DeliveryFee compData={options} />,
    ratingFilter: <Rating />,
  };

  return (
    <div className="bg-amber-200 absolute ml-[-4] z-50 border-transparent shadow-2xl w-[375px] rounded-2xl">
      <div className="m-2">
        <header className="flex justify-between h-[32px] m-4">
          <h1 className="text-2xl">{options.label}</h1>
          <span className="cursor-pointer">
            <X size={20} strokeWidth={3} />
          </span>
        </header>
        {compType[options.type]}
        <footer className="h-[42px] flex justify-end m-4 gap-2">
          <button className="rounded-2xl p-2 hover:bg-[#f3f3f3] cursor-pointer">
            Reset
          </button>
          <button className="rounded-2xl p-3 flex items-center cursor-pointer justify-center bg-black text-white ">
            Apply
          </button>
        </footer>
      </div>
    </div>
  );
}
