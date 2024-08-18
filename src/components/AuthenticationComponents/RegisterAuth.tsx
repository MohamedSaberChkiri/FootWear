"use client";

import React, { useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoadingButton, setIsLoadingButton] = useState(
    <Button type="submit">Register</Button>
  );

  const [isEightCharacters, setIsEightCharacters] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false);

  const handlePassowrdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    checkPassword(e.target.value);
  };

  const checkPassword = (password: string) => {
    if (password.length >= 8) {
      setIsEightCharacters(true);
    } else {
      setIsEightCharacters(false);
    }

    if (password.match(/[a-z]/)) {
      setIsLowerCase(true);
    } else {
      setIsLowerCase(false);
    }

    if (password.match(/[A-Z]/)) {
      setIsUpperCase(true);
    } else {
      setIsUpperCase(false);
    }

    if (password.match(/[0-9]/)) {
      setIsNumber(true);
    } else {
      setIsNumber(false);
    }

    if (password.match(/[!@#$%^&*]/)) {
      setIsSpecialCharacter(true);
    } else {
      setIsSpecialCharacter(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (
      !isEightCharacters ||
      !isLowerCase ||
      !isUpperCase ||
      !isNumber ||
      !isSpecialCharacter
    ) {
      setError("Password does not meet the requirements");
      return;
    }
    e.preventDefault();
    setIsLoadingButton(
      <Button type="submit" disabled>
        {" "}
        <CircularProgress className="text-white" size={22} />
      </Button>
    );

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://foot-wear-server.vercel.app/api/user/register",
        { username, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsLoadingButton(<Button type="submit">Register</Button>);
      window.location.href = "/login";
    } catch (error) {
      setError("Registration failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto border p-12 flex flex-col items-left my-10 justify-center gap-6 max-w-[400px]"
    >
      <div className="flex items-center justify-center w-full">REGISTER</div>
      <div>
        <Input
          className="w-[300px]"
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <Input
          className="w-[300px]"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Input
          className="w-[300px]"
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePassowrdChange}
        />
      </div>
      <span className="flex flex-col text-sm">
        <ul className="text-gray-400 ml-2">
          <li className={`${isEightCharacters && "text-green-600"}`}>
            At least 8 characters
          </li>
          <li className={`${isLowerCase && "text-green-600"}`}>
            At least 1 lowercase letter
          </li>
          <li className={`${isUpperCase && "text-green-600"}`}>
            At least 1 uppercase letter
          </li>
          <li className={`${isNumber && "text-green-600"}`}>
            At least 1 number
          </li>
          <li className={`${isSpecialCharacter && "text-green-600"}`}>
            At least special character
          </li>
        </ul>
      </span>
      <div>
        <Input
          className="w-[300px]"
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      {isLoadingButton}
      <Link href="/login">
        <Button className="bg-transparent w-full hover:bg-transparent text-gray-500 underline">
          Already have an Account ?
        </Button>
      </Link>
    </form>
  );
};

export default RegistrationForm;
