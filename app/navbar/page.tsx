import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-black sticky top-0 shadow-lg transform transition-transform duration-300 hover:translate-y-[-2px]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h1 className="text-3xl font-bold text-white">
              Generate Meme
            </h1>
            <ul className="hidden md:flex gap-x-6 text-white">
              {/* Add your menu items here */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
