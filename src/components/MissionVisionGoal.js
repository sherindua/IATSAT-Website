import React from "react";
import missionImage from "../assets/our-mission.png";
import visionImage from "../assets/our-vision.png";
import goalImage from "../assets/our-goal.png";

function MissionVisionGoal() {
  return (
    <div className="ml-10 mr-10 md:ml-30 md:mr-20 md:mt-20 mt-10 lg:mr-40 lg:ml-20">
      <div className="relative ">
        <div
          className="flex flex-col gap-10 justify-evenly items-start
      md:flex-row"
        >
          <div className="flex flex-col items-center md:w-[33%] md:shrink-0">
            <img
              className="h-[88px] m-auto"
              src={missionImage}
              style={{ filter: "grayscale(70%)" }}
              alt="mission"
            ></img>
            <h1 className="ml-[-20px] pt-8 pb-2 text-xl">Our Mission</h1>
            <p className="text-sm">
              "We are committed to realizing our vision by facilitating
              resource-based learning that drives exponential growth. Our
              mission is to enable economic independence through education
              within our community, ensuring that everyone has access to the
              knowledge, resources, and opportunities needed to build a brighter
              and more prosperous future."
            </p>
          </div>

          <div className="flex flex-col items-center md:w-[33%] md:shrink-0">
            <img
              className="h-[88px] w-[90px] m-auto"
              src={visionImage}
              style={{ filter: "grayscale(70%)" }}
              alt="vision"
            ></img>
            <h1 className="ml-[-20px] pt-8 pb-2 text-xl">Our Vision</h1>
            <p className="text-sm">
              "At IATSAT, we aspire to influence global priorities for the
              future by embracing experiential learning as our core belief. Our
              vision is to create a world where knowledge is a catalyst for
              positive change, empowering individuals and communities alike."
            </p>
          </div>
          <div className="flex flex-col items-center md:w-[33%] md:shrink-0">
            <img
              className="h-[80px] m-auto"
              src={goalImage}
              style={{ filter: "grayscale(90%)" }}
              alt="goal"
            ></img>
            <h1 className="ml-[-20px] pt-10 pb-2 text-xl">Our Goal</h1>
            <p className="text-sm">
              "IATSAT is passionately driven to revolutionize education, aiming
              for a profound influence on 21st-century learning. We empower
              every educational institution with the right set of tools. Our
              unwavering commitment is to cultivate equal opportunities,
              empowering every student to flourish and excel."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVisionGoal;
