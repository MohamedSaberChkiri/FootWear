"use client";

import React, { useEffect, useState } from "react";
import axios from "axios"; // Assuming you use axios for HTTP requests
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import { useCart } from "@/contexts/CartContext";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoadingButton, setIsLoadingButton] = useState(
    <Button type="submit">Login</Button>
  );
  const { fetchUserCart } = useCart();

  useEffect(() => {
    fetchUserCart();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingButton(
      <Button type="submit" disabled>
        {" "}
        <CircularProgress className="text-white" size={22} />
      </Button>
    );

    try {
      const response = await axios.post(
        "https://foot-wear-server.vercel.app/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("userName", response.data.name);
      localStorage.setItem("token", response.data.token);
      setIsLoadingButton(<Button type="submit">Login</Button>);
      window.location.href = "/";
    } catch (error) {
      setIsLoadingButton(<Button type="submit">Login</Button>);
      setError("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex flex-col items-left justify-center border w-fit p-12 gap-6 mt-[5vh]"
    >
      <div className="w-full flex items-center justify-center">LOGIN</div>
      <div>
        <Input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      {isLoadingButton}
      <div className="flex flex-col">
        <Link href="/register">
          <Button className="bg-transparent hover:bg-transparent text-gray-500 h-fit underline">
            Dont have an Account ?
          </Button>
        </Link>
        <Link href="/forgot_password">
          <Button className="bg-transparent hover:bg-transparent text-gray-500 h-fit underline">
            Forgot Password ?
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
