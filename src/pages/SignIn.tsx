import titleImage from "../assets/iMagicNationIcon.png";
import SignInForm from "../components/SignInForm";
import background from "../assets/登入註冊頁面背景圖.png";
const SignIn = () => {
  return (
    <div
      className="flex relative h-screen w-screen flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src={titleImage} alt="" className="absolute top-4 scale-75"/>
      <SignInForm />
    </div>
  );
};

export default SignIn;
