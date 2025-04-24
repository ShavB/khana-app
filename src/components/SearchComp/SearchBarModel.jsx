import { useEffect, useState } from "react";
import { searchData } from "../../../utils/SearchData";
import { TimerReset } from "lucide-react";

export default function SearchBarModel({
  searchBarModalRef,
  setShowSearchModal,
}) {
  const [searchTabData] = useState(searchData[0].verticalSuggestionLists);
  const [tabData, setTabData] = useState(
    searchData[0].verticalSearchHomeResults.ALL
  );

  function handleSwitchTabs(componentName) {
    setTabData(searchData[0].verticalSearchHomeResults[componentName]);
  }

  function closeSearchModal(e) {
    if (
      searchBarModalRef.current &&
      !searchBarModalRef.current.contains(e.target)
    ) {
      setShowSearchModal(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", closeSearchModal);
    return () => document.addEventListener("mousedown", closeSearchModal);
  }, []);

  return (
    <div className="w-[757px] ">
      <div className="">
        <ul className="flex gap-3">
          {searchTabData.map((tabs) => (
            <li
              onClick={() => handleSwitchTabs(tabs.verticalType)}
              className="flex justify-center border-b-4 cursor-pointer h-13.5 p-4 w-auto items-center hover:bg-white"
              key={tabs.verticalType}
            >
              {tabs.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="overflow-scroll max-h-[600px]">
        <ul className="">
          {/* <p className="p-2">{tabData.title}</p> */}
          {tabData?.map((items) => (
            <li className="border-t-[1px] p-3" key={items.titleTerm}>
              <div className="flex items-center gap-4 font-medium justify-items-start">
                {items.iconUrl === "" ? (
                  <TimerReset />
                ) : (
                  <img
                    className="h-10 w-9"
                    src={items.iconUrl}
                    alt={items.titleTerm}
                  />
                )}

                <p>{items.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
