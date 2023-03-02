import React from "react";

type BookProps = {
  name: string;
};
const Book = ({ name }: BookProps) => {
  return (
    <div className="col-span-1 flex aspect-square cursor-pointer flex-col items-center justify-center">
      <div className="h-full w-full bg-neutral"></div>
      <h3>{name}</h3>
    </div>
  );
};

export default Book;
