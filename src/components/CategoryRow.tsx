import StorybookIcon from "../assets/StorybookIcon.png";
type CategoryRowProps = {
  name: string;
};

const CategoryRow = ({ name }: CategoryRowProps) => {
  return (
    <div className="w-full rounded-lg bg-[#411A08] p-4 text-white border-2 border-[#EAA916]">
      <h2>{name}</h2>
      <div className="flex items-center gap-4 overflow-x-scroll">
        <img src={StorybookIcon} alt="" className="h-20" />
        <img src={StorybookIcon} alt="" className="h-20" />
        <img src={StorybookIcon} alt="" className="h-20" />
        <img src={StorybookIcon} alt="" className="h-20" />
        <img src={StorybookIcon} alt="" className="h-20" />
        <img src={StorybookIcon} alt="" className="h-20" />
        <img src={StorybookIcon} alt="" className="h-20" />
        <img src={StorybookIcon} alt="" className="h-20" />
        <img src={StorybookIcon} alt="" className="h-20" />
        <img src={StorybookIcon} alt="" className="h-20" />
      </div>
    </div>
  );
};

export default CategoryRow;
