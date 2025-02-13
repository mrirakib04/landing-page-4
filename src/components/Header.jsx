const Header = () => {
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
          <button className="lg:hidden block">
            <i className="fa-solid fa-bars text-2xl hover:text-gray-700 transition cursor-pointer"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
