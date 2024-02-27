import playIcon from "../assets/play-circle.svg";
import sneakersImage from "../assets/sneakers.png";
import headerIcon_1 from "../assets/header-icon-1.svg";
import headerIcon_1_bg from "../assets/header-icon-1-bg.svg";
import headerIcon_2 from "../assets/header-icon-2.svg";
import headerIcon_2_bg from "../assets/header-icon-2-bg.svg";
import headerIcon_3 from "../assets/header-icon-3.svg";
import headerIcon_3_bg from "../assets/header-icon-3-bg.svg";

const Header = () => {
  return (
    <header id="header" className="p-20 sm:px-20 px-4">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-5 items-center lg:items-start justify-center">
          <h1 className="text-bluegray text-5xl md:text-6xl lg:text-7xl font-extrabold text-center lg:text-start">
            Collectible Sneakers
          </h1>
          <p className="p-2 text-bluegray text-lg text-center lg:text-start">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <div className="flex flex-row">
            <button className="border-2 border-amber-900 rounded-lg py-2 px-5 text-amber-900 font-roboto hover:bg-amber-900 hover:text-white">
              Sign up now
            </button>
            <button className="flex flex-row rounded-lg py-2 px-5 text-amber-900 font-roboto">
              <img src={playIcon} alt="Play Icon" className="w-6 h-6" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <img className="mx-auto" src={sneakersImage} alt="Sneakers" />
        </div>
      </div>

      <div className="pt-40 flex bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-6 md:gap-16">
          <div className="relative col-span-6 md:col-span-2 flex flex-col items-center justify-center md:items-start md:justify-start gap-3">
            <img src={headerIcon_1} alt="Icon" />
            <img
              className="absolute top-0 md:left-7 left-1/2"
              src={headerIcon_1_bg}
              alt="Icon BG"
            />

            <h3 className="text-xl font-semibold">Nibh viverra</h3>
            <p className="text-center md:text-start text-lg font-normal">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="relative col-span-6 md:col-span-2 flex flex-col items-center justify-center md:items-start md:justify-start gap-3">
            <img src={headerIcon_2} alt="Icon" />
            <img
              className="absolute top-0 md:left-7 left-1/2"
              src={headerIcon_2_bg}
              alt="Icon BG"
            />

            <h3 className="text-xl font-semibold">Nibh viverra</h3>
            <p className="text-center md:text-start text-lg font-normal">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="relative col-span-6 md:col-span-2 flex flex-col items-center justify-center md:items-start md:justify-start gap-3">
            <img src={headerIcon_3} alt="Icon" />
            <img
              className="absolute top-0 md:left-7 left-1/2"
              src={headerIcon_3_bg}
              alt="Icon BG"
            />

            <h3 className="text-xl font-semibold">Nibh viverra</h3>
            <p className="text-center md:text-start text-lg font-normal">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
