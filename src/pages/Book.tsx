import { useNavigate } from "react-router-dom";
const Book = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen flex-col justify-start gap-4 bg-[#CCAE7F] p-10">
        <div className="flex w-full gap-2">
          <h2 className="mr-auto text-5xl font-black text-[#544231]">
            奶奶的花
          </h2>
          <button className="btn-secondary btn border-4 border-[#544231]">
            Save
          </button>
          <button
            className="btn-secondary btn border-4 border-[#544231]"
            onClick={() => {
              navigate("/home");
            }}
          >
            Back
          </button>
        </div>
        <div className="flex w-full gap-8 rounded-lg border-4 border-[#544231] bg-secondary p-10">
          <div className="flex-1 rounded-lg bg-[#CCAE7F]">
            <img src="" alt="" />
          </div>
          <div className="flex h-96 flex-1 flex-col gap-4 overflow-y-scroll">
            <div className="h-40 w-full flex-shrink-0 rounded-lg bg-[#F9E5A0]"></div>
            <div className="h-40 w-full flex-shrink-0 rounded-lg bg-[#F9E5A0]"></div>
            <div className="h-40 w-full flex-shrink-0 rounded-lg bg-[#F9E5A0]"></div>
            <div className="h-40 w-full flex-shrink-0 rounded-lg bg-[#F9E5A0]"></div>
          </div>
        </div>
        <div className="flex h-20 w-full items-center rounded-lg border-4 border-[#544231] bg-[#F9E5A0] p-2">
          <input type="text" className="h-full flex-1 bg-transparent" />
          <button className="btn-secondary btn border-4 border-[#544231]">
            send
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
