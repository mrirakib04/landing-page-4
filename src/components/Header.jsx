import { useState } from "react";
import bannerImg from "./../assets/img/banner.png";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const navShowHide = () => setNavShow((prev) => !prev);

  return (
    <header className="px-2">
      <nav className="container flex items-center justify-between mx-auto navbar lg:pt-5 pt-2">
        <div>
          <button className="flex items-center gap-2">
            <i className="fa-solid fa-arrow-right bg-lime100 text-black p-2 bg-lime-400 rounded-full flex justify-center items-center -rotate-45"></i>
            <h1 className="text-3xl font-extrabold text-black">Rinterio</h1>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-5 text-gray_p2 font-semibold">
            <li>
              <a
                className="hover:text-lime-600 transition"
                href="./../../index.html"
              >
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-lime-600 transition" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-lime-600 transition" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="hover:text-lime-600 transition" href="#">
                Blogs
              </a>
            </li>
            <li>
              <a className="hover:text-lime-600 transition" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              <button>
                <i className="fa-solid fa-magnifying-glass cursor-pointer bg-white text-gray-600 p-2 rounded-full border flex justify-center items-center"></i>
              </button>
              <button>
                <i className="fa-solid fa-cart-shopping cursor-pointer bg-white text-gray-600 p-2 rounded-full border flex justify-center items-center"></i>
              </button>
              <button className="flex items-center gap-2 bg-lime-400 transition hover:bg-lime-500 px-4 py-2 rounded-3xl cursor-pointer">
                <p className="text-xl font-extrabold text-black">
                  Book Consult
                </p>
                <i className="fa-solid fa-arrow-right bg-black text-white p-1 rounded-full flex justify-center items-center -rotate-45"></i>
              </button>
            </div>
          </div>
          <button className="lg:hidden block" onClick={navShowHide}>
            <i className="fa-solid fa-bars text-2xl hover:text-gray-700 transition cursor-pointer"></i>
          </button>
          {navShow && (
            <div className="absolute lg:hidden border-2 text-base rounded-lg top-14 right-2 font-bold bg-gray-100 text-gray-700 p-4">
              <ul className="flex flex-col gap-2 text-nowrap">
                <a
                  className="border-cyan-400 text-cyan-600 border-2 py-2 px-4 rounded-lg"
                  href="./../../index.html"
                >
                  Home
                </a>
                <a
                  className="border-cyan-400 text-cyan-600 border-2 py-2 px-4 rounded-lg"
                  href="#"
                >
                  Services
                </a>
                <a
                  className="border-cyan-400 text-cyan-600 border-2 py-2 px-4 rounded-lg"
                  href="#"
                >
                  Portfolio
                </a>
                <a
                  className="border-cyan-400 text-cyan-600 border-2 py-2 px-4 rounded-lg"
                  href="#"
                >
                  Blogs
                </a>
                <a
                  className="border-cyan-400 text-cyan-600 border-2 py-2 px-4 rounded-lg"
                  href="#"
                >
                  Contact Us
                </a>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="container mx-auto space-y-6 mt-5 lg:mt-10">
        <div>
          <img
            className="w-3/4 md:w-3/5 lg:w-1/2 mx-auto"
            src={bannerImg}
            alt="Banner Image"
          />
        </div>

        <div className="space-y-3 lg:space-y-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-black px-2 md:w-4/5 mx-auto text-center lg:leading-[80px]">
            A barn house of this design has a striking appearance
          </h1>
          <p className="text-sm md:text-base font-medium text-gray_p1 px-2 md:w-3/4 mx-auto text-center">
            The barn house captivates with its blend of rustic charm and modern
            sophistication, featuring weathered wood, sleek metal accents, and
            large windows that flood the space with natural light.
          </p>
          <div className="px-2">
            <button className="flex items-center justify-center gap-2 bg-lime-200 px-5 py-3 rounded-[32px] border-2 border-lime-600 mx-auto w-full md:w-fit transition hover:bg-lime-300 cursor-pointer">
              <p className="text-xl font-bold text-black">View Details</p>
              <i className="fa-solid fa-arrow-right text-xl bg-lime50 text-black rounded-full flex justify-center items-center -rotate-45"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
