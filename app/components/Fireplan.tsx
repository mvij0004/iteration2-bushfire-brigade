import React, { useState } from "react";
import Image from "next/image";

interface SafetyTip {
  id: number;
  title: string;
  content: string;
  imageSrc: string; // Add a property for the image source
}

const safetyTips: SafetyTip[] = [
  {
    id: 1,
    title: "Know the Danger Levels",
    content:
      "Fire Danger Ratings are like a score that tells us how risky it is. Higher numbers mean more danger. Learn what each level means and decide when to act.",
    imageSrc:
      "https://res.cloudinary.com/dxtvfgaud/image/upload/f_auto,q_auto/v1726657554/1_fxbfpi.webp", // Path to the image for this tip
  },
  {
    id: 2,
    title: "Plan Your Departure",
    content:
      "Leaving Early means getting out before a fire starts. Plan whether you'll leave the night before or in the morning to stay safe.",
    imageSrc:
      "https://res.cloudinary.com/dxtvfgaud/image/upload/f_auto,q_auto/v1726657555/2_agbldb.jpg", // Path to the image for this tip
  },
  {
    id: 3,
    title: "Choose a Safe Place",
    content:
      "Safe Places are where you'll go to be safe, like a family member's house or another safe spot.",
    imageSrc:
      "https://res.cloudinary.com/dxtvfgaud/image/upload/f_auto,q_auto/v1726657555/3_edz9tb.webp", // Path to the image for this tip
  },
  {
    id: 4,
    title: "Pick Your Route",
    content:
      "Routes are the roads you'll take to get to safety. Know your main way and a backup in case roads are blocked.",
    imageSrc:
      "https://res.cloudinary.com/dxtvfgaud/image/upload/f_auto,q_auto/v1726657554/4_qqgll1.jpg", // Path to the image for this tip
  },
  {
    id: 5,
    title: "Pack Smart",
    content:
      "Packing Essentials means bringing what you need, like clothes, important papers, and an emergency kit.",
    imageSrc:
      "https://res.cloudinary.com/dxtvfgaud/image/upload/f_auto,q_auto/v1726657555/5_xfwiah.webp", // Path to the image for this tip
  },
  {
    id: 6,
    title: "Care for Your Pets",
    content:
      "Pet Safety means planning how to take your pets with you or making sure they're safe if you can't take them.",
    imageSrc:
      "https://res.cloudinary.com/dxtvfgaud/image/upload/f_auto,q_auto/v1726657554/6_endajv.jpg", // Path to the image for this tip
  },
  {
    id: 7,
    title: "Tell Others & Check on Them",
    content:
      "Informing Others is letting neighbors or family know your plans, so they know where you are and can help if needed. Helping Others means making sure elderly relatives, friends, or anyone who might need extra help is safe.",
    imageSrc:
      "https://res.cloudinary.com/dxtvfgaud/image/upload/f_auto,q_auto/v1726657555/7_netxhl.jpg", // Path to the image for this tip
  },
  {
    id: 8,
    title: "Stay Updated",
    content:
      "Getting Updates means knowing how to find out the latest news, like using a radio or phone alerts.",
    imageSrc:
      "https://res.cloudinary.com/dxtvfgaud/image/upload/f_auto,q_auto/v1726657556/8_ciovda.jpg", // Path to the image for this tip
  },
  {
    id: 9,
    title: "Can't Leave? Find a Safe Space",
    content:
      "Emergency Plans mean knowing what to do if you can't leave, like finding a safe place inside your home.",
    imageSrc:
      "https://res.cloudinary.com/dxtvfgaud/image/upload/f_auto,q_auto/v1726657557/9_sz0mhi.webp", // Path to the image for this tip
  },
];

const FireSafetyBasics: React.FC = () => {
  const [selectedTip, setSelectedTip] = useState<SafetyTip | null>(null);

  return (
    <div className="relative w-auto mx-auto">
      {/* Kangaroo Image */}
      <Image
        src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kangaroo-brigade.png"
        alt="Kangaroo"
        width={250}
        height={250}
        className="absolute -right-40 top-4 md:-right-60 animate-moveSideways"
      />

      <div className="relative bg-[#ce2029] p-6 md:p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Fire Safety Basics
        </h1>
        <p className="text-lg md:text-xl mb-6 text-center text-white">
          Click Each Circle so Mr. Joey, the Kangaroo Bushfire Fighter, will
          explain to you!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {safetyTips.map((tip) => (
            <button
              key={tip.id}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full overflow-hidden transition-transform transform hover:scale-110"
              onClick={() => setSelectedTip(tip)}
            >
              {/* Image as background */}
              <Image
                src={tip.imageSrc}
                alt={tip.title}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />

              {/* Text Overlay (ID and Title) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  {tip.id}
                </span>
                <span className="text-xs sm:text-sm md:text-lg text-center">
                  {tip.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selectedTip && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl md:text-2xl text-black font-bold mb-4">
              {selectedTip.title}
            </h2>
            <p className="text-black text-base md:text-xl">
              {selectedTip.content}
            </p>

            <button
              className="mt-4 bg-[#ce2029] text-white px-4 py-2 rounded hover:bg-black transition-colors"
              onClick={() => setSelectedTip(null)}
            >
              Close
            </button>
          </div>
          {/* Kangaroo Image Floating on Right Side */}
          <Image
            src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kangaroo-teacher.png"
            alt="Kangaroo"
            width={250}
            height={250}
            className="object-contain animate-moveSideways"
          />
        </div>
      )}
    </div>
  );
};

export default FireSafetyBasics;
