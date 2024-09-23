import React, { useState } from "react";
import Image from "next/image";

const Gauge: React.FC = () => {
  // State to track the current image and content
  const [currentImage, setCurrentImage] = useState(
    "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/fdr-no-rating.svg"
  );
  const [currentText, setCurrentText] = useState<
    "no-rating" | "moderate" | "high" | "extreme" | "catastrophic"
  >("no-rating");

  // Updated text for each danger level with bullet points where necessary
  const texts = {
    "no-rating": {
      title: "No Rating",
      content:
        "On days when there is minimal risk, the Fire Danger Rating will be set to ‘no rating’. Bushfires which start in these conditions are unlikely to spread in a dangerous or life-threatening way, but you will still need to remain alert and abide by local seasonal laws and regulations.",
    },
    moderate: {
      title: "Moderate",
      content: (
        <div>
          <p className="font-bold text-2xl">What does it mean?</p>
          <ul className="list-disc pl-5">
            <li>Most fires can be controlled.</li>
          </ul>
          <p className="font-bold text-2xl">What should I do?</p>
          <ul className="list-disc pl-5">
            <li>Plan and prepare.</li>
            <li>Stay up to date and be ready to act if there is a fire.</li>
          </ul>
        </div>
      ),
    },
    high: {
      title: "High",
      content: (
        <div>
          <p className="font-bold text-2xl">What does it mean?</p>
          <ul className="list-disc pl-5">
            <li>Fires can be dangerous.</li>
          </ul>
          <p className="font-bold text-2xl">What should I do?</p>
          <ul className="list-disc pl-5">
            <li>Be ready to act.</li>
            <li>There’s a heightened risk. Be alert for fires in your area.</li>
            <li>Decide what you will do if a fire starts.</li>
            <li>
              If a fire starts, your life and property may be at risk. The
              safest option is to avoid bushfire risk areas.
            </li>
          </ul>
        </div>
      ),
    },
    extreme: {
      title: "Extreme",
      content: (
        <div>
          <p className="font-bold text-2xl">What does it mean?</p>
          <ul className="list-disc pl-5">
            <li>Fires will spread quickly and be extremely dangerous.</li>
            <li>These are dangerous fire conditions.</li>
            <li>Expect hot, dry and windy conditions.</li>
          </ul>
          <p className="font-bold text-2xl">What should I do?</p>
          <ul className="list-disc pl-5">
            <li>
              Check your bushfire plan and that your property is fire ready
            </li>
            <li>
              If a fire starts, take immediate action. If you and your property
              are not prepared to the highest level, go to a safer location well
              before the fire impacts.
            </li>
            <li>Reconsider travel through bushfire risk areas.</li>
            <li>
              Leaving bushfire risk areas early in the day is your safest
              option.hat
            </li>
          </ul>
        </div>
      ),
    },
    catastrophic: {
      title: "Catastrophic",
      content: (
        <div>
          <p className="font-bold text-2xl">What does it mean?</p>
          <ul className="list-disc pl-5">
            <li>
              If a fire starts and takes hold, lives are likely to be lost.
            </li>
            <li>These are the most dangerous conditions for a fire.</li>
          </ul>
          <p className="font-bold text-2xl">What should I do?</p>
          <ul className="list-disc pl-5">
            <li>For your survival, leave bushfire risk areas.</li>
            <li>
              Your life may depend on the decisions you make, even before there
              is a fire.
            </li>
            <li>For your survival, do not be in bushfire risk areas.</li>
            <li>
              Stay safe by going to a safer location early in the morning or the
              night before.
            </li>
            <li>
              Homes cannot withstand fires in these conditions. You may not be
              able to leave and help may not be available.
            </li>
          </ul>
        </div>
      ),
    },
  };

  // Handle button click to update both image and text
  const handleImageChange = (
    imagePath: string,
    textKey: "no-rating" | "moderate" | "high" | "extreme" | "catastrophic"
  ) => {
    setCurrentImage(imagePath);
    setCurrentText(textKey);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-lg w-full">
      {/* Left column - Image and buttons */}
      <div className="flex flex-col items-center justify-center bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/forest.png')] bg-cover bg-center bg-no-repeat p-6 rounded-md">
        {/* Display the current image */}
        <Image
          src={currentImage}
          alt="Gauge image"
          width={300}
          height={300}
          className="object-cover md:w-400 md:h-400"
        />

        {/* Buttons to change the image */}
        <div className="mt-4 flex flex-col space-y-4 w-full md:w-3/4">
          <button
            className="bg-gray-200 px-4 py-2 rounded text-black border-2 border-black min-w-24"
            onClick={() =>
              handleImageChange(
                "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/fdr-no-rating.svg",
                "no-rating"
              )
            }
          >
            No Rating
          </button>
          <button
            className="bg-[#64BF2F] hover:bg-green-200 px-4 py-2 rounded text-black border-2 border-black min-w-24"
            onClick={() =>
              handleImageChange(
                "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/fdr-moderate.svg",
                "moderate"
              )
            }
          >
            Moderate
          </button>
          <button
            className="bg-[#FDDD3B] hover:bg-yellow-200 px-4 py-2 rounded text-black border-2 border-black min-w-24"
            onClick={() =>
              handleImageChange(
                "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/fdr-high.svg",
                "high"
              )
            }
          >
            High
          </button>
          <button
            className="bg-[#F78100] hover:bg-orange-200 px-4 py-2 rounded text-black border-2 border-black min-w-24"
            onClick={() =>
              handleImageChange(
                "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/fdr-extreme.svg",
                "extreme"
              )
            }
          >
            Extreme
          </button>
          <button
            className="bg-[#ee3939] hover:bg-red-200 px-4 py-2 rounded text-black border-2 border-black min-w-24"
            onClick={() =>
              handleImageChange(
                "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/fdr-catastrophic.svg",
                "catastrophic"
              )
            }
          >
            Catastrophic
          </button>
        </div>
      </div>

      {/* Right column - Static content */}
      <div className="flex flex-col items-center bg-[#FFFBF2] bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/forest.png')] bg-cover bg-center bg-no-repeat p-6 rounded-md">
        <h2 className="text-xl md:text-2xl font-bold mb-4 tex text-[#EA580B]">
          {texts[currentText].title}
        </h2>
        <div className="whitespace-pre-line text-lg md:text-lg text-black bg-[#FFE6C5] p-6 rounded-md shadow-md">
          {texts[currentText].content}
        </div>
      </div>
    </div>
  );
};

export default Gauge;
