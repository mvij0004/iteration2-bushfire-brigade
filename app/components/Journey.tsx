import React from "react";
import Image from "next/image";
import Link from "next/link";

const Journey: React.FC = () => {
  return (
    <div className="">
      <div
        id="Learn"
        className="relative flex flex-col lg:flex-row bg-clip-border rounded-xl bg-[#FFFBF2] text-gray-700 shadow-md w-full max-w-screen-xl mx-auto my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div className="relative lg:w-2/5 m-0 overflow-hidden rounded-r-none bg-clip-border rounded-xl shrink-0">
          <Image
            src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/learning-landing.jpeg"
            alt="Learning About Bushfires"
            width={800}
            height={500}
            className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110 rounded-xl"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h6 className="block mb-4 font-sans text-xl antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            Learning About Bushfires
          </h6>
          <p className="block mb-4 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
            Students will explore the scientific causes and effects of bushfires
            in the Victorian region, gaining a deeper understanding of these
            natural events.
          </p>
          <Link href="/learn" className="inline-block">
            <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div
        id="Prepare"
        className="relative flex flex-col lg:flex-row bg-clip-border rounded-xl bg-[#FFFBF2] text-gray-700 shadow-md w-full max-w-screen-xl mx-auto my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div className="p-6 flex flex-col justify-center">
          <h6 className="block mb-4 font-sans text-xl antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            Preparation for Bushfires
          </h6>
          <p className="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
            Students will learn how to assess bushfire risks and recognize when
            to be cautious. They will also gain knowledge on emergency
            precautions and safety tips to stay safe during a bushfire.
          </p>
          <Link href="/prepare" className="inline-block">
            <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
              Learn More
            </button>
          </Link>
        </div>
        <div className="relative w-full lg:w-2/5 m-0 overflow-hidden rounded-r-none bg-clip-border rounded-xl shrink-0">
          <Image
            src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/prepare.webp"
            alt="Preparation for Bushfire"
            width={800}
            height={500}
            className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110 rounded-xl"
          />
        </div>
      </div>

      <div
        id="Recover"
        className="relative flex flex-col lg:flex-row bg-clip-border rounded-xl bg-[#FFFBF2] text-gray-700 shadow-md w-full max-w-screen-xl mx-auto my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div className="relative w-full lg:w-2/5 m-0 overflow-hidden rounded-r-none bg-clip-border rounded-xl shrink-0">
          <Image
            src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/recovery.jpeg"
            alt="Recover"
            width={800}
            height={500}
            className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110 rounded-xl"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h6 className="block mb-4 font-sans text-xl antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            Recovery from Bushfires
          </h6>
          <p className="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
            Students will learn how individuals and communities recover from
            bushfire impacts, focusing on immediate response, community support,
            and long-term rebuilding efforts.
          </p>
          <Link href="/recover" className="inline-block">
            <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journey;
