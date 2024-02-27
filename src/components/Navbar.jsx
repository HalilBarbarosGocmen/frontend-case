import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const handleBurgerClick = () => {
      const menus = document.querySelectorAll(".navbar-menu");
      menus.forEach((menu) => menu.classList.toggle("hidden"));
    };

    const handleMenuClose = () => {
      const menus = document.querySelectorAll(".navbar-menu");
      menus.forEach((menu) => menu.classList.toggle("hidden"));
    };

    const burgerButtons = document.querySelectorAll(".navbar-burger");
    burgerButtons.forEach((button) =>
      button.addEventListener("click", handleBurgerClick)
    );

    const closeButton = document.querySelectorAll(".navbar-close");
    closeButton.forEach((button) =>
      button.addEventListener("click", handleMenuClose)
    );

    const backdropButtons = document.querySelectorAll(".navbar-backdrop");
    backdropButtons.forEach((button) =>
      button.addEventListener("click", handleMenuClose)
    );

    return () => {
      burgerButtons.forEach((button) =>
        button.removeEventListener("click", handleBurgerClick)
      );
      closeButton.forEach((button) =>
        button.removeEventListener("click", handleMenuClose)
      );
      backdropButtons.forEach((button) =>
        button.removeEventListener("click", handleMenuClose)
      );
    };
  }, []);
  return (
    <nav>
      <div className="w-[90%] m-auto">
        <nav className="relative px-4 py-4 flex flex-wrap mx-auto justify-between items-center max-w-screen">
          <a href="/" className="flex items-center">
            <h1 className="self-center text-4xl font-semibold whitespace-nowrap text-amber-900">
              Collers
            </h1>
          </a>
          <div className="md:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3">
              <svg
                className="block h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21 5.5H13"
                  stroke="#78350F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12.5H8"
                  stroke="#78350F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 19.5H3"
                  stroke="#78350F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden py-3 md:flex md:items-center md:justify-between md:w-auto md:space-x-8">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-amber-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
                aria-current="page"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-amber-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-amber-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-amber-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-amber-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
              >
                Log In
              </a>
            </li>
            <button className="border-2 border-amber-900 rounded-lg py-2 px-5 text-amber-900 font-roboto hover:bg-amber-900 hover:text-white">
              Sign up now
            </button>
          </ul>
        </nav>

        <div className="navbar-menu relative z-50 hidden">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-amber-50 border-r overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <a href="/" className="flex items-center">
                <h1 className="self-center text-4xl font-semibold whitespace-nowrap text-amber-900">
                  Collers
                </h1>
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-amber-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
                    aria-current="page"
                  >
                    Products
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-amber-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
                    aria-current="page"
                  >
                    Solutions
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-amber-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
                    aria-current="page"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-amber-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
                    aria-current="page"
                  >
                    Resources
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-amber-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0"
                    aria-current="page"
                  >
                    Log In
                  </a>
                </li>
                <button className="border-2 border-amber-900 rounded-lg py-2 px-5 text-amber-900 font-roboto hover:bg-amber-900 hover:text-white">
                  Sign up now
                </button>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
