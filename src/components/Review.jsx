import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import sliderLogo_1 from "../assets/slider-logo-1.svg";
import sliderLogo_2 from "../assets/slider-logo-2.svg";
import sliderLogo_3 from "../assets/slider-logo-3.svg";
import sliderLogo_4 from "../assets/slider-logo-4.svg";
import sliderUser_1 from "../assets/slider-user-1.png";
import sliderUser_2 from "../assets/slider-user-2.png";
import sliderUser_3 from "../assets/slider-user-3.png";
import sliderUser_4 from "../assets/slider-user-4.png";

const Review = () => {
  const sliderOptions = {
    navigation: {
      nextEl: ".swiper-right",
      prevEl: ".swiper-left",
    },
    slidesPerView: 1,
    spaceBetween: 36,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <section>
      <div className="m-auto relative">
        <div className="bg-amber-200 w-[100%] h-96 absolute sm:top-[15%] top-[12%] left-0 -z-10"></div>
        <header className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h1 className="text-3xl md:text-6xl font-extrabold text-center md:text-start text-bluegray">
            Because they love us
          </h1>

          <div className="sm:flex hidden items-center justify-center gap-3">
            <button className="swiper-left rounded-full border border-[#78350F] p-3">
              <img src={arrowLeft} alt="Left Arrow" />
            </button>
            <button className="swiper-right rounded-full border border-[#78350F] p-3">
              <img src={arrowRight} alt="Right Arrow" />
            </button>
          </div>
        </header>

        <div className="flex relative">
          <Swiper
            modules={[Navigation]}
            {...sliderOptions}
            className="w-full mt-2 py-14"
          >
            <SwiperSlide className="bg-white cursor-pointer p-8 flex flex-col gap-5 items-start shadow-lg rounded-2xl">
              <div className="flex flex-row gap-4 mt-4">
                <img src={sliderLogo_1} alt="Logo" />
              </div>
              <p className="leading-relaxed text-2xl pr-20">
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
              </p>
              <div className="flex flex-row">
                <img src={sliderUser_1} alt="user" />
                <div className="flex flex-col ml-4 justify-center">
                  <span className="text-lg">Hellen Jummy</span>
                  <span className="text-base text-bluegray_600">Team Lead</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white cursor-pointer p-8 flex flex-col gap-5 items-start shadow-lg rounded-2xl">
              <div className="flex flex-row gap-4 mt-4">
                <img src={sliderLogo_2} alt="Logo" />
              </div>
              <p className="leading-relaxed text-2xl pr-20">
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
              </p>
              <div className="flex flex-row">
                <img src={sliderUser_2} alt="user" />
                <div className="flex flex-col ml-4 justify-center">
                  <span className="text-lg">Hellen Jummy</span>
                  <span className="text-base text-bluegray_600">Team Lead</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white cursor-pointer p-8 flex flex-col gap-5 items-start shadow-lg rounded-2xl">
              <div className="flex flex-row gap-4 mt-4">
                <img src={sliderLogo_3} alt="Logo" />
              </div>
              <p className="leading-relaxed text-2xl pr-20">
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
              </p>
              <div className="flex flex-row">
                <img src={sliderUser_3} alt="user" />
                <div className="flex flex-col ml-4 justify-center">
                  <span className="text-lg">Hellen Jummy</span>
                  <span className="text-base text-bluegray_600">Team Lead</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white cursor-pointer p-8 flex flex-col gap-5 items-start shadow-lg rounded-2xl">
              <div className="flex flex-row gap-4 mt-4">
                <img src={sliderLogo_4} alt="Logo" />
              </div>
              <p className="leading-relaxed text-2xl pr-20">
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
              </p>
              <div className="flex flex-row">
                <img src={sliderUser_4} alt="user" />
                <div className="flex flex-col ml-4 justify-center">
                  <span className="text-lg">Hellen Jummy</span>
                  <span className="text-base text-bluegray_600">Team Lead</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white cursor-pointer p-8 flex flex-col gap-5 items-start shadow-lg rounded-2xl">
              <div className="flex flex-row gap-4 mt-4">
                <img src={sliderLogo_1} alt="Logo" />
              </div>
              <p className="leading-relaxed text-2xl pr-20">
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
              </p>
              <div className="flex flex-row">
                <img src={sliderUser_1} alt="user" />
                <div className="flex flex-col ml-4 justify-center">
                  <span className="text-lg">Hellen Jummy</span>
                  <span className="text-base text-bluegray_600">Team Lead</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white cursor-pointer p-8 flex flex-col gap-5 items-start shadow-lg rounded-2xl">
              <div className="flex flex-row gap-4 mt-4">
                <img src={sliderLogo_2} alt="Logo" />
              </div>
              <p className="leading-relaxed text-2xl pr-20">
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
              </p>
              <div className="flex flex-row">
                <img src={sliderUser_2} alt="user" />
                <div className="flex flex-col ml-4 justify-center">
                  <span className="text-lg">Hellen Jummy</span>
                  <span className="text-base text-bluegray_600">Team Lead</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white cursor-pointer p-8 flex flex-col gap-5 items-start shadow-lg rounded-2xl">
              <div className="flex flex-row gap-4 mt-4">
                <img src={sliderLogo_3} alt="Logo" />
              </div>
              <p className="leading-relaxed text-2xl pr-20">
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
              </p>
              <div className="flex flex-row">
                <img src={sliderUser_3} alt="user" />
                <div className="flex flex-col ml-4 justify-center">
                  <span className="text-lg">Hellen Jummy</span>
                  <span className="text-base text-bluegray_600">Team Lead</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white cursor-pointer p-8 flex flex-col gap-5 items-start shadow-lg rounded-2xl">
              <div className="flex flex-row gap-4 mt-4">
                <img src={sliderLogo_4} alt="Logo" />
              </div>
              <p className="leading-relaxed text-2xl pr-20">
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
              </p>
              <div className="flex flex-row">
                <img src={sliderUser_4} alt="user" />
                <div className="flex flex-col ml-4 justify-center">
                  <span className="text-lg">Hellen Jummy</span>
                  <span className="text-base text-bluegray_600">Team Lead</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Review;
