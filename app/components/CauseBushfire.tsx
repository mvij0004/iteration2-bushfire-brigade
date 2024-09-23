import React from "react";
import Image from "next/image";
import FlameSection from "./FlameSection";
import BushfireVideo from "./BushfireVideo";

const CauseBushfire = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto p-4 rounded-lg">
        <div className="flex flex-col md:flex-row w-full">
          {/* Koala Section */}
          <div className="flex w-full md:w-1/2 justify-center items-center">
            <div className="w-56 aspect-square overflow-visible transition-transform duration-500 hover:scale-105">
              <Image
                src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/koala-t.png"
                alt="Koala doctor with presentation"
                width={450}
                height={450}
                className="object-cover animate-moveSideways"
              />
            </div>
          </div>

          {/* Flame Section */}
          <FlameSection />
        </div>
      </div>

      <div className="bg-[#FFFBF2] p-12 rounded-lg">
        <div className="py-4 bg-[#ffe6c5] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <p className="text-2xl text-orange-600 text-center">Cause</p>
          <p className="text-xl font-medium text-gray-800 text-center mb-2 p-5">
            In a bushfire, potential fuels include things like dry grass,
            leaves, twigs, and branches. These fuels can catch fire, or ignite,
            if they get too hot, especially during hot and dry weather.
            Sometimes, lightning or even human activity, like a campfire or a
            spark from machinery, can start a fire. To control and put out a
            bushfire, firefighters work hard by creating firebreaks, which are
            gaps in the vegetation that stop the fire from spreading.
          </p>
        </div>
      </div>

      <div className="my-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="col-span-1 lg:col-span-4 flex flex-col">
          <BushfireVideo />
        </div>

        <div className="col-span-1 flex flex-col items-center">
          {/* Do You Know Card Section */}
          <div className="w-full p-6 bg-[#ffe6c5] rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="text-center text-xl font-semibold italic text-gray-800">
              Do you Know? <br />
              <span className="text-lg font-normal">
                The most important aspects of weather that affect fire and fuels
                are temperature, precipitation, wind, and humidity.
              </span>
            </p>
          </div>

          {/* Centered Koala Image */}
          <div className="w-56 my-auto aspect-square flex justify-center items-center overflow-visible transition-transform duration-500 hover:scale-105">
            <Image
              src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/koala-p.png"
              alt="Koala doctor with presentation"
              width={500}
              height={500}
              className="object-cover animate-moveSideways"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseBushfire;
