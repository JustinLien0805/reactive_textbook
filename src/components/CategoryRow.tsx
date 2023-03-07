import { useNavigate } from "react-router-dom";
type CategoryRowProps = {
  name: string;
};

const CategoryRow = ({ name }: CategoryRowProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-screen flex-col">
      <h2>{name}</h2>
      <div className="flex w-screen space-x-4 overflow-x-auto">
        <div
          className="aspect-video h-24 flex-shrink-0 bg-neutral cursor-pointer"
          onClick={() => {
            navigate("/book");
          }}
        ></div>
        <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
        <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
        <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
        <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
        <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
        <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
        <div className="aspect-video h-24 flex-shrink-0 bg-neutral"></div>
      </div>
    </div>
  );
};

export default CategoryRow;
