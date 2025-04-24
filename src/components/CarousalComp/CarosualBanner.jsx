export default function CarosualBanner({ bannerOptions }) {
  return (
    <>
      <div className="flex ml-3 mt-0 overflow-auto scrollbar-hidden text-xs no-sc justify-between gap-4 p-4 scroll-smooth items-center backdrop-blur-2xl">
        {bannerOptions.map((item) => (
          <li
            className="flex flex-col items-center justify-center list-none w-[400px]"
            key={item.uuid}
          >
            <img
              className="max-w-none"
              src={item.image.illustration.urlImage.dayImageUrl}
              alt=""
              height={64}
              width={64}
            />
            <p className="mt-2">
              {item.value.length >= 9
                ? item.value.slice(0, 9) + "..."
                : item.value}
            </p>
          </li>
        ))}
      </div>
    </>
  );
}
