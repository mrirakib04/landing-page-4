import concept from "./../assets/img/concept.png";
import flowChart from "./../assets/img/flow-chart.png";
import vision from "./../assets/img/vision.png";
import budgetPlanning from "./../assets/img/budget-planning.png";

const WorkProcess = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-5 pb-16 lg:pb-20">
        <div className="text-center">
          <button className="px-4 py-2 mb-2 rounded-3xl font-bold text-gray-800 bg-white">
            <i className="fa-solid fa-arrow-right-long mr-1"></i> How We Works
          </button>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center mb-2">
            Our Works Process
          </h1>
          <p className="text-sm md:text-base md:w-3/4 lg:w-2/3 mx-auto font-medium text-gray-700 text-center">
            Our interior designer&apos;s work process includes client
            consultation, concept development, space planning, material
            selection, and project management to achieve functional, aesthetic
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          <div className="bg-[#E7C1D3] p-5 rounded-2xl space-y-2">
            <img src={concept} alt="concept" />
            <h3 className="text-xl font-extrabold text-black">Concept</h3>
            <p className="font-medium text-gray-700">
              Our concept blends creativity with practicality, crafting
              personalized, harmonious spaces that reflect the client&apos;s
              lifestyle and preferences.
            </p>
          </div>

          <div className="bg-[#EFDA6E] p-5 rounded-2xl space-y-2">
            <img src={flowChart} alt="flowChart" />
            <h3 className="text-xl font-extrabold text-black">
              Design Process
            </h3>
            <p className="font-medium text-gray-700">
              The interior design process involves client consultation, concept
              creation, space planning, material selection, and project
              execution.
            </p>
          </div>

          <div className="bg-[#A4DAC3] p-5 rounded-2xl space-y-2">
            <img src={vision} alt="vision" />
            <h3 className="text-xl font-extrabold text-black">Supervision</h3>
            <p className="font-medium text-gray-700">
              Interior designer supervision includes overseeing project
              progress, ensuring design adherence, coordinating with
              contractors, and addressing any issues.
            </p>
          </div>

          <div className="bg-[#77AAEA] p-5 rounded-2xl space-y-2">
            <img src={budgetPlanning} alt="budgetPlanning" />
            <h3 className="text-xl font-extrabold text-black">
              Budget Planning
            </h3>
            <p className="font-medium text-gray-700">
              Budget planning includes setting financial limits, estimating
              expenses, tracking costs, and adjusting to maintain project
              affordability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
