"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleClick = () => {
    alert("Button clicked!");
    // Or do any other logic here
  };

  return (
    <div className="font-gasoek bg-yellow-100 text-center py-20 h-full flex flex-col items-center justify-center cursor-cat actice:cursor-cell focus:cursor-cell">
      <h1 className=" font-bold text-yellow-800 text-9xl cursor-paw-hover">
        Gats Patraix
      </h1>
      <div className="flex justify-center mt-32 space-x-8">
        <Button
          className="text-6xl text-red-600 font-bold cursor-cat-hover"
          onClick={handleClick}
        >
          Adoption
        </Button>
        <button
          className="text-6xl text-green-600 font-bold cursor-cat-walking-hover"
          onClick={handleClick}
        >
          Fostering
        </button>
        <button className="text-6xl text-blue-600 font-bold cursor-cat-hover">
          About
        </button>
        <button className="text-6xl text-purple-600 font-bold cursor-cat-walking-hover">
          Cats
        </button>
        <Button onClick={handleClick}>Test</Button>
      </div>
    </div>
  );
};

export default Hero;
