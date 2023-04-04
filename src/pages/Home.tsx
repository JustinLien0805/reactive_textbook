import main from "../assets/主頁面背景圖.png";
const Home = () => {
  return (
    <>
      <div
        className="flex h-screen w-screen"
        style={{
          backgroundImage: `url(${main})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      </div>
    </>
  );
};

export default Home;
