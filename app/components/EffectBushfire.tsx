import React, { useState } from "react";
import TableauCluster from "./TableauCluster";
import TableauViz from "./TableauViz";
import TableauPictograph from "./TableauPictograph";
import Image from "next/image"; // Assuming you are using Next.js for image optimization

const EffectBushfire: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeViz, setActiveViz] = useState<null | string>(null);
  const [activeTab, setActiveTab] = useState<"visualization" | "description">(
    "visualization"
  );

  const openModal = (viz: string) => {
    setActiveViz(viz);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveViz(null);
    setActiveTab("visualization");
  };

  return (
    <div className="relative py-8 flex flex-col items-center justify-center">
      <div className="relative z-10">
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative w-[400px] h-[400px] bg-[#FFFBF2] rounded-full overflow-visible transform transition-transform duration-300 hover:scale-105">
              <div className="absolute bg-[#FFE6C5] text-black right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:bg-orange-300">
                <button onClick={() => openModal("viz")}>
                  Click to see history
                </button>
              </div>
              <Image
                src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/koala-t.png"
                alt="Koala Tableau Cluster"
                width={200}
                height={200}
                className="object-cover animate-moveSideways"
              />
            </div>

            <div className="relative w-[400px] h-[400px] bg-[#FFFBF2] rounded-full overflow-visible transform transition-transform duration-300 hover:scale-105">
              <div className="absolute bg-[#FFE6C5] text-black right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:bg-orange-300">
                <button onClick={() => openModal("pictograph")}>
                  Click to see school risk
                </button>
              </div>
              <Image
                src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kangaroo.png"
                alt="Koala Tableau Cluster"
                width={270}
                height={270}
                className="object-cover animate-moveSideways"
              />
            </div>

            <div className="relative w-[400px] h-[400px] bg-[#FFFBF2] rounded-full overflow-visible transform transition-transform duration-300 hover:scale-105">
              <div className="absolute bg-[#FFE6C5] text-black right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:bg-orange-300">
                <button onClick={() => openModal("cluster")}>
                  Click to see risk
                </button>
              </div>
              <Image
                src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/wombat.png"
                alt="Koala Tableau Cluster"
                width={220}
                height={220}
                className="object-cover animate-moveSideways"
              />
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 h-3/4 relative">
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-black z-50"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex border-b mb-4">
              <button
                className={`py-2 px-4 ${
                  activeTab === "visualization"
                    ? "border-b-2 border-orange-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("visualization")}
              >
                Visualization
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === "description"
                    ? "border-b-2 border-orange-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
            </div>
            <div className="w-full h-full overflow-auto">
              {activeTab === "visualization" && (
                <>
                  {activeViz === "cluster" && <TableauCluster />}
                  {activeViz === "viz" && <TableauViz />}
                  {activeViz === "pictograph" && <TableauPictograph />}
                </>
              )}
              {activeTab === "description" && (
                <div className="p-4">
                  {activeViz === "cluster" && (
                    <p>
                      This Tableau visualization shows the risk assessment data
                      for various bushfire zones. Explore the data to understand
                      which areas are most at risk and why.
                    </p>
                  )}
                  {activeViz === "viz" && (
                    <p>
                      This Tableau visualization provides a historical overview
                      of bushfire incidents in the region. Examine the data to
                      see trends and patterns over the years.
                    </p>
                  )}
                  {activeViz === "pictograph" && (
                    <p>
                      This Tableau pictograph highlights the risk levels for
                      schools in bushfire-prone areas. Use this information to
                      plan safety measures for vulnerable institutions.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EffectBushfire;
