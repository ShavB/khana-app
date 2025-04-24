import { ChevronDown, MapPin, Menu, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchComp/SearchBar";

export default function Header() {
  /**
   * ----- navbar -----
   * - hamburger Menu (icon) ✅
   * - logo (icon)✅
   * - Delivery/pick up (swap buttons)✅
   * - location (lication icon and address and drop down menu)✅
   * - search bar - (search icon)✅
   * - cart (icon) ✅
   */
  return (
    <div className="flex items-center text-sm justify-between w-full fixed h-16 max-w-1920 pl-10 pr-10 z-40">
      <Menu strokeWidth={3} />
      <img
        className="h-4"
        src="https://www.ubereats.com/_static/97c43f8974e6c876.svg"
        alt="khana-logo"
      />
      <div className=" w-43 h-9 bg-[#f3f3f3] flex items-center justify-center rounded-2xl cursor-pointer">
        <span className="rounded-2xl bg-white  w-20 h-7 flex items-center justify-center">
          Delivery
        </span>
        <span className="rounded-2xl w-20 h-7 flex items-center justify-center">
          Pickup
        </span>
      </div>
      <div className="flex items-center justify-center text-sm h-9 w-41 space-x-2 cursor-pointer ">
        <MapPin />
        <p className="">19 Alden</p>
        <p>now</p>
        <ChevronDown />
      </div>
      <SearchBar />
      <ShoppingCart />
    </div>
  );
}
