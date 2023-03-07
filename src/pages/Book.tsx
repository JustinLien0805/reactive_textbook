import React from "react";
import Navbar from "../components/Navbar";

const Book = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen flex-col items-center px-4 pt-20 pb-10 md:justify-center">
        <div className="flex w-full max-w-6xl">
          <h2 className="mr-auto pb-8 text-3xl font-bold">書名</h2>
          <button className="btn">Save</button>
        </div>
        <div className="flex h-full w-full max-w-6xl flex-col gap-4 sm:h-auto md:flex-row">
          <div className="aspect-square w-full bg-neutral"></div>
          <div className="flex h-full w-full flex-col gap-4">
            <div className="w-ful textarea-bordered textarea textarea-lg flex-1 md:flex-[66%]"></div>
            <input
              type="text"
              placeholder="選擇生成課文"
              className="w-ful input-bordered input flex-1 md:flex-[33%]"
            />
            <button className="btn">生成</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
