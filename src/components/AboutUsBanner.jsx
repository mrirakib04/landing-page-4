import Vector from "./../assets/img/Vector.png";
import Rectangle from "./../assets/img/Rectangle.png";
import commercial from "./../assets/img/commercial.png";
import residential from "./../assets/img/residential.png";

const AboutUsBanner = () => {
  return (
    <div className="bg-gray-100 md:mt-20 mt-10">
      <div className="container mx-auto py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1">
        <div className="px-5 space-y-3 md:space-y-4 lg:space-y-5">
          <div className="text-center lg:text-left relative">
            <div className="absolute -translate-x-1/4 -translate-y-full -top-2 hidden lg:block">
              <img src={Vector} alt="Vector" />
            </div>
            <button className="px-4 py-2 rounded-3xl font-bold text-gray-900 bg-white">
              <i className="fa-solid fa-arrow-right-long mr-1"></i> About Us
            </button>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl lg:w-11/12 xl:w-3/4 lg:leading-[48px] font-extrabold text-black text-center lg:text-left md:mb-2">
              We design thoughtful, liveable spaces
            </h1>
          </div>
          <p className="text-sm md:text-base md:w-11/12 lg:w-full md:mx-auto lg:mx-0 font-medium text-gray-700 text-center lg:text-left">
            Thoughtful interior design prioritizes user needs and comfort,
            integrating functionality with aesthetics to create spaces that are
            both practical and visually pleasing, enhancing the overall living
            experience.
          </p>

          <div className="flex flex-col md:flex-row lg:flex-col gap-5">
            <div className="p-6 rounded-2xl bg-white flex lg:items-center gap-5">
              <div>
                <img
                  className="w-24 lg:w-fit"
                  src={commercial}
                  alt="commercial"
                />
              </div>
              <div>
                <h3 className="md:text-lg font-extrabold text-gray-800 mb-3">
                  Commercial
                </h3>
                <p className="font-medium to-gray-500 text-sm lg:text-base">
                  Commercial interior design blends brand identity with
                  functional, attractive workspaces.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white flex lg:items-center gap-5">
              <div>
                <img
                  className="w-24 lg:w-fit"
                  src={residential}
                  alt="residential"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-800 mb-3">
                  Residential
                </h3>
                <p className="font-medium to-gray-500 text-sm lg:text-base">
                  Residential interior design creates personalized, comfortable
                  spaces that enhance daily living.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <img
            className="w-full h-52 md:h-96 lg:min-h-full rounded-2xl object-cover"
            src={Rectangle}
            alt="Rectangle"
          />
        </div>
      </div>
      <div className="container mx-auto pb-16 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-white py-10 px-2 rounded-2xl mx-20 lg:mx-5">
          <div className="text-center">
            <i className="fa-solid fa-message text-2xl text-gray_p2 mb-2"></i>
            <p className="text-4xl font-extrabold text-gray-700">235+</p>
            <span className="font-medium text-gray-500">
              Happy Clients Review
            </span>
          </div>

          <div className="text-center">
            <i className="fa-solid fa-building text-2xl text-gray_p2 mb-2"></i>
            <p className="text-4xl font-extrabold text-gray-700">50+</p>
            <span className="font-medium text-gray-500">Work Departments</span>
          </div>

          <div className="text-center">
            <i className="fa-solid fa-users text-2xl text-gray_p2 mb-2"></i>
            <p className="text-4xl font-extrabold text-gray-700">34k+</p>
            <span className="font-medium text-gray-500">Our Happy Clients</span>
          </div>

          <div className="text-center">
            <i className="fa-solid fa-user-group text-2xl text-gray_p2 mb-2"></i>
            <p className="text-4xl font-extrabold text-gray-700">307+</p>
            <span className="font-medium text-gray-500">Staff Members</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
