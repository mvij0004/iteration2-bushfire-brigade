import React from "react";
import Image from "next/image";

const BushfireVideo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto mb-8 p-8 bg-[#FFFBF2] rounded-xl">
      {/* Right side with video */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
        <video
          autoPlay
          loop
          muted
          width="500"
          height="500"
          className="rounded-xl"
        >
          <source
            src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726649696/fire_tjpjly.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Left side with question and explanation */}
      <div className="w-full md:w-2/3 flex flex-col justify-between p-4 rounded-xl transform transition-transform duration-300 hover:scale-105">
        {/* Question Section */}
        <div className="flex items-center mb-6">
          <div className="ml-0 md:ml-4 p-4 bg-[#FFE6C5] rounded-xl">
            <p className="text-2xl font-semibold text-gray-700">
              From the clip, can you explain the 2 factors that wind can spread
              the bushfire strongly and quickly?
            </p>
          </div>
        </div>

        {/* Explanation Section */}
        <div className="flex items-center">
          <div className="ml-0 md:ml-4 p-4 bg-[#FFE6C5] rounded-xl">
            <p className="text-xl text-gray-700">
              Strong winds make bushfires worse by blowing flames and helping
              the fire spread quickly across the land. Winds can carry hot
              embers far away, which can start new fires, called spot fires,
              many kilometers ahead of the main fire. If the wind suddenly
              changes direction, it can make the bushfire even more dangerous
              because it can push the fire in a new direction and make it grow
              faster. This sudden change in wind is often caused by a weather
              pattern like a cold front, known as a cool change, which can make
              the fire much harder to control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BushfireVideo;
