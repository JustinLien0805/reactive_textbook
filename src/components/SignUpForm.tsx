import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);
  const navigate = useNavigate();

  return (
    <div className="flex w-full max-w-lg flex-col items-center justify-center space-y-4 sm:w-3/4">
      <h1 className="text-5xl font-bold">註冊</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="input-bordered input w-full"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="input-bordered input w-full "
        />
        <button className="w-full text-right text-sm underline underline-offset-2">
          忘記密碼？
        </button>
        <input type="submit" className="btn mx-4 w-full cursor-pointer" />
      </form>
      <div className="divider text-neutral">OR</div>
      <h2 className="text-sm text-neutral">
        沒有帳號嗎？{" "}
        <button
          className="text-primary underline underline-offset-2"
          onClick={() => navigate("/signin")}
        >
          註冊
        </button>
      </h2>
    </div>
  );
};

export default SignUpForm;
