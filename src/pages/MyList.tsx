import React from "react";
import Book from "../components/Book";
import titleImage from "../assets/iMagicNationIcon.png";
import CategoryRow from "../components/CategoryRow";
import activeTab from "../assets/activeTab.png";

const MyList = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#411A08] pt-10 gap-8">
        <div className="flex items-center px-4">
          <img src={titleImage} className="mr-auto h-12" alt="" />
          <button className="btn">Add</button>
        </div>
        <div
          className="flex w-screen grow flex-col gap-8 p-8"
          style={{
            backgroundImage: `url(${activeTab})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CategoryRow name="我的故事" />
          <CategoryRow name="我的故事" />
          <CategoryRow name="我的故事" />
          <CategoryRow name="我的故事" />
          <CategoryRow name="我的故事" />
        </div>
      </div>
    </>
  );
};

export default MyList;
