"use client";

import React, { FormEvent, useState } from "react";
import { toast } from "sonner";

const FeedbackAuth = () => {
  const [value, setValue] = useState("");
  const [move, setMove] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const defaultValue = "skalingteam";

    console.log(value);

    if (value !== defaultValue) return toast.error("🫣 gotcha try again!");

    setMove(true);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      {move ? (
        <div></div>
      ) : (
        <div className="p-10 max-w-sm w-full rounded border">
          <form className="w-full" onSubmit={handleSubmit}>
            <p>Authenticate</p>
            <input
              type="password"
              placeholder="Password"
              className="border w-full rounded p-2 mt-10"
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackAuth;
