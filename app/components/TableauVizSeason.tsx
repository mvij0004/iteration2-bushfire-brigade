import React, { useEffect, useRef } from "react";
import Image from "next/image";

const TableauVizSeason: React.FC = () => {
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = vizRef.current;
    const vizElement = divElement?.getElementsByTagName("object")[0];

    if (divElement && vizElement) {
      const resizeViz = () => {
        vizElement.style.width = "100%";
        vizElement.style.height = `${divElement.clientWidth * 0.75}px`;
      };

      resizeViz();
      window.addEventListener("resize", resizeViz);

      const scriptElement = document.createElement("script");
      scriptElement.src =
        "https://public.tableau.com/javascripts/api/viz_v1.js";
      vizElement.parentNode?.insertBefore(scriptElement, vizElement);

      return () => window.removeEventListener("resize", resizeViz);
    }
  }, []);

  return (
    <div
      ref={vizRef}
      className="tableauPlaceholder w-full" // Ensure full height to fit the container
      id="viz1725915259368"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <Image
            alt="Dashboard 1"
            src="https://public.tableau.com/static/images/Bu/Bushfire_Brigade_Season/Dashboard1/1_rss.png"
            style={{ border: "none" }}
            layout="responsive"
            width={1000}
            height={827}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="Bushfire_Brigade_Season/Dashboard1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/Bu/Bushfire_Brigade_Season/Dashboard1/1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
        <param name="filter" value="publish=yes" />
      </object>
    </div>
  );
};

export default TableauVizSeason;
