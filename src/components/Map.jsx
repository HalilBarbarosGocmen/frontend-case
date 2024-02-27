import React from "react";
import ellipses from "../assets/Ellipses.png";
import ellipseFill from "../assets/ellipse-fill.png";
import collectionImg from "../assets/collection-4.png";

const Map = () => {
  return (
    <section className="bg-amber-900 p-20 md:px-20 px-0 overflow-hidden">
      <div
        id="map-container"
        className="md:max-w-[1024px] mx-auto w-full h-[640px] flex items-center justify-center relative"
      >
        <div className="absolute lg:-top-[2%] sm:-top-4 -top-3 lg:left-[2rem] sm:left-[3px] left-[40px]">
          <img className="w-64" src={collectionImg} alt="shoes" />

          <div className="w-60 mx-auto -m-1 bg-[#E2E8F0] p-2 rounded-b-lg">
            <p>Emma Simpson collected one pair of Cool Shoes.</p>
          </div>
          <div className="hidden md:flex absolute -bottom-2 left-1/2 z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
            >
              <path d="M6 6L12 0H0L6 6Z" fill="#E2E8F0" />
            </svg>
          </div>
        </div>
{/* absolute lg:top-1/3 sm:top-1/3 top-[45%] lg:left-1/3 md:left-1/4 sm:left-[35%] left-[20%] z-20  */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[50px] md:text-[96px] text-white font-extrabold">
            11,658,467
          </h1>
          <p className="text-[30px] md:text-[50px] text-white font-bold text-center">
            Shoes Collected
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
