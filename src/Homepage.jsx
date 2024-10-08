import React, { useState } from "react";
import sectors from "./data/sector_data.json";

const CurvedLineDown = () => {
  const radius = 180; // radius of the circle
  const centerX = radius; // center of the circle on x-axis
  const centerY = radius; // center of the circle on y-axis

  // Define the fixed positions for the three dots along the curve
  const fixedAngles = [
    Math.PI, // Leftmost position (180°)
    (3 * Math.PI) / 4, // Middle position (135°)
    Math.PI / 2, // Rightmost position (90°)
  ];

  // Text data for the dots
  const allTexts = [
    "Dot 1 (180°)",
    "Dot 2 (135°)",
    "Dot 3 (90°)",
    "Dot 4 (45°)",
    "Dot 5 (0°)",
    "Dot 6 (-45°)",
    "Dot 7 (-90°)",
    "Dot 8 (-135°)",
    "Dot 9 (-180°)",
    "Dot 10 (-225°)",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTouchStart = (e) => {
    if (isAnimating) return; // Prevent interaction during animation
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX === null || isAnimating) return;

    const deltaX = e.touches[0].clientX - startX;

    if (deltaX > 50) {
      handleScroll("prev");
      setStartX(e.touches[0].clientX); // Reset startX to the new position
    } else if (deltaX < -50) {
      handleScroll("next");
      setStartX(e.touches[0].clientX); // Reset startX to the new position
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  const handleScroll = (direction) => {
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        direction === "next"
          ? (prevIndex + 1) % allTexts.length
          : (prevIndex - 1 + allTexts.length) % allTexts.length
      );
      setIsAnimating(false);
    }, 500); // Match this duration with the CSS transition duration
  };

  return (
    <div
      className="relative min-h-screen bg-gray-100 flex justify-end items-end select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div>
        <img src="/circle.svg" alt="" className="w-40" />
      </div>

      <div className="absolute">
        <div className="relative w-60">
          <div>
            <img src="/circle2.svg" alt="" className="w-60" />
          </div>
          {fixedAngles.map((angle, index) => {
            const newAngle = angle + (isAnimating ? Math.PI / 4 : 0); // Adjust angle during animation
            const x = centerX + radius * Math.cos(newAngle);
            const y = centerY - radius * Math.sin(newAngle);

            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out`}
                style={{ left: `${x}px`, top: `${y}px` }}
              >
                <div className="relative w-8 h-8 bg-blue-500 rounded-full">
                  <div className="absolute right-full mr-4 text-black text-sm w-32 text-right">
                    {allTexts[(currentIndex + index) % allTexts.length]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurvedLineDown;
