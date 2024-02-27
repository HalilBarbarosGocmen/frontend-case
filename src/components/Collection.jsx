import React from "react";
import searchIcon from "../assets/search.svg";
import arrowRight from "../assets/arrowright.svg";
import shieldIcon from "../assets/shield-check.svg";
import penIcon from "../assets/rocket.svg";
import monitorIcon from "../assets/screen.svg";
import podcastIcon from "../assets/podcast.svg";
import settingsIcon from "../assets/settings-alt.svg";
import collectionsImg from "../assets/Col.png";

const Collection = () => {
  return (
    <section id="collection" className="p-20 md:px-20 px-0">
      <div className="flex flex-col gap-10 mb-20 md:px-0 px-6">
        <h3 className="text-4xl md:text-6xl lg:text-7xl text-bluegray font-extrabold">
          Grow your collection
        </h3>
        <p className="md:text-lg text-base text-bluegray">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-3 col-span-12">
          <div className="flex lg:flex-col flex-row overflow-x-scroll no-scrollbar lg:py-0 py-3 items-start gap-4">
            <button className="h-14 w-auto px-4 rounded-lg flex items-center justify-start gap-4 border-0 bg-white shadow-md">
              <img src={searchIcon} alt="" />
              <span className="text-bluegray lg:text-xl text-base lg:w-auto w-40 font-medium whitespace-nowrap">
                Bilbendum tellus
              </span>
              <img src={arrowRight} alt="" className="lg:inline-block hidden" />
            </button>
            <button className="h-14 px-4 rounded-lg flex items-center justify-start gap-4 bg-transparent border-0">
              <img src={shieldIcon} alt="" />
              <span className="text-bluegray lg:text-xl text-base lg:w-auto w-40 font-medium whitespace-nowrap">
                Cras eget
              </span>
            </button>
            <button className="h-14 px-4 rounded-lg flex items-center justify-start gap-4 bg-transparent border-0">
              <img src={penIcon} alt="" />
              <span className="text-bluegray lg:text-xl text-base lg:w-auto w-40 font-medium whitespace-nowrap">
                Dolor pharetra
              </span>
            </button>
            <button className="h-14 px-4 rounded-lg flex items-center justify-start gap-4 bg-transparent border-0">
              <img src={monitorIcon} alt="" />
              <span className="text-bluegray lg:text-xl text-base lg:w-auto w-40 font-medium whitespace-nowrap">
                Amet, fringilla
              </span>
            </button>
            <button className="h-14 px-4 rounded-lg flex items-center justify-start gap-4 bg-transparent border-0">
              <img src={podcastIcon} alt="" />
              <span className="text-bluegray lg:text-xl text-base lg:w-auto w-40 font-medium whitespace-nowrap">
                Amet nibh
              </span>
            </button>
            <button className="h-14 px-4 rounded-lg flex items-center justify-start gap-4 bg-transparent border-0">
              <img src={settingsIcon} alt="" />
              <span className="text-bluegray lg:text-xl text-base lg:w-auto w-40 font-medium whitespace-nowrap">
                Sed velit
              </span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-9 col-span-12">
          <img src={collectionsImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Collection;
