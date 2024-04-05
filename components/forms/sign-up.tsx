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
    <div className="h-full w-full">
      <div className="grid gap-2 mb-8">
        <h1 className="text-3xl font-bold">Sign up</h1>
        <p className="text-balance text-muted-foreground">
          Enter your information to create an account
        </p>
      </div>

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
                <FormLabel>Username</FormLabel>
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
                <FormLabel>Email</FormLabel>
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
                <FormLabel>Password</FormLabel>
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
          >
            Create an Account
          </Button>
          <Button
            variant="outline"
            className="disabled:opacity-50 disabled:cursor-not-allowed w-full"
            disabled={isSubmitting}
          >
            Sign up with GitHub
          </Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="underline">
              Sign in
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Register;
