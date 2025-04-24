/**
 *
 * ----icons------
 * offer
 * dropdown - 5
 * medal
 * star
 *
 */

import { useState } from "react";
import { sortAndFilters } from "../../../utils/sortAndFilter";
import SortFilterCommonModel from "./SortFilterCommonModel";

export default function SortAndFilter() {
  const [sortModalIsVisible, setSortModalIsVisible] = useState(null);

  function openCurrentFilterModal(id, optionsLength) {
    if (optionsLength > 1) {
      setSortModalIsVisible(id === sortModalIsVisible ? null : id);
    }
  }

  return (
    <div className="text-sm ml-10 flex items-center h-[36px] gap-3  mt-2">
      {sortAndFilters.map((item) => (
        <div
          onClick={() => openCurrentFilterModal(item.uuid, item.options.length)}
          className="p-2 cursor-pointer bg-[#f3f3f3] hover:bg-[#f3f3f3d0] rounded-2xl"
          key={item.uuid}
        >
          <p>{item.label}</p>
          {sortModalIsVisible === item.uuid && (
            <SortFilterCommonModel options={item} />
          )}
        </div>
      ))}
    </div>
  );
}
