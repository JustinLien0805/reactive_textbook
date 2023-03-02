import React from "react";
import CategoryRow from "../components/CategoryRow";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex overflow-x-hidden px-4">
        <div className="reletive w-screen">
          <div className="absolute top-0 left-0 h-96 w-full bg-neutral"></div>
        </div>
        <div className="mt-96  w-screen space-y-2 py-8">
          <CategoryRow name="Top-10" />
          <CategoryRow name="Top-10" />
          <CategoryRow name="Top-10" />
          <CategoryRow name="Top-10" />
        </div>
      </div>
    </>
  );
};

export default Home;
