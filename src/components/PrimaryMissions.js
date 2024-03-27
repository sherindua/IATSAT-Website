import React from "react";
import WorkplaceImage1 from "../assets/Workplace1.jpeg";

function PrimaryMissions() {
  return (
    <div className="mt-5">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">
          Primary Missions
        </h2>
      </div>
      <div className="flex flex-col h-auto md:flex-row sm:justify-center items-center mt-10 ml-10 mr-10 sm:ml-20 sm:mb-10 md:ml-20 lg:m-20 gap-0">
        <div className="h-[480px] md:h-auto mt-0 mb-0 w-[380px] bg-gray-300 ml-0 mr-0 ">
          <div className="p-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src={WorkplaceImage1}
                alt="Mission1"
                className="object-cover object-center h-full w-full hover:scale-[1.1] duration-300"
              ></img>
            </div>
            <p className="mt-2 mb-4 h-[120px] mb-4 line-clamp-5">
              To foster global prosperity, we require an education system that
              transcends boundaries, lifting every soul on this planet to new
              heights, unencumbered by limitations or obstacles"
            </p>
            <a
              href="#"
              className="text-gray-200 shadow-lg p-2 rounded-sm mb-2 bg-gray-800"
            >
              Learn More >
            </a>
          </div>
        </div>

        <div className="h-[480px] md:h-auto mt-0 mb-0 w-[380px] bg-blue-600 ml-0 mr-0 ">
          <div className="p-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src={WorkplaceImage1}
                alt="Mission1"
                className="object-cover object-center h-full w-full hover:scale-[1.1] duration-300"
              ></img>
            </div>
            <p className="mt-2 mb-4 h-[120px] mb-4 line-clamp-5">
              To foster global prosperity, we require an education system that
              transcends boundaries, lifting every soul on this planet to new
              heights, unencumbered by limitations or obstacles"
            </p>
            <a
              href="#"
              className="text-gray-200 shadow-lg p-2 rounded-sm mb-2 bg-gray-800"
            >
              Learn More >
            </a>
          </div>
        </div>

        <div className="h-[480px] md:h-auto mt-0 mb-0 w-[380px] bg-gray-300 ml-0 mr-0 ">
          <div className="p-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                src={WorkplaceImage1}
                alt="Mission1"
                className="object-cover object-center h-full w-full hover:scale-[1.1] duration-300"
              ></img>
            </div>
            <p className="mt-2 mb-4 h-[120px] mb-4 line-clamp-5">
              To foster global prosperity, we require an education system that
              transcends boundaries, lifting every soul on this planet to new
              heights, unencumbered by limitations or obstacles"
            </p>
            <a
              href="#"
              className="text-gray-200 shadow-lg p-2 rounded-sm mb-2 bg-gray-800"
            >
              Learn More >
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrimaryMissions;
