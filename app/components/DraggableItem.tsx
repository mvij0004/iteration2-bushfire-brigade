import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

interface DraggableItemProps {
  item: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ITEM,
    item: { name: item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={(instance) => {
        if (instance) drag(instance); // Correctly connect the drag functionality to the element
      }}
      className={`p-3 border bg-[#FFE6C5] rounded-md shadow-md text-center cursor-move ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {item}
    </div>
  );
};

export default DraggableItem;
