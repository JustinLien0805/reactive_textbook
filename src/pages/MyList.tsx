import React from "react";
import Book from "../components/Book";
import Navbar from "../components/Navbar";

const MyList = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-4 pt-20">
        <div className="flex">
          <h2 className="pb-8 text-3xl font-bold mr-auto">我的檔案</h2>
          <button className="btn">Add</button>
        </div>
        <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
          <Book name="Chinese" />
          <Book name="English" />
          <Book name="Math" />
          <Book name="English" />
          <Book name="Chinese" />
          <Book name="English" />
          <Book name="Chinese" />
          <Book name="English" />
        </div>
      </div>
    </>
  );
};

export default MyList;
