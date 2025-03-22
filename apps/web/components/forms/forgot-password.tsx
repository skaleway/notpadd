"use client";

import React, { SyntheticEvent, useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ForgotPaswordClient: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [complete, setComplete] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);

  const { isLoaded, signIn, setActive } = useSignIn();
  // const router = useRouter();

  if (!isLoaded) {
    return null;
  }

  async function create(e: SyntheticEvent) {
    e.preventDefault();
    await signIn
      ?.create({
        strategy: "reset_password_email_code",
        identifier: email,
      })
      .then((_) => {
        setSuccessfulCreation(true);
      })
      .catch((err) => toast.error(err.errors[0].longMessage));
  }

  async function reset(e: SyntheticEvent) {
    e.preventDefault();
    await signIn
      ?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      })
      .then((result) => {
        if (result.status === "needs_second_factor") {
          setSecondFactor(true);
        } else if (result.status === "complete") {
          setComplete(true);

          setActive({ session: result.createdSessionId });

          toast.success("You successfully changed your password");

          setTimeout(() => {
            window.location.reload();

            // router.push("/sign-in");
          }, 2000);
        } else {
          console.log(result);
        }
      })
      .catch((err) => toast.error(err.errors[0].longMessage));
  }

  return (
    <div className="h-full w-full">
      <div className="grid gap-2 mb-8 text-center">
        <h1 className="text-3xl font-bold">Forgot password</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email to recover an account
        </p>
      </div>
      <form
        className="bg-red-500"
        onSubmit={!successfulCreation ? create : reset}
      >
        {!successfulCreation && !complete && (
          <>
            <label htmlFor="email">Please provide an email identifier</label>
            <Input
              // className="custom-input custom-input-parent py-2"
              type="email"
              placeholder="e.g john@doe.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex-between flex-center">
              <Link href="/sign-in" className="hover:underline">
                Back to Sign In
              </Link>
              <Button
                type="submit"
                // disabled={isSubmitting}
                className="bg-zinc-500 text-white py-2 px-4 rounded hover:bg-zinc-600 disabled:cursor-not-allowed"
              >
                Request Code
              </Button>
            </div>
          </>
        )}

        {successfulCreation && !complete && (
          <>
            <label htmlFor="password">New password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Reset password code</label>
            <Input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button
              type="submit"
              // disabled={isSubmitting}
              className="bg-zinc-500 text-white py-2 px-4 rounded hover:bg-zinc-600 disabled:cursor-not-allowed"
            >
              Change Password
            </Button>
          </>
        )}

        {complete &&
          "You successfully changed your password redirecting to signUp...."}
        {secondFactor && "2FA is required, this UI does not handle that"}
      </form>
    </div>
  );
};

export default ForgotPaswordClient;
