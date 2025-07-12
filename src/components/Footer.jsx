const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-5 py-16 lg:py-20 space-y-6 md:space-y-8 lg:space-y-10 lg:w-3/4">
        <div className="space-y-2 lg:space-y-3 md:w-4/5 lg:w-3/4 md:mx-auto">
          <button className="flex mx-auto items-center gap-2">
            <i className="fa-solid fa-arrow-right bg-lime100 text-black_bg w-7 h-7 rounded-full flex justify-center items-center -rotate-45"></i>
            <h1 className="text-3xl font-extrabold text-white">Rinterio</h1>
          </button>
          <p className="font-medium text-gray-400 text-center">
            Transform your space with our innovative interior design solutions,
            where cutting-edge creativity meets personalized elegance.
            Experience bespoke designs that blend style, comfort, and
            functionality to bring your vision to life.
          </p>
        </div>

        <div>
          <ul className="flex flex-col md:flex-row md:justify-evenly items-center gap-3 text-white font-semibold">
            <li>
              <a className="hover:text-gray-600 duration-300" href="">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-600 duration-300" href="">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-gray-600 duration-300" href="">
                Portfolio
              </a>
            </li>
            <li>
              <a className="hover:text-gray-600 duration-300" href="">
                Blogs
              </a>
            </li>
            <li>
              <a className="hover:text-gray-600 duration-300" href="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button className="w-full md:w-auto md:mx-auto flex justify-center items-center gap-2 bg-lime-300 duration-300 hover:bg-green-500 px-5 py-3 rounded-[32px]">
            <p className="text-xl font-extrabold text-black">Book Consult</p>
            <i className="fa-solid fa-arrow-right bg-black text-white w-7 h-7 rounded-full content-center -rotate-45"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
