import Cards from "./Cards";
import { useState } from "react";

export default function HomeSection({ section }) {
  //   console.log("section: ", section.stores);
  console.log("section: ", section.header.subtitle);
  return (
    <section className="w-full flex justify-between mt-4 h-[274px] flex-col overflow-scroll">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold">{section.header.title.text}</h1>
          <p>{section.header.subtitle?.text}</p>
        </div>
        <p>{section.header.callToAction.text}</p>
      </div>
      <div className="flex gap-4">
        {section.stores.map((store, index) => (
          <Cards key={index} store={store} />
        ))}
      </div>
      <hr />
    </section>
  );
}
