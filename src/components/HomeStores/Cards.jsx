import { Heart, Star } from "lucide-react";

export default function Cards({ store }) {
  console.log(store.image.items[0].url);
  return (
    <div className="h-[207px] w-[288px]flex flex-col rounded-2xl">
      <div className="border-2xl">
        <img className="border-2xl" src={store.image.items[0].url} alt="img" />
      </div>
      <div className="p-2">
        <div className="flex justify-between">
          <h1 className="font-bold">{store.title?.text}</h1>
          <Heart />
        </div>
        <p>{`${store.tracking.metaInfo.additionalTrackingData.delivery_fee} Delivery fee`}</p>
        <div className="flex gap-1">
          <p className="flex">
            {store.tracking.storePayload.ratingInfo.storeRatingScore.toFixed(1)}{" "}
            <Star />
          </p>
          <p>({store.tracking.storePayload.ratingInfo.ratingCount})</p>
          <p>11 min</p>
        </div>
      </div>
    </div>
  );
}
