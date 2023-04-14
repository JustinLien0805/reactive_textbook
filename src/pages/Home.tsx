import { useState } from "react";
import main from "../assets/主頁面背景圖.png";
import { useNavigate } from "react-router-dom";
import continent2 from "../assets/大陸2.png";
const Home = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="relative flex h-screen w-screen"
        style={{
          backgroundImage: `url(${main})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={
            show
              ? "absolute top-0 left-0 flex h-screen w-screen flex-col bg-[#000000]/60"
              : "hidden"
          }
        >
          <img src={continent2} className="top-50 right-50 absolute" />
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            btn
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            navigate("/my-list");
          }}
        >
          list
        </button>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          btn
        </button>
      </div>
    </>
  );
};

export default Home;
