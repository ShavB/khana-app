import CarosualBanner from "../CarousalComp/CarosualBanner";
import { cuisineOptions } from "../../../utils/CuisinsOptions";
import FeedAddixAds from "../FeedAds/FeedAffixAds";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import HomeStores from "../HomeStores/HomeStores";

export default function Homefeed() {
  return (
    <div className="pt-10 w-full h-screen p-[40px] flex justify-center">
      <div className="h-auto w-full max-w-[1280px]">
        <CarosualBanner bannerOptions={cuisineOptions} />
        <SortAndFilter />
        <FeedAddixAds />
        <HomeStores />
      </div>
    </div>
  );
}
