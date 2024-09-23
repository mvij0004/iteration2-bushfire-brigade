import React, { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Papa from "papaparse"; // For parsing CSV data
import { FeatureCollection, GeoJsonProperties, Point } from "geojson";

interface School {
  Facility_Name: string;
  Fire_Risk_Category_2023_24: string;
  X: string; // Longitude
  Y: string; // Latitude
}

mapboxgl.accessToken =
  "pk.eyJ1IjoicG9vbXNpcmEiLCJhIjoiY2x6ajdzcnEyMG9vMDJ2cHhkbnp4dThjOSJ9.q98baVlbLATw6CGl9IIw_Q";

const BushfireAreaMap = () => {
  const [loading, setLoading] = useState(true); // Loading state for the spinner
  const [schools, setSchools] = useState<School[]>([]); // All schools data
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]); // Filtered schools based on search
  const [searchQuery, setSearchQuery] = useState(""); // Search input value
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map | null>(null); // Map instance
  const [highlightIndex, setHighlightIndex] = useState(-1); // Index of the highlighted school

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: -37.4713, // Latitude for Victoria, Australia
    longitude: 144.7852, // Longitude for Victoria, Australia
    zoom: 6, // Zoom level to show Victoria state
  });

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: "map", // Container ID
      style: "mapbox://styles/mapbox/streets-v11", // Style URL
      center: [viewport.longitude, viewport.latitude], // Starting position [lng, lat]
      zoom: viewport.zoom, // Starting zoom
    });

    // Save map instance
    setMapInstance(map);

    // Add navigation controls (zoom in/out)
    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", () => {
      // Dynamically import pako
      import("pako").then((pako) => {
        // Fetch the compressed GeoJSON file for bushfire polygons
        fetch("/BUSHFIRE_HISTORY_SCARE.geojson.gz") // Ensure the file is correctly named and in the public folder
          .then((response) => response.arrayBuffer()) // Fetch as arrayBuffer since it's compressed
          .then((buffer) => {
            // Decompress the GZIP file
            const decompressed = pako.inflate(new Uint8Array(buffer), {
              to: "string",
            });

            // Parse the decompressed result as JSON
            const geojsonData = JSON.parse(decompressed);

            // Add a source for the bushfire polygons
            map.addSource("bushfire-history", {
              type: "geojson",
              data: geojsonData, // Properly decompressed and parsed GeoJSON data
            });

            // Add a layer to style and display the polygons
            map.addLayer({
              id: "bushfire-polygons",
              type: "fill",
              source: "bushfire-history", // reference the source
              layout: {},
              paint: {
                "fill-color": "#FC923C", // Color of the polygons
                "fill-opacity": 0.5, // Transparency of the polygons
              },
            });

            // Optional: Add borders to the polygons
            map.addLayer({
              id: "bushfire-borders",
              type: "line",
              source: "bushfire-history",
              layout: {},
              paint: {
                "line-color": "#ff4500", // Color of the border
                "line-width": 2, // Width of the border
              },
            });
            // Set loading to false after the polygons have been added
            setLoading(false); // Stop the spinner
          })
          .catch((error) => {
            console.error("Error loading compressed GeoJSON data:", error);
            setLoading(false); // Also hide the spinner on error
          });
      });

      // Fetch school location data from the CSV file
      fetch("/merged_school_bushfire_risk.csv") // Update with the actual path to your CSV
        .then((response) => response.text())
        .then((csvText) => {
          // Parse the CSV using PapaParse
          Papa.parse<School>(csvText, {
            header: true, // Use the first row as headers
            complete: (result) => {
              const parsedSchools = result.data;
              plotSchoolsOnMap(parsedSchools, map);
              setSchools(parsedSchools); // Store all schools data
            },
            error: (error: Error) => {
              console.error("Error parsing CSV data: ", error);
            },
          });
        });
    });

    // Cleanup on unmount
    return () => map.remove();
  }, [viewport]);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = schools.filter(
        (school) =>
          school.Facility_Name && // Check if Facility_Name exists
          school.Facility_Name.toLowerCase().includes(query)
      );
      setFilteredSchools(filtered); // Update the filtered school list
    } else {
      setFilteredSchools([]); // Clear the filtered list when search is empty
    }
    setHighlightIndex(-1); // Reset highlight index
  };

  // Handle key navigation for dropdown list
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      // Move down in the list
      setHighlightIndex((prevIndex) =>
        prevIndex < filteredSchools.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === "ArrowUp") {
      // Move up in the list
      setHighlightIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (event.key === "Enter" && highlightIndex >= 0) {
      // If Enter is pressed, select the highlighted school
      handleSchoolClick(filteredSchools[highlightIndex]);
    }
  };

  // Zoom into a specific school when it's clicked from the search results
  const handleSchoolClick = (school: School) => {
    const longitude = parseFloat(school.X);
    const latitude = parseFloat(school.Y);

    if (!isNaN(longitude) && !isNaN(latitude) && mapInstance) {
      mapInstance.flyTo({
        center: [longitude, latitude],
        zoom: 14, // Zoom in to the selected school
      });
    }
    setFilteredSchools([]); // Hide the dropdown after selection
  };

  const plotSchoolsOnMap = (schools: School[], map: mapboxgl.Map) => {
    // Create a GeoJSON source for the schools data
    const geojsonData: FeatureCollection<Point, GeoJsonProperties> = {
      type: "FeatureCollection",
      features: schools.map((school) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [parseFloat(school.X), parseFloat(school.Y)], // Longitude, Latitude
        },
        properties: {
          name: school.Facility_Name,
          risk: school.Fire_Risk_Category_2023_24,
        },
      })),
    };

    // Add the source to the map
    map.addSource("schools", {
      type: "geojson",
      data: geojsonData,
    });

    // Add a circle layer to represent the schools as circles
    map.addLayer({
      id: "school-circles",
      type: "circle",
      source: "schools",
      paint: {
        "circle-color": "#1E1AB8", // Red color for the circles
        "circle-radius": 6, // Size of the circles
        "circle-stroke-width": 2,
        "circle-stroke-color": "#FFFFFF", // White border around the circles
      },
    });

    // Add popup functionality when clicking on a circle
    map.on("click", "school-circles", (e) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];

        // Cast geometry to Point type since we know it's a Point
        const pointGeometry = feature.geometry as Point;
        const coordinates = pointGeometry.coordinates.slice();
        const description = `
          <div style="color: #111827;">
            <strong>School:</strong> ${feature.properties?.name}<br>
            <strong>Risk:</strong> ${feature.properties?.risk}
          </div>
        `;

        new mapboxgl.Popup()
          .setLngLat(coordinates as [number, number]) // Ensure coordinates are [number, number]
          .setHTML(description)
          .addTo(map);
      }
    });

    // Change the cursor to a pointer when hovering over the circles
    map.on("mouseenter", "school-circles", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    // Change it back to the default when it's not hovering
    map.on("mouseleave", "school-circles", () => {
      map.getCanvas().style.cursor = "";
    });
  };

  return (
    <div className="w-full p-6 flex flex-col lg:flex-row">
      {/* Left Column: Map */}
      <div className="w-full lg:w-2/3 bg-[#FFFBF2] p-6 rounded-lg mb-6 lg:mb-0">
        <div
          style={{ width: "100%", height: "70vh", position: "relative" }}
          className="lg:h-70vh"
        >
          {/* Loading spinner */}
          {loading && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1000, // Make sure the spinner is on top of the map
              }}
            >
              <div className="spinner"></div>
            </div>
          )}

          {/* Map Container */}
          <div id="map" style={{ width: "100%", height: "100%" }}></div>

          {/* Spinner CSS */}
          <style jsx>{`
            .spinner {
              border: 8px solid #f3f3f3; /* Light gray */
              border-top: 8px solid #3498db; /* Blue */
              border-radius: 50%;
              width: 60px;
              height: 60px;
              animation: spin 2s linear infinite;
            }

            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      </div>

      {/* Right Column: Search and Dropdown */}
      <div className="w-full lg:w-1/3 my-auto justify-center p-6 rounded-lg">
        <div className="w-full p-4 bg-[#FFE6C5] rounded-md shadow-md relative">
          <h2 className="text-2xl text-center text-[#EA580B] font-bold mb-4">
            Let’s figure out where we are
          </h2>
          <p className="text-gray-700 text-xl">
            Where are we? – Are we in an area that could have bushfires? Let’s
            find out if our school is at risk.
          </p>
          <ul className="text-gray-700 text-xl my-4">
            <li>CAT 1: Extreme risk</li>
            <li>CAT 2: High risk</li>
            <li>CAT 3: Medium risk</li>
            <li>CAT 4: Low risk</li>
          </ul>
          <input
            type="text"
            placeholder="Search your school here"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown} // Handle keyboard navigation
            className="w-full p-2 mb-4 border text-black rounded-md placeholder-gray-500" // Use Tailwind's placeholder utility
          />

          {/* Dropdown for filtered school list */}
          {searchQuery && (
            <ul className="absolute w-full max-h-40 overflow-y-auto border rounded-md bg-white shadow-md z-10">
              {filteredSchools.map((school, index) => (
                <li
                  key={index}
                  onClick={() => handleSchoolClick(school)}
                  className={`cursor-pointer p-2 mb-2 rounded-md text-gray-700 ${
                    index === highlightIndex ? "bg-orange-200" : ""
                  }`}
                >
                  {school.Facility_Name}
                </li>
              ))}
            </ul>
          )}

          <div className="relative justify-center items-center mt-4 bg-orange-500 p-2 rounded-md shadow-sm">
            <p className="text-center text-white text-xl">
              If your school location is covered by the red shaded area, it
              means your school has been affected by bushfires before. Be
              cautious and follow guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BushfireAreaMap;
