import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { CategoryName } from "./EmergencyKitGame"; // Import CategoryName type

interface CategoryBoxProps {
  category: {
    name: CategoryName; // Use CategoryName here
    items: string[];
  };
  onDrop: (item: string, categoryName: CategoryName) => void;
  onRemove: (item: string, categoryName: CategoryName) => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  category,
  onDrop,
  onRemove,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop: (item: { name: string }) => onDrop(item.name, category.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={(instance) => {
        if (instance) drop(instance); // Correctly connect the drop functionality to the element
      }}
      className={`p-4 border rounded-md h-48 bg-gray-100 shadow-md ${
        isOver ? "bg-orange-100" : ""
      }`} // Set a fixed height
    >
      <h3 className="font-bold mb-2">{category.name}</h3>
      <div className="overflow-y-auto max-h-32">
        {" "}
        {/* Make the items scrollable */}
        {category.items.length === 0 ? (
          <p className="text-sm text-gray-500">Drop items here</p>
        ) : (
          <ul className="list-disc pl-4">
            {category.items.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item}</span>
                <button
                  className="ml-2 text-sm text-red-500 hover:underline"
                  onClick={() => onRemove(item, category.name)} // Use the correct type for category name
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryBox;
