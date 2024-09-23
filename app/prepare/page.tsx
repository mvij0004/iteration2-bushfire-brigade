"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Gauge from "../components/Gauge";
import BushfireAreaMap from "../components/BushfireAreaMap";
import TableauVizSeason from "../components/TableauVizSeason";
import Fireplan from "../components/Fireplan";
import BushfireSurvival from "../components/BushfireSurvival";
import TableauViz from "../components/TableauViz";
import TableauPictograph from "../components/TableauPictograph";
import TableauCluster from "../components/TableauCluster";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import EmergencyKitGame from "../components/EmergencyKitGame";

const Page = () => {
  const [value, setValue] = useState(50);

  const [isAnswerVisibleOne, setIsAnswerVisibleOne] = useState(false);
  const [isAnswerVisibleTwo, setIsAnswerVisibleTwo] = useState(false);
  const [isAnswerVisibleThree, setIsAnswerVisibleThree] = useState(false);

  const toggleAnswerOne = () => {
    setIsAnswerVisibleOne(!isAnswerVisibleOne);
  };

  const toggleAnswerTwo = () => {
    setIsAnswerVisibleTwo(!isAnswerVisibleTwo);
  };

  const toggleAnswerThree = () => {
    setIsAnswerVisibleThree(!isAnswerVisibleThree);
  };

  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <Navigation />
      {/* Hero Section */}
      <div className="relative isolate h-[90vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/prepare.webp')] bg-cover bg-center">
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

        {/* Content Overlay */}
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Prepare with Bushfire Brigade
              <br />
              Safety Starts with You
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Empowering young minds to be fire-smart and ready for bushfire
              challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Busfire map area */}
      <div className="relative py-8 flex flex-col items-center justify-center w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/class-room.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
            Assessing my risk
          </h1>
          <hr className="w-full max-w-lg border-gray-700 mb-4 mx-auto" />

          <div className="bg-[#FFFBF2] p-6 rounded-lg mx-4 md:p-8 lg:p-12">
            <div className="py-4 bg-[#ffe6c5] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <p className="text-2xl text-orange-600 text-center md:text-3xl">
                Introduction
              </p>
              <p className="text-base font-medium text-gray-800 text-center mb-2 p-4 md:text-xl lg:p-5">
                Bushfires can be scary, but we can learn how to stay safe if
                they happen. In this section, we&apos;ll talk about what we can
                do to get ready for bushfires and how to stay safe if one
                starts. It’s important to know what to do so we can protect
                ourselves and others!
              </p>
            </div>
          </div>

          {/* Responsive Tableau Visualization */}
          <div className="w-full flex justify-center items-center mt-4 px-4 md:w-10/12 lg:w-8/12">
            <TableauVizSeason />
          </div>

          {/* Information Cards */}
          <div className="w-full px-4 flex flex-col md:flex-row justify-around space-y-4 md:space-y-0 md:space-x-4 min-h-56 mt-4">
            {/* Card 1 */}
            <div className="w-full md:w-1/3 bg-[#FFFBF2] p-4 md:p-6 rounded-lg shadow-lg">
              <div className="p-4 bg-[#FFE6C5] rounded-md shadow-md">
                <div className="cursor-pointer" onClick={toggleAnswerOne}>
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-700 flex justify-between items-center">
                    When should we be careful?
                    {isAnswerVisibleOne ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </h4>
                </div>

                {isAnswerVisibleOne && (
                  <div className="bg-[#FFE6C5]">
                    <p className="mb-4 text-sm md:text-lg text-gray-700">
                      We know that bushfires are more likely to happen during
                      the hottest and driest times of the year.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/3 bg-[#FFFBF2] p-4 md:p-6 rounded-lg shadow-lg">
              <div className="p-4 bg-[#FFE6C5] rounded-md shadow-md">
                <div className="cursor-pointer" onClick={toggleAnswerTwo}>
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-700 flex justify-between items-center">
                    Which season should we be careful in?
                    {isAnswerVisibleTwo ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </h4>
                </div>

                {isAnswerVisibleTwo && (
                  <div className="bg-[#FFE6C5]">
                    <p className="mb-4 text-sm md:text-lg text-gray-700">
                      As you can see in the chart, summer is the season when
                      bushfires happen the most because it’s hot and dry. Spring
                      and autumn can also be risky.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-1/3 bg-[#FFFBF2] p-4 md:p-6 rounded-lg shadow-lg">
              <div className="p-4 bg-[#FFE6C5] rounded-md shadow-md">
                <div className="cursor-pointer" onClick={toggleAnswerThree}>
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-700 flex justify-between items-center">
                    Which months should we be very careful?
                    {isAnswerVisibleThree ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </h4>
                </div>

                {isAnswerVisibleThree && (
                  <div className="bg-[#FFE6C5]">
                    <p className="mb-4 text-sm md:text-lg text-gray-700">
                      We need to be extra careful in December, January, and
                      February because those are the hottest months of summer.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-[#FFFBF2] p-6 md:p-8 lg:p-12 rounded-lg mx-4 md:mx-12 mt-8">
            <div className="py-4 bg-[#ffe6c5] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <p className="text-2xl text-orange-600 text-center md:text-3xl">
                Do You Know?
              </p>
              <p className="text-base font-medium text-gray-800 text-center mb-2 p-4 md:text-xl lg:p-5">
                In the line chart, the spike in the 2019 summer season, known as
                the &quot;Black Summer,&quot; was one of the most intense and
                catastrophic fire seasons on record in Australia.
              </p>
            </div>
          </div>

          {/* Bushfire Map */}
          <div className="w-full px-4 md:px-6 mt-8 flex justify-center items-center">
            <BushfireAreaMap />
          </div>

          {/* Gauge */}
          <div className="w-full px-4 md:px-6 mt-4 flex justify-center items-center">
            <Gauge />
          </div>
        </div>
      </div>

      {/* Survival skills section */}
      <div className="relative py-8 flex flex-col items-center justify-center w-full">
        <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/home-new.webp')] bg-[#FFFBF2] opacity-10 bg-cover bg-center brightness-75"></div>
        <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
          Survival Skills
        </h1>
        <hr className="w-full max-w-lg border-gray-700 mb-4 mx-auto" />
        <br />
        <h2 className="text-3xl font-black text-center text-gray-700 mb-4">
          What Places Should You Watch Out For?
        </h2>

        {/* First row - Close to grass and Dense or open bush */}
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between p-8 space-y-8 md:space-y-0 w-auto">
          {/* Close to grass Container */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 space-y-8">
            {/* Image Container */}
            <div className="w-full max-w-md p-4">
              <div className="transition-transform transform hover:scale-105 duration-500">
                <Image
                  src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/closeToGrass.png"
                  alt="Paddock"
                  className="rounded-2xl w-full h-auto animate-moveSideways"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            {/* Text Card */}
            <div className="w-full bg-[#FFE6C5] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Close to or among grass
              </h2>
              <ul className="list-disc list-inside text-xl text-gray-700">
                <li>Dry, brown grass can catch fire really fast.</li>
                <li>Tall grass makes bigger flames.</li>
                <li>Grass fires spread quicker than forest fires.</li>
              </ul>
            </div>
          </div>

          {/* Dense or open bush Container */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 space-y-8">
            {/* Image Container */}
            <div className="w-full max-w-md p-4">
              <div className="transition-transform transform hover:scale-105 duration-500">
                <Image
                  src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/denseBush.png"
                  alt="Dense Bush"
                  className="rounded-2xl w-auto h-auto animate-moveSideways"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            {/* Text Card */}
            <div className="w-full bg-[#FFE6C5] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Area with thick bushes
              </h2>
              <ul className="list-disc list-inside text-xl text-gray-700">
                <li>Both thick and open bush can be risky.</li>
                <li>
                  Small sticks burn fast, and big logs stay hot for a long time.
                </li>
                <li>Smoke from the fire can make it hard to see.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second row - Coastal scrub and Where suburbs meet bush */}
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between p-8 space-y-8 md:space-y-0 w-auto">
          {/* Coastal scrub Container */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 space-y-8">
            {/* Image Container */}
            <div className="w-full max-w-md p-4">
              <div className="transition-transform transform hover:scale-105 duration-500">
                <Image
                  src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/costalScrub.png"
                  alt="Coastal Scrub"
                  className="rounded-lg w-auto h-auto animate-moveSideways"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            {/* Text Card */}
            <div className="w-full bg-[#FFE6C5] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Near beaches with bushes
              </h2>
              <ul className="list-disc list-inside text-xl text-gray-700">
                <li>The coast fires will be very hot and spread quickly.</li>
                <li>Ocean winds can make the fire move in surprising ways.</li>
                <li>Lots of small, burning pieces will be flying around.</li>
              </ul>
            </div>
          </div>

          {/* Where suburbs meet the bush or grasslands Container */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 space-y-8">
            {/* Image Container */}
            <div className="w-full max-w-md p-4">
              <div className="transition-transform transform hover:scale-105 duration-500">
                <Image
                  src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/grassland.png"
                  alt="Grassland"
                  className="rounded-lg w-auto h-auto animate-moveSideways"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            {/* Text Card */}
            <div className="w-full bg-[#FFE6C5] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Where suburbs meet the bush or grasslands
              </h2>
              <ul className="list-disc list-inside text-xl text-gray-700">
                <li>
                  Fires in parks or reserves can quickly spread to nearby fences
                  and gardens.
                </li>
                <li>Fires can jump from one house to another.</li>
                <li>
                  If you live near bushes, burning pieces might land on your
                  house.
                </li>
                <li>Strong winds can blow burning pieces from far away.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fire plan section */}
      <div className="relative py-8 flex flex-col items-center justify-center w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kids-talking.jpeg')] bg-[#FFFBF2] opacity-10 bg-cover bg-center brightness-75"></div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-center text-gray-700 mb-4">
          Why Having a Fire Plan is Super Important!
        </h1>
        <hr className="w-full max-w-lg border-gray-700 mb-4 mx-auto" />

        {/* Kangaroo and Text Card */}
        <div className="relative p-6 md:p-10 flex flex-col md:flex-row items-center justify-center w-full">
          {/* Kangaroo Image */}
          <div className="z-20 mb-6 md:mb-0 md:mr-6">
            <Image
              src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kangaroo.png"
              alt="Kangaroo pointing at the card"
              width={150}
              height={150}
              className="object-contain animate-moveSideways"
            />
          </div>

          {/* Text Card */}
          <div className="w-full md:w-3/4 lg:w-2/3 bg-[#FFE6C5] p-6 md:p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-500 relative z-10">
            <p className="text-base md:text-xl lg:text-2xl text-center text-gray-700 mb-4">
              A fire plan helps keep you safe by showing you exactly what to do
              if there&apos;s a fire. It helps you stay calm, know where to go,
              and what to take. It&apos;s like having a safety guide to keep you
              and your family out of trouble! 🚒🔥
            </p>
          </div>
        </div>

        {/* Fireplan Component */}
        <Fireplan />
      </div>

      {/* Emergency Kit Packing Game */}
      <div className="relative py-8 flex flex-col items-center justify-center w-full">
        <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/bag.png')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
        <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
          Emergency Kit Packing Game
        </h1>
        <hr className="w-full max-w-lg border-gray-700 mb-4 mx-auto" />

        <div className="relative w-full flex flex-col items-center justify-center">
          <DndProvider backend={HTML5Backend}>
            <EmergencyKitGame />
          </DndProvider>
        </div>
      </div>

      {/*Bushfire survival option*/}
      <div className="relative py-8 flex flex-col items-center justify-center w-full">
        <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/3.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
        <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
          Bushfire Survival Options!
        </h1>
        <hr className="w-full max-w-lg border-gray-700 mb-4 mx-auto" />
        <div className="relative w-full flex flex-col items-center justify-center">
          <BushfireSurvival />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
