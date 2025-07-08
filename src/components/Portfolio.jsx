import image1 from "./../assets/img/img1.png";
import image2 from "./../assets/img/img2.png";
import image3 from "./../assets/img/img3.png";
import image4 from "./../assets/img/img4.png";
import image5 from "./../assets/img/img5.png";

const Portfolio = () => {
  return (
    <div className="bg-gray-100 lg:bg-white">
      <div className="container mx-auto px-5 pb-16 lg:py-20">
        <div className="text-center">
          <button className="px-4 py-2 mb-2 rounded-3xl font-bold text-gray-900 bg-lime-200">
            <i className="fa-solid fa-arrow-right-long mr-1"></i> Explore Our
            Latest Works
          </button>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center mb-2">
            Our Latest Portfolio
          </h1>
          <p className="text-sm md:text-base md:w-3/4 lg:w-2/3 mx-auto font-medium text-gray-700 text-center">
            Explore our portfolio to view innovative designs and successful
            transformations, reflecting our commitment to personalized, stylish,
            and practical interiors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-5 mt-8">
          <div className="border p-5 rounded-2xl flex flex-col md:flex-row md:flow-row gap-5 bg-white md:col-span-2 lg:col-span-6 lg:order-1">
            <div className="md:w-[600px]">
              <img
                className="w-full h-48 md:h-40 object-cover rounded-2xl"
                src={image1}
                alt="img1.png"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-gray-700">
                Residential
              </h3>
              <p className="font-medium text-gray-500">
                View our residential portfolio to see how we create
                personalized, stylish, and functional spaces that reflect each
                client&apos;s unique lifestyle.
              </p>
              <button className="flex items-center gap-2">
                <h1 className="font-extrabold text-black">Rinterio</h1>
                <i className="fa-solid fa-arrow-right content-center bg-lime-300 text-black w-6 h-6 rounded-full flex justify-center items-center -rotate-45"></i>
              </button>
            </div>
          </div>

          <div className="border p-5 rounded-2xl flex flex-col md:flow-row gap-5 bg-white lg:col-span-3 lg:order-2">
            <div>
              <img
                className="w-full h-48 md:h-40 object-cover rounded-2xl"
                src={image2}
                alt="img2.png"
              />
            </div>
          </div>

          <div className="border p-5 rounded-2xl flex flex-col md:flow-row gap-5 bg-white lg:hidden">
            <div>
              <img
                className="w-full h-48 md:h-40 object-cover rounded-2xl"
                src={image5}
                alt="img5.png"
              />
            </div>
          </div>

          <div className="border p-5 rounded-2xl flex flex-col md:flex-row md:flow-row gap-5 bg-white md:col-span-2 lg:col-span-5 lg:order-4">
            <div className="md:w-[600px]">
              <img
                className="w-full h-48 md:h-40 object-cover rounded-2xl"
                src={image4}
                alt="img4.png"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-gray-700">
                Commercial
              </h3>
              <p className="font-medium text-gray-500">
                Explore our commercial portfolio, showcasing dynamic, functional
                designs that enhance brand identity and optimize workspace
                efficiency for businesses.
              </p>
              <button className="flex items-center gap-2">
                <h1 className="font-extrabold text-black">Rinterio</h1>
                <i className="fa-solid fa-arrow-right content-center bg-lime-300 text-black w-6 h-6 rounded-full flex justify-center items-center -rotate-45"></i>
              </button>
            </div>
          </div>

          <div className="border p-5 rounded-2xl flex flex-col md:flow-row gap-5 bg-white lg:col-span-2 lg:order-3">
            <div>
              <img
                className="w-full h-48 md:h-40 object-cover rounded-2xl"
                src={image3}
                alt="img3.png"
              />
            </div>
          </div>

          <div className="border p-5 rounded-2xl flex flex-col md:flow-row gap-5 bg-white lg:col-span-2 lg:order-5">
            <div>
              <img
                className="w-full h-48 md:h-40 object-cover rounded-2xl"
                src={image5}
                alt="img3.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
