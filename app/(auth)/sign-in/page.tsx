import AuthForm from "@/components/forms/auth-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign In to your existing account on notpadd",
};

const Login = () => {
  return <AuthForm formType="Login" />;
};

export default Login;
