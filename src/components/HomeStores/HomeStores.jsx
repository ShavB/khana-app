import { useState } from "react";
import { HomefeedData } from "../../../utils/HomeFeedData";
import HomeSection from "./HomeSection";

export default function HomeStores() {
  const [homeData, setHomeData] = useState(HomefeedData);
  return (
    <div className="ml-10">
      {homeData.map((section) =>
        section.type === "REGULAR_CAROUSEL" ? (
          <div key={section.uuid}>
            <HomeSection section={section.carousel} />
          </div>
        ) : null
      )}
    </div>
  );
}
