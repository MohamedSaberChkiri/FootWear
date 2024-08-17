"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function ResetPassAuth() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoadingButton, setIsLoadingButton] = useState(
    <Button type="submit">Reset Password</Button>
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoadingButton(
      <Button type="submit" disabled>
        {" "}
        <CircularProgress className="text-white" size={22} />
      </Button>
    );
    try {
      const response = await axios.post(
        "https://foot-wear-server.vercel.app/api/forgotPassword",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage(response.data.message);
      setIsLoadingButton(<Button type="submit">Reset Password</Button>);
      window.location.href = "/login";
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto border flex flex-col items-left justify-center w-fit gap-6 p-12 mt-12"
    >
      <p className=" w-full text-xl flex items-center justify-center">
        RESET PASSWORD
      </p>
      <Input
        className="w-[300px]"
        value={email}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      ></Input>
      {isLoadingButton}
      <div> {message} </div>
    </form>
  );
}

export default ResetPassAuth;
