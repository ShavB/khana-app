import { Search } from "lucide-react";
import SearchBarModel from "./SearchBarModel";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const [showSearchModal, setShowSearchModal] = useState(false);

  let searchBarModalRef = useRef();

  function handleSearchModalToggle() {
    setShowSearchModal(true);
  }

  function checkIfClickedOutside(e) {
    if (
      showSearchModal &&
      searchBarModalRef.current &&
      !searchBarModalRef.current.contains(e.target.value)
    ) {
      setShowSearchModal(false);
    }
  }

  useEffect(() => {
    return document.addEventListener("mousedown", checkIfClickedOutside);
  }, [showSearchModal]);

  return (
    <div
      ref={searchBarModalRef}
      className={`h-14 ${
        showSearchModal ? "bg-[#F9F6EE]" : ""
      } rounded-t-2xl flex items-center relative w-[757px] p-2`}
    >
      <div
        onClick={handleSearchModalToggle}
        className={`z-10 w-full bg-[#f3f3f3] h-9 rounded-2xl flex items-center justify-between p-4`}
      >
        <Search size={17} strokeWidth={3} />
        <input
          className="w-[705px] focus:outline-none pl-3 bg-transparent"
          type="text"
          placeholder="Search Uber eats"
        />
      </div>
      {showSearchModal && (
        <div className="absolute bg-[#F9F6EE] top-12 left-0 rounded-b-2xl h-auto">
          <SearchBarModel />
        </div>
      )}
    </div>
  );
}
