"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/lib/validations";
import OTP from "@/components/forms/otp";
import { toast } from "sonner";
import { OAuthSignUp } from "./oauth-signup";
import Heading from "@/app/(marketing)/_components/heading";
import Or from "./or";

const Register = () => {
  const { isLoaded, signUp } = useSignUp();
  const [verifying, setVerifying] = useState(false);
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const {
    formState: { isSubmitting },
    getValues,
  } = form;

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    if (!isLoaded) return;

    const { email, password, username } = data;

    const newName = username.split(" ").join("");

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
        username: newName,
      });
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifying(true);
    } catch (err: any) {
      return toast.error(err.errors[0].message);
    }
  }

  if (verifying) return <OTP email={getValues().email} />;

  return (
    <div className="w-full ">
      <Heading title="Get started" description="Create a new account" isAuth />
      <OAuthSignUp />

      <div className="mb-5" />
      <Or />
      <div className="mb-5" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flexcol gap-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-500">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="bossadizenith"
                    {...field}
                    disabled={isSubmitting}
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-500">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="me@gmail.com"
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-500">Password</FormLabel>
                <FormControl>
                  <Input
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                    type="password"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="disabled:opacity-50 disabled:cursor-not-allowed w-full"
            disabled={isSubmitting}
            variant="zbtn"
          >
            Create an Account
          </Button>
          <div className="mt-4 text-center text-sm text-neutral-500">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="underline dark:text-neutral-100 text-neutral-700"
            >
              Sign in
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Register;
