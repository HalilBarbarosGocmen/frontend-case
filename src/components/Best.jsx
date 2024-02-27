import React from "react";
import cartIcon from "../assets/shopping-cart.svg";
import product_1 from "../assets/product-1.png";
import product_2 from "../assets/product-2.png";
import product_3 from "../assets/product-3.png";
import backlight_1 from "../assets/backlights-1.png";
import backlight_2 from "../assets/backlights-2.png";
import backlight_3 from "../assets/backlights-3.png";
import backlight_4 from "../assets/backlights-4.png";
import backlight_5 from "../assets/backlights-5.png";

const Best = () => {
  return (
    <section className="bg-bluegray p-20 md:px-20 px-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <h1 className="text-3xl md:text-6xl text-white font-extrabold text-center md:text-start">
          The best of the best
        </h1>
        <button className="text-2xl px-10 py-2 text-white border-2 border-white rounded-lg">
          Sign up now
        </button>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-between mt-20 gap-12 z-20 relative">
        <div className="absolute opacity-75 -z-10 top-[18%] left-0 md:top-[28%] md:-left-8">
          <img src={backlight_4} alt="Backlight 1" />
        </div>
        <div className="absolute md:opacity-50 -z-10 top-[45%] -right-3 md:-top-8 md:left-[33%]">
          <img src={backlight_2} alt="Backlight 2" />
        </div>
        <div className="hidden md:flex absolute -z-10 top-[60%] left-[57%]">
          <img src={backlight_5} alt="Backlight 3" />
        </div>
        <div className="hidden md:flex absolute -z-10 top-5 -right-7">
          <img src={backlight_3} alt="Backlight 4" />
        </div>
        <div className="absolute -z-10 bottom-60 right-[68%] md:-bottom-8 md:right-20">
          <img src={backlight_1} alt="Backlight 5" />
        </div>

        <div className="max-w-96 max-[425px]:w-[300px]">
          <div className="bg-bluegray rounded-lg shadow-lg shadow-slate-500/50 z-50">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src={product_1}
                alt="Product 1"
              />
            </a>
            <div className="p-5 flex flex-col gap-3 mx-2">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Title
                </h5>
              </a>
              <p className="mb-3 font-normal text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
              <a
                href="#"
                className="flex flex-row items-center justify-center gap-3 text-normal font-medium text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 border-2 py-3"
              >
                <img src={cartIcon} alt="Cart Icon" />
                <span> Buy Now</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-96 max-[425px]:w-[300px]">
          <div className="bg-bluegray rounded-lg shadow-lg shadow-slate-500/50">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src={product_2}
                alt="Product 2"
              />
            </a>
            <div className="p-5 flex flex-col gap-3 mx-2">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  Title
                </h5>
              </a>
              <p className="mb-3 font-normal text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
              <a
                href="#"
                className="flex flex-row items-center justify-center gap-3 text-normal font-medium text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 border-2 py-3"
              >
                <img src={cartIcon} alt="Cart Icon" />
                <span> Buy Now</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-96 max-[425px]:w-[300px]">
          <div className="bg-bluegray rounded-lg shadow-lg shadow-slate-500/50">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src={product_3}
                alt="Product 3"
              />
            </a>
            <div className="p-5 flex flex-col gap-3 mx-2">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Title
                </h5>
              </a>
              <p className="mb-3 font-normal text-white">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
              <a
                href="#"
                className="flex flex-row items-center justify-center gap-3 text-normal font-medium text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 border-2 py-3"
              >
                <img src={cartIcon} alt="Cart Icon" />
                <span> Buy Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best;
