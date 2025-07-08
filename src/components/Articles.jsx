import article1 from "./../assets/img/article1.png";
import article2 from "./../assets/img/article2.png";
import article3 from "./../assets/img/article3.png";

const Articles = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-5 py-16 lg:py-20">
        <div className="text-center">
          <button className="px-4 py-2 mb-2 rounded-3xl font-bold text-gray-800 bg-lime-200">
            <i className="fa-solid fa-arrow-right-long mr-1"></i> Rinterio News
          </button>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center mb-2">
            Read Our Articles and News
          </h1>
          <p className="text-sm md:text-base md:w-3/4 lg:w-2/3 mx-auto font-medium text-gray-700 text-center">
            Stay updated with our latest events and news, featuring design
            trends, project milestones, and industry insights from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
          <div className="bg-white p-5 rounded-2xl shadow space-y-3 md:flex md:gap-5 lg:flex-col">
            <div>
              <img
                className="w-full md:min-h-full"
                src={article1}
                alt="article1.png"
              />
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-medium">
                <i className="fa-solid fa-calendar-days mr-1"></i>
                <span className="mr-3">July 14, 2024</span>
                <i className="fa-regular fa-circle-user mr-1"></i>
                <span>By Admin</span>
              </p>
              <h3 className="text-gray-700 text-xl font-extrabold">
                How Modern Interiors are Shaping 2024
              </h3>
              <p className="text-gray-500 font-medium">
                Explore emerging trends and innovative designs that are defining
                contemporary interiors this year.
              </p>
              <button className="flex items-center gap-2">
                <h1 className="font-extrabold text-black">Read More</h1>
                <i className="fa-solid fa-arrow-right content-center bg-lime-300 text-black w-6 h-6 rounded-full flex justify-center items-center -rotate-45"></i>
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow space-y-3 md:flex md:gap-5 lg:flex-col">
            <div>
              <img
                className="w-full md:min-h-full"
                src={article2}
                alt="article2.png"
              />
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-medium">
                <i className="fa-solid fa-calendar-days mr-1"></i>
                <span className="mr-3">July 14, 2024</span>
                <i className="fa-regular fa-circle-user mr-1"></i>
                <span>By Admin</span>
              </p>
              <h3 className="text-gray-700 text-xl font-extrabold">
                Eco-Friendly Materials Making Waves in Interior Design
              </h3>
              <p className="text-gray-500 font-medium">
                Learn about the latest eco-friendly materials and sustainable
                practices revolutionizing the interior design industry.
              </p>
              <button className="flex items-center gap-2">
                <h1 className="font-extrabold text-black">Read More</h1>
                <i className="fa-solid fa-arrow-right content-center bg-lime-300 text-black w-6 h-6 rounded-full flex justify-center items-center -rotate-45"></i>
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow space-y-3 md:flex md:gap-5 lg:flex-col">
            <div>
              <img
                className="w-full md:min-h-full"
                src={article3}
                alt="article3.png"
              />
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-medium">
                <i className="fa-solid fa-calendar-days mr-1"></i>
                <span className="mr-3">July 14, 2024</span>
                <i className="fa-regular fa-circle-user mr-1"></i>
                <span>By Admin</span>
              </p>
              <h3 className="text-gray-700 text-xl font-extrabold">
                Top 5 Must-Have Features for Stylish Home Offices
              </h3>
              <p className="text-gray-500 font-medium">
                Discover essential design elements that enhance both
                functionality and aesthetics in home office spaces.
              </p>
              <button className="flex items-center gap-2">
                <h1 className="font-extrabold text-black">Read More</h1>
                <i className="fa-solid fa-arrow-right content-center bg-lime-300 text-black w-6 h-6 rounded-full flex justify-center items-center -rotate-45"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
