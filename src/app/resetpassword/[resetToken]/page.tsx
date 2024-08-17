"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";

function Page() {
  const [message, setMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const [resetToken, setResetToken] = useState("");

  function getLastSegmentFromUrl(url: string) {
    const segments = url.split("/");
    return segments[segments.length - 1] || "";
  }

  useEffect(() => {
    const url = window.location.href;
    const token = getLastSegmentFromUrl(url);
    setResetToken(token);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (newPassword !== newPasswordRepeat) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://foot-wear-server.vercel.app/api/api/resetPassword",
        {
          resetToken,
          newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage(response.data.message);
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
      <Input
        className="w-[300px]"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="New Password"
        required
      />
      <Input
        className="w-[300px]"
        type="password"
        value={newPasswordRepeat}
        onChange={(e) => setNewPasswordRepeat(e.target.value)}
        placeholder="Repeat New Password"
        required
      />
      <Button type="submit">Reset Password</Button>
      <div>{message}</div>
    </form>
  );
}

export default Page;
