import industrial from "./../assets/img/industrial-interior.jpg";
import restaurant from "./../assets/img/residential-interior.jpg";
import residential from "./../assets/img/residential-interior.jpg";

const Service = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-5 py-16 lg:py-20">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center mb-2">
            Our Interior Services
          </h1>
          <p className="text-sm md:text-base md:w-3/4 lg:w-2/3 mx-auto font-medium text-gray-800 text-center">
            Explore our interior design services, including custom design plans,
            space optimization, material selection, and complete project
            management for tailored solutions.
          </p>
        </div>

        <div className="w-full lg:w-4/5 xl:w-3/5 mx-auto mt-8">
          <div className="bg-white w-full border-2 rounded-2xl p-5 grid grid-cols-1 gap-8">
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <img
                      className="w-full min-h-full rounded-2xl"
                      src={industrial}
                      alt="industrial-interior"
                    />
                  </div>

                  <div className="grid grid-cols-1 justify-center items-center gap-3">
                    <h2 className="text-2xl font-extrabold text-black">
                      Industrial Design
                    </h2>
                    <p className="font-medium text-justify text-gray-800">
                      Discover our industrial interior design services, which
                      blend raw materials, functional layouts, and modern
                      aesthetics to create unique, efficient commercial spaces
                      that embody both style and practicality for businesses.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        <i className="fa-regular fa-comment-dots mr-1"></i>
                        Unlimited consultation
                      </li>
                      <li>
                        <i className="fa-regular fa-handshake mr-1"></i> Help to
                        find your dream
                      </li>
                      <li>
                        <i className="fa-solid fa-headset mr-1"></i> 24 hours
                        support
                      </li>
                    </ul>
                    <button className="btn btn-neutral text-white">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              <div id="item2" className="carousel-item w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <img
                      className="w-full min-h-full rounded-2xl"
                      src={restaurant}
                      alt="restaurant-interior"
                    />
                  </div>

                  <div className="grid grid-cols-1 justify-center items-center gap-3">
                    <h2 className="text-2xl font-extrabold text-black">
                      Restaurant Design
                    </h2>
                    <p className="font-medium text-justify text-gray-800">
                      Explore our restaurant interior design services, which
                      focus on creating inviting, stylish environments with
                      functional layouts and unique decor to enhance dining
                      experiences and reflect your brand identity.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        <i className="fa-regular fa-comment-dots mr-1"></i>
                        Unlimited consultation
                      </li>
                      <li>
                        <i className="fa-regular fa-handshake mr-1"></i> Help to
                        find your dream
                      </li>
                      <li>
                        <i className="fa-solid fa-headset mr-1"></i> 24 hours
                        support
                      </li>
                    </ul>
                    <button className="btn btn-neutral text-white">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              <div id="item3" className="carousel-item w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <img
                      className="w-full min-h-full rounded-2xl"
                      src={residential}
                      alt="residential-interior"
                    />
                  </div>

                  <div className="grid grid-cols-1 justify-center items-center gap-3">
                    <h2 className="text-2xl font-extrabold text-black">
                      Residential Design
                    </h2>
                    <p className="font-medium text-justify text-gray-800">
                      Reveal our residential interior design services, where we
                      craft personalized, stylish spaces with thoughtful layouts
                      and custom details that reflect your lifestyle and enhance
                      comfort and functionality at home.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        <i className="fa-regular fa-comment-dots mr-1"></i>
                        Unlimited consultation
                      </li>
                      <li>
                        <i className="fa-regular fa-handshake mr-1"></i> Help to
                        find your dream
                      </li>
                      <li>
                        <i className="fa-solid fa-headset mr-1"></i> 24 hours
                        support
                      </li>
                    </ul>
                    <button className="btn btn-neutral text-white">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center gap-2 py-2">
              <a
                href="#item1"
                className="btn btn-xs md:btn-sm text-black font-bold"
              >
                Industrial
              </a>
              <a
                href="#item2"
                className="btn btn-xs md:btn-sm text-black font-bold"
              >
                Restaurant
              </a>
              <a
                href="#item3"
                className="btn btn-xs md:btn-sm text-black font-bold"
              >
                Residential
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
