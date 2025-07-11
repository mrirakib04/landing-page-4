import formBG from "./../assets/img/bg.jpg";

const MessageForm = () => {
  return (
    <div
      style={{
        background: `url(${formBG})`,
      }}
      className="bg-no-repeat bg-cover bg-center"
    >
      <div className="bg-gray-100/50">
        <div className="container mx-auto px-5 py-16 lg:py-20">
          <div className="text-center">
            <button className="px-4 py-2 mb-2 rounded-3xl font-bold text-gray-800 bg-lime-200">
              <i className="fa-solid fa-arrow-right-long mr-1"></i> Let&apos;s
              Connect
            </button>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center mb-2">
              Let&apos;s Discuss Next Project
            </h1>
            <p className="text-sm md:text-base md:w-3/4 lg:w-2/3 mx-auto font-medium text-gray-800 text-center">
              Join us to discuss our upcoming project, exploring design
              concepts, goals, and how we&apos;ll bring our vision to life.
            </p>
          </div>

          <form className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <input
              className="border bg-white w-full px-4 py-3 rounded-3xl border-none font-medium"
              type="text"
              placeholder="First Name*"
              required
            />
            <input
              className="border bg-white w-full px-4 py-3 rounded-3xl border-none font-medium"
              type="text"
              placeholder="Last Name*"
              required
            />
            <input
              className="border bg-white w-full px-4 py-3 rounded-3xl border-none font-medium"
              type="number"
              placeholder="Phone Number*"
              required
            />
            <input
              className="border bg-white w-full px-4 py-3 rounded-3xl border-none font-medium"
              type="email"
              placeholder="Email Address*"
              required
            />
            <textarea
              className="border bg-white w-full px-4 py-3 rounded-3xl border-none font-medium md:col-span-2"
              placeholder="Write your message here"
              rows="8"
            ></textarea>
            <button
              className="flex items-center justify-center gap-2 bg-lime-300 px-5 py-3 rounded-[32px] md:col-span-2"
              type="submit"
            >
              <p className="text-xl font-extrabold text-black">Send Mail</p>
              <i className="fa-solid fa-arrow-right bg-black content-center text-white w-7 h-7 rounded-full flex justify-center items-center -rotate-45"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
