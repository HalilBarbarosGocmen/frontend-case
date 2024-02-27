import React from "react";
import appstoreIcon from "../assets/App-store-filled.svg";
import playstoreIcon from "../assets/Google-play.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-8">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 justify-items-center md:justify-items-start gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 border-b border-[#E2E8F0]">
          <div>
            <ul className="text-white font-medium flex flex-col gap-4 items-center md:items-start">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Product
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Browse
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  {" "}
                  Five
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-white font-medium flex flex-col gap-4 items-center md:items-start">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Solutions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brainstorming
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Ideation
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Ideation
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Research
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-white font-medium flex flex-col gap-4 items-center md:items-start">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Developers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Integrations
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Reports
                </a>
              </li>
            </ul>
          </div>
          <div className="relative">
            <ul className="text-white font-medium flex flex-col items-center md:items-start">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Get the App
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  <img src={appstoreIcon} alt="" />
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  <img src={playstoreIcon} alt="" />
                </a>
              </li>

              <li className="mb-4 mt-12">
                <a href="#" className="hover:underline">
                  Follow Us
                </a>
              </li>
              <li className="mb-4">
                <div className="flex mt-4 space-x-5 md:mt-0">
                  <a href="#" className="text-[#E2E8F0]">
                    <i className="text-xl fa-brands fa-youtube"></i>
                  </a>
                  <a href="#" className="text-[#E2E8F0]">
                    <i className="text-xl fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-[#E2E8F0]">
                    <i className="text-xl fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="text-[#E2E8F0]">
                    <i className="text-xl fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="text-[#E2E8F0]">
                    <i className="text-xl fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-10 flex flex-col gap-5 md:gap-0 md:flex-row md:items-center justify-center md:justify-between">
          <span className="text text-white text-center">
            Collers @ 2023. All rights reserved.
          </span>
          <ul className="flex flex-row sm:flex-nowrap flex-wrap gap-10 text-white items-center">
            <li>
              <a href="#"> Terms</a>
            </li>
            <li>
              <a href="#"> Privacy</a>
            </li>
            <li>
              <a href="#"> Contact</a>
            </li>
            <li>
              <a className="flex flex-row gap-2" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.252 10C4.08416 10.6534 3.99949 11.3254 4 12C4 12.69 4.088 13.36 4.252 14H7.1C6.96518 12.6701 6.96518 11.3299 7.1 10H4.252ZM5.07 8H7.416C7.682 6.783 8.066 5.693 8.537 4.786C7.08518 5.48542 5.87722 6.60523 5.07 8ZM19.748 10H16.9C17.0348 11.3299 17.0348 12.6701 16.9 14H19.748C20.0847 12.6879 20.0847 11.3121 19.748 10ZM18.93 8C18.1228 6.60523 16.9148 5.48542 15.463 4.786C15.935 5.693 16.318 6.783 16.584 8H18.93ZM9.112 10C9.03708 10.664 8.99968 11.3318 9 12C9 12.685 9.038 13.355 9.112 14H14.888C15.0386 12.6709 15.0386 11.3291 14.888 10H9.112ZM9.47 8H14.53C14.348 7.2483 14.0855 6.51841 13.747 5.823C13.119 4.568 12.447 4 12 4C11.552 4 10.881 4.568 10.253 5.823C9.938 6.455 9.673 7.19 9.47 8ZM5.07 16C5.87722 17.3948 7.08518 18.5146 8.537 19.214C8.065 18.307 7.682 17.217 7.416 16H5.07ZM18.93 16H16.584C16.318 17.217 15.934 18.307 15.463 19.214C16.9148 18.5146 18.1228 17.3948 18.93 16ZM9.47 16C9.673 16.81 9.938 17.545 10.253 18.177C10.881 19.432 11.553 20 12 20C12.448 20 13.119 19.432 13.747 18.177C14.062 17.545 14.327 16.81 14.53 16H9.47ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"
                    fill="#E2E8F0"
                  />
                </svg>
                <span>EN</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
