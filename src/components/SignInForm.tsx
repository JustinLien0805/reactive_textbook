import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    navigate("/home");
  };
  const navigate = useNavigate();
  return (
    <div className="flex w-full max-w-lg flex-col items-center justify-center space-y-4 pt-20 sm:w-3/4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center space-y-4"
      >
        <div className="flex h-48 w-full flex-col items-center gap-4 rounded-lg bg-[#412C2B] p-8">
          <input
            type="email"
            placeholder="帳號"
            {...register("email")}
            className="input-bordered input w-full grow border-2 border-[#1E0B12] bg-[#F6E0C1] text-[#1E0B12]"
          />
          <input
            type="password"
            placeholder="密碼"
            {...register("password")}
            className="input-bordered input w-full grow border-2 border-[#1E0B12] bg-[#F6E0C1] text-[#1E0B12]"
          />
        </div>
        <div className="flex w-full gap-4">
          <button
            type="submit"
            className="btn h-16 grow border-4 border-[#A38984] bg-[#261920] text-white"
          >
            登入
          </button>
          <button
            className="btn h-16 grow border-4 border-[#A38984] bg-[#261920] text-white"
            onClick={() => {
              navigate("/signup");
            }}
          >
            註冊
          </button>
        </div>
      </form>
      <button className="w-full text-lg text-[#261920] underline underline-offset-2">
        忘記密碼？
      </button>
    </div>
  );
};

export default SignInForm;
