"use client";

import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import BushfireAreaMap from "../components/BushfireAreaMap";
import TableauViz from "../components/TableauViz";
import DeadpoolBye from "../components/DeadpoolBye";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <div>
        <main className="h-[70vh] w-full bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/home-landing.webp')] bg-center bg-cover bg-no-repeat">
          <Navigation />
          <Hero />
        </main>
        {/* <div className="w-3/4">
        <BushfireAreaMap />
        <TableauViz />
      </div> */}

        <DeadpoolBye />
      </div>
      <Footer />
    </div>
  );
};

export default page;
