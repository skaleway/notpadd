"use client";

import React, { FC } from "react";
import SignUp from "./sign-up";
import SignIn from "./sign-in";

type AuthFormProps = {
  formType: "Register" | "Login";
};

const AuthForm: FC<AuthFormProps> = ({ formType }) => {
  if (formType === "Register") {
    return <SignUp />;
  }

  return <SignIn />;
};

export default AuthForm;
