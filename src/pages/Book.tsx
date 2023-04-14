import { useNavigate } from "react-router-dom";
import titleImage from "../assets/iMagicNationIcon.png";
import activeTab from "../assets/activeTab.png";
import SystemJewel from "../assets/SystemJewel.png";
import UserJewel from "../assets/UserJewel.png";
const Book = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex h-screen flex-col justify-start gap-4 bg-[#411A08]"
        style={{
          backgroundImage: `url(${activeTab})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex w-full items-center bg-[#411A08] p-4">
          <img
            src={titleImage}
            className="mr-auto h-12"
            alt=""
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
        <div className="flex w-full gap-2 px-10">
          <h2 className="mr-auto text-5xl font-black text-[#544231]">
            奶奶的花
          </h2>
          <button className="btn border-4 border-[#EAA916]">Save</button>
          <button
            className="btn border-4 border-[#EAA916]"
            onClick={() => {
              navigate("/home");
            }}
          >
            Back
          </button>
        </div>
        <div className="mx-10 flex gap-8 rounded-lg border-4 border-[#EAA916] bg-[#411A08] p-10">
          <div className="flex-1 rounded-lg bg-[#CCAE7F]">
            <img src="" alt="" />
          </div>
          <div className="flex h-96 flex-1 flex-col gap-4 overflow-y-scroll">
            <div className="flex h-40 w-full flex-shrink-0 gap-4 border-b-2 border-[#EAA916] p-4">
              <img src={SystemJewel} className="h-8 w-8" alt="" />
              <p className="text-xl font-bold">
                清晨的陽光灑落，奶奶在花園裡種花，弟弟也陪著她一起澆水，兩個人看起來好開心
                兩個人看起來好開心 。
              </p>
            </div>
            <div className="flex h-40 w-full flex-shrink-0 gap-4 border-b-2 border-[#EAA916] p-4">
              <img src={UserJewel} className="h-8 w-8" alt="" />
              <p className="text-xl font-bold">
                奶奶為什麼要種花呢？奶奶種了什麼花呢？
              </p>
            </div>
            <div className="flex h-40 w-full flex-shrink-0 gap-4 border-b-2 border-[#EAA916] p-4">
              <img src={SystemJewel} className="h-8 w-8" alt="" />
              <p className="text-xl font-bold">
                清晨的陽光灑落，奶奶在花園裡種花，弟弟也陪著她一起澆水，兩個人看起來好開心
                兩個人看起來好開心 。
              </p>
            </div>
            <div className="flex h-40 w-full flex-shrink-0 gap-4 border-b-2 border-[#EAA916] p-4">
              <img src={UserJewel} className="h-8 w-8" alt="" />
              <p className="text-xl font-bold">
                奶奶為什麼要種花呢？奶奶種了什麼花呢？
              </p>
            </div>
          </div>
        </div>
        <div className="mx-10 flex h-20 items-center rounded-lg border-4 border-[#EAA916] bg-[#411A08] p-2">
          <input type="text" className="h-full flex-1 bg-transparent" />
          <button className="btn border-4 border-[#EAA916]">send</button>
        </div>
      </div>
    </>
  );
};

export default Book;
