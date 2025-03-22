import AuthForm from "@/components/forms/auth-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up to your existing account on notpadd",
};

const Register = () => {
  return <AuthForm formType="Register" />;
};

export default Register;
