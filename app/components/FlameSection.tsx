import React, { useState } from "react";
import Image from "next/image";

const FlameSection: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (button: string) => {
    setActiveButton(activeButton === button ? null : button);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#FFFBF2] rounded-lg p-12 transform transition-transform duration-300 hover:scale-105">
      <div className="relative w-56 aspect-square">
        {/* Flame Image */}
        <div className="relative">
          <Image
            src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/flame.png"
            alt="Flame on"
            width={450}
            height={450}
            className="object-cover"
          />
        </div>

        {/* Cloud Image with animation */}
        <div className="absolute top-[-2rem] right-[2rem] animate-bounce">
          <Image
            src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/cloud-thunder.png"
            alt="Cloud with thunder"
            width={120}
            height={120}
            className="object-cover"
          />
        </div>

        {/* Electric Pole Image with animation */}
        <div className="absolute top-[0rem] right-[0rem] animate-shake">
          <Image
            src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/electric-pole.png"
            alt="Electric Pole"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>

        {/* Wind Image with animation */}
        <div className="absolute top-[4rem] left-[-2rem] animate-windMove">
          <Image
            src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/wind.png"
            alt="Wind"
            width={120}
            height={120}
            className="object-cover"
          />
        </div>

        {/* Branch Image with animation */}
        <div className="absolute bottom-[-3rem] left-[1rem] animate-rotateBranch">
          <Image
            src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/branch.png"
            alt="Branch"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>

        {/* Circle Buttons */}
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <button
            onClick={() => handleButtonClick("topLeft")}
            className="relative w-12 h-12 text-white bg-orange-500 rounded-full"
          >
            Click!
            <span className="absolute top-0 left-0 transform w-12 h-12 rounded-full bg-orange-400 opacity-75 animate-ping"></span>
          </button>

          {/* Text Below the Button */}
          <span className="mt-2 text-md text-center text-black font-black">
            Hot and Dry Weather
          </span>
        </div>

        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <button
            onClick={() => handleButtonClick("topRight")}
            className="relative w-12 h-12 text-white bg-orange-500 rounded-full"
          >
            Click!
            <span className="absolute top-0 right-0 transform w-12 h-12 rounded-full bg-orange-400 opacity-75 animate-ping"></span>
          </button>
          <span className="mt-2 text-md text-center text-black font-black">
            Dry Plants and Trees
          </span>
        </div>

        <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center">
          <button
            onClick={() => handleButtonClick("bottomLeft")}
            className="relative w-12 h-12 text-white bg-orange-500 rounded-full"
          >
            Click!
            <span className="absolute bottom-0 left-0 transform w-12 h-12 rounded-full bg-orange-400 opacity-75 animate-ping"></span>
          </button>
          <span className="mt-2 text-md text-center text-black font-black">
            Strong Winds
          </span>
        </div>

        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 flex flex-col items-center">
          <button
            onClick={() => handleButtonClick("bottomRight")}
            className="relative w-12 h-12 text-white bg-orange-500 rounded-full"
          >
            Click!
            <span className="absolute bottom-0 right-0 transform w-12 h-12 rounded-full bg-orange-400 opacity-75 animate-ping"></span>
          </button>
          <span className="mt-2 text-md text-center text-black font-black">
            Lightning
          </span>
        </div>

        <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <button
            onClick={() => handleButtonClick("leftCenter")}
            className="relative w-12 h-12 text-white bg-orange-500 rounded-full"
          >
            Click!
            <span className="absolute left-0 top-0 transform w-12 h-12 rounded-full bg-orange-400 opacity-75 animate-ping"></span>
          </button>
          <span className="mt-2 text-md text-center text-black font-black">
            People
          </span>
        </div>

        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <button
            onClick={() => handleButtonClick("rightCenter")}
            className="relative w-12 h-12 text-white bg-orange-500 rounded-full"
          >
            Click!
            <span className="absolute right-0 top-0 transform w-12 h-12 rounded-full bg-orange-400 opacity-75 animate-ping"></span>
          </button>
          <span className="mt-2 text-md text-center text-black font-black">
            Mountains
          </span>
        </div>

        {/* Card Elements */}
        {activeButton === "topLeft" && (
          <div className="absolute top-[-5rem] left-[-10rem] transform translate-y-12 w-32 text-gray-800 bg-[#FFE6C5] shadow-md rounded-lg flex items-center justify-center p-3">
            <span className="text-sm">
              When it&apos;s really hot and the air is dry, everything outside,
              like plants and grass, can catch fire more easily.
            </span>
          </div>
        )}

        {activeButton === "topRight" && (
          <div className="absolute top-[-5rem] right-[-10rem] transform translate-y-12 w-32 text-gray-800 bg-[#FFE6C5] shadow-md rounded-lg flex items-center justify-center p-3">
            <span className="text-sm">
              If it hasn&apos;t rained for a while, plants and trees dry out
              like firewood which is a fuel for the flames, this makes them burn
              really easily.t
            </span>
          </div>
        )}

        {activeButton === "bottomLeft" && (
          <div className="absolute bottom-[-5rem] left-[-10rem] transform -translate-y-12 w-32 text-gray-800 bg-[#FFE6C5] shadow-md rounded-lg flex items-center justify-center p-3">
            <span className="text-sm">
              Wind can push the flames around, making the fire spread faster.
            </span>
          </div>
        )}

        {activeButton === "bottomRight" && (
          <div className="absolute bottom-[-5rem] right-[-10rem] transform -translate-y-12 w-32 text-gray-800 bg-[#FFE6C5] shadow-md rounded-lg flex items-center justify-center p-3">
            <span className="text-sm">
              Sometimes, a lightning bolt can hit the ground and start a fire.
            </span>
          </div>
        )}

        {activeButton === "leftCenter" && (
          <div className="absolute left-[-10rem] top-1/2 transform -translate-y-1/2 w-32 text-gray-800 bg-[#FFE6C5] shadow-md rounded-lg flex items-center justify-center p-3">
            <span className="text-sm">
              People can accidentally start fires, like if they forget to put
              out their campfires properly.
            </span>
          </div>
        )}

        {activeButton === "rightCenter" && (
          <div className="absolute right-[-10rem] top-1/2 transform -translate-y-1/2 w-32 text-gray-800 bg-[#FFE6C5] shadow-md rounded-lg flex items-center justify-center p-3">
            <span className="text-sm">
              Fires can move up hills and mountains faster because flames grow
              higher in narrow spaces.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlameSection;
