import React from "react";
import "./Background.css";

const Background = () => {
  const numRows = 20;
  const numCols = Math.floor(window.innerWidth / 27);

  // Function to randomly color some blocks
  const isGreen = () => Math.random() < 0.01;

  // Generate grid content
  const gridItems = Array.from({ length: numRows * numCols }, (_, index) => (
    <div key={index} className={`w-[100%] h-[100%] border-[1px] border-white ${isGreen() ? "bg-[#AEFF9F]" : ""}`}></div>
  ));

  return (
    <div className="bg-[#F5F6FA] fixed top-0 left-0 w-[100vw] h-full overflow-hidden z-[-1]">
                    <div className="fixed inset-0 bg-gradient-to-b from-transparent from-50% to-[#D6FFD0] to-100%" />
      <div className="grid-wrapper">
        <div className="grid" style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}>
          {gridItems}
        </div>
        <div className="grid" style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}>
          {gridItems}
        </div>
      </div>
    </div>
  );
};

export default Background;
