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
      <Navigation />
      {/* Hero Section */}
      <div className="relative isolate h-[90vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/recovery.jpeg')] bg-cover bg-center">
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

        {/* Content Overlay */}
        <div className="relative mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Recover with Bushfire Brigade
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

      <Footer />
    </div>
  );
};

export default page;
