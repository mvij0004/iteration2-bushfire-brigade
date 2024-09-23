"use client";

import React from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section>
      <div className="items-center w-full h-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl p-3 text-2xl font-bold tracking-tighter text-black md:text-4xl lg:text-5xl lg:max-w-7xl"></h1>

              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
