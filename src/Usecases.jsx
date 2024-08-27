import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Usecases = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      {/* "Use Cases" Box on the left side */}
      <div className="inline-block px-10 py-1.5 border border-[#0081CA] bg-[#F0FAFF] uppercase font-medium transform -rotate-90  text-nowrap">
        Use Cases
      </div>

      {/* Centered Main Content */}
      <div className="flex flex-col border shadow-custom px-8 py-6 rounded-md text-center">
        <div className="text-xl">Dynamic Policy Adjustments</div>
        <div className="flex justify-end text-[#0081CA]">
          <BsArrowRight size={23} />
        </div>
      </div>

      {/* Arrow on the right side */}
      <div className="border-2 rounded-full p-2 text-[#0081CA] border-[#0081CA]">
        <BsArrowRight size={24} />
      </div>
    </div>
  );
};

export default Usecases;
