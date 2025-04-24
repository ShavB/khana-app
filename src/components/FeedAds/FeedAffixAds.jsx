import { feedAds } from "../../../utils/HomeFeedAds";

export default function FeedAddixAds() {
  return (
    <div className="h-[188px] w-full flex justify-between mt-10 ml-10">
      <div className="flex justify-center flex-col">
        <h1 className="text-5xl font-bold">Crave it? Get it.</h1>
        <p>Search for a favourite restaurant, cuisine or dish.</p>
      </div>

      {feedAds.map((ads) => (
        <div key={ads.uuid} className="flex flex-1 justify-center p-2">
          <div className="bg-[#fbf2de] relative flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl p-4 w-[250px]">
            <h1 className="font-bold">{ads.title}</h1>
            <button className="outline:none absolute bottom-3 pl-2 pr-2 text-sm bg-white rounded-2xl cursor-pointer">
              Join Now
            </button>
          </div>
          <img
            className="rounded-tr-2xl rounded-br-2xl"
            src={ads.trailingImage?.url}
            alt={ads.title}
            height={164}
            width={135}
          />
        </div>
      ))}
    </div>
  );
}
