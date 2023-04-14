
import titleImage from "../assets/iMagicNationIcon.png";
import CategoryRow from "../components/CategoryRow";
import activeTab from "../assets/activeTab.png";
import { useNavigate } from "react-router-dom";

const MyList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex min-h-screen flex-col gap-8 bg-[#411A08] pt-10">
        <div className="flex items-center px-4">
          <img
            src={titleImage}
            className="mr-auto h-12"
            alt=""
            onClick={() => {
              navigate("/home");
            }}
          />
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
