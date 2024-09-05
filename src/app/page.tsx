"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "Stripe123") {
      router.push('/home')
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[350px] bg-white border border-neutral-300 rounded-lg p-5">
        <h1 className="text-2xl font-bold text-black">Enter password</h1>
        <h3 className="text-sm text-neutral-400">
          Please enter the password to access the portfolio
        </h3>
        <input
          type="password"
          placeholder="Enter your password!"
          onChange={(e) => setPassword(e.target.value)}
          className="border py-2 px-4 border-neutral-300 text-black placeholder:text-neutral-500 placeholder:text-sm rounded-md my-10 w-full"
        />
        <button
          className="w-full rounded-md bg-[#635BFF] py-2 px-4 transition-all duration-200 hover:bg-[#0A2540] text-white"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
