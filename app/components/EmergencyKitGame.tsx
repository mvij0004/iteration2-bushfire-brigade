import React, { useState } from "react";
import DraggableItem from "./DraggableItem";
import CategoryBox from "./CategoryBox";
import Image from "next/image"; // Assuming you're using Next.js, if not replace with img tag

export type CategoryName =
  | "Overnight Bag"
  | "Important Stuff"
  | "Health and Safety"
  | "Communication Gear"
  | "Essentials"
  | "Emergency Contact Info";

const categoryItems: Record<CategoryName, string[]> = {
  "Overnight Bag": [
    "Change of clothes",
    "soap and toothpaste",
    "Toilet paper and tissues",
    "Food that lasts a long time",
  ],
  "Important Stuff": ["Passport", "Photos", "Will and Insurance papers"],
  "Health and Safety": ["Medicines", "First Aid Kit"],
  "Communication Gear": [
    "Mobile phone and charger",
    "Battery-powered radio",
    "Flashlight and extra batteries",
  ],
  Essentials: ["Enough water for everyone", "Woolen blankets"],
  "Emergency Contact Info": ["Doctor’s number", "Local council"],
};

interface Category {
  name: CategoryName;
  items: string[];
}

const initialItems = [
  "Change of clothes",
  "soap and toothpaste",
  "Toilet paper and tissues",
  "Food that lasts a long time",
  "Passport",
  "Photos",
  "Will and Insurance papers",
  "Medicines",
  "First Aid Kit",
  "Mobile phone and charger",
  "Battery-powered radio",
  "Flashlight and extra batteries",
  "Enough water for everyone",
  "Woolen blankets",
  "Doctor’s number",
  "Local council",
];

const categories: Category[] = [
  { name: "Overnight Bag", items: [] },
  { name: "Important Stuff", items: [] },
  { name: "Health and Safety", items: [] },
  { name: "Communication Gear", items: [] },
  { name: "Essentials", items: [] },
  { name: "Emergency Contact Info", items: [] },
];

const EmergencyKitGame: React.FC = () => {
  const [availableItems, setAvailableItems] = useState(initialItems);
  const [kitCategories, setKitCategories] = useState(categories);

  const handleDrop = (item: string, categoryName: CategoryName) => {
    // Check if the item is valid for the category
    if (!categoryItems[categoryName].includes(item)) {
      alert("Incorrect item! Please try again.");
      return; // Do not add the item if it's incorrect
    }

    // Remove item from availableItems and add to category if valid
    setAvailableItems((prevItems) => prevItems.filter((i) => i !== item));
    setKitCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? { ...category, items: [...category.items, item] }
          : category
      )
    );
  };

  const handleRemove = (item: string, categoryName: CategoryName) => {
    // Add item back to availableItems and remove from the category
    setAvailableItems((prevItems) => [...prevItems, item]);
    setKitCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? { ...category, items: category.items.filter((i) => i !== item) }
          : category
      )
    );
  };

  // Check if all items are categorized
  const allItemsCategorized = availableItems.length === 0;

  return (
    <div className="p-12 w-full">
      {/* <h1 className="text-2xl font-bold mb-4">Emergency Kit Packing Game</h1> */}
      <div className="flex flex-col lg:flex-row gap-6 bg-[#FFFBF2] p-4 rounded-lg">
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-2 text-black text-center">
            Items to Pack
          </h2>
          <div className="grid grid-cols-2 gap-4 text-black">
            {availableItems.map((item) => (
              <DraggableItem key={item} item={item} />
            ))}
          </div>
          {/* Display success message and Kangaroo Image when all items are categorized */}
          {allItemsCategorized && (
            <div className="flex flex-col justify-center items-center mt-12">
              <div className="text-2xl font-bold text-black text-center mb-4 bg-[#FFE6C5] p-4 rounded-lg shadow-md">
                You have done a great job!
              </div>
              <Image
                src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kangaroo.png"
                alt="Kangaroo pointing at the card"
                width={200}
                height={200}
                className="object-contain animate-moveSideways"
              />
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-2 text-center text-black">
            Pack into Categories
          </h2>
          <div className="grid grid-cols-2 gap-4 text-black">
            {kitCategories.map((category) => (
              <CategoryBox
                key={category.name}
                category={category}
                onDrop={handleDrop}
                onRemove={handleRemove} // Pass the handleRemove function to CategoryBox
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyKitGame;
