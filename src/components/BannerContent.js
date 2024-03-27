import React from "react";
import { Carousel, initTWE } from "tw-elements";

initTWE({ Carousel });

function BannerContent() {
  return (
    <div>
      <div className="bg-blue-900 h-[480px] sm:h-[400px] text-white flex mt-3 ">
        <div className="w-[100%] sm:flex md:mr-[10] gap-5 sm:mt-10 md:mt-10 sm:mr-40 md:mt-20 ml-10 mr-10 mt-20 justify-between">
          <div className="sm:w-[60%]">
            <div className="text-4xl">
              <b> Let's Join Hands Together To Bring The Revolution.</b>
            </div>
            <br></br>
            <div className="text-4xl sm:text-2xl text-blue-400 md:mb-10 sm:mb-4 mb-4 md:mb-1">
              Let's Bridge The Gap!
            </div>
            <span className="lg:text-3xl md:text-2xl sm:text-xl text-xl md:-mt-[60px] text-white-300  mb-20 pb-20 sm:mb-40 mt-20">
              Take your first class for{" "}
              <span className="lg:text-4xl md:text-3xl sm:text-xl text-3xl text-yellow-300">
                FREE!
              </span>
            </span>
          </div>
          <a href="#">
            <button className="bg-red-500 rounded-md text-white text-xl p-2 ml-[30%] sm:ml-[38%]  md:mr-[10%] md:ml-40 sm:mt-[100px] sm:p-0 mt-[36px] w-[160px] md:mt-[100px] h-[50px] hover:bg-red-400">
              Enroll Now
            </button>
          </a>
          {/* <div className="mt-20">100+ Mentors</div> */}
        </div>
      </div>
    </div>
  );
}

export default BannerContent;
