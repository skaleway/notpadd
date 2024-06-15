"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/validations";
import Link from "next/link";
import { useSignIn } from "@clerk/nextjs";
import { toast } from "sonner";
import Heading from "@/app/(marketing)/_components/heading";
import Or from "./or";
import { OAuthSignIn } from "./oauth-signin";

const SignIn = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const { isLoaded, signIn, setActive } = useSignIn();

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    if (!isLoaded) {
      return null;
    }

    await signIn
      .create({
        identifier: data.email,
        password: data.password,
      })
      .then((result) => {
        if (result.status === "complete") {
          toast.success("Logged in!");
          setActive({ session: result.createdSessionId });

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          console.log(result);
        }
      })
      .catch((err) => toast.error(err.errors[0].longMessage));
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="grid gap-4">
            <Heading
              title="Welcome back"
              description="Sign in to your account"
              isAuth
            />
            <OAuthSignIn />
            <Or />

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-500">Email</FormLabel>
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
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center text-neutral-500">
                      <FormLabel>Password</FormLabel>
                      <Link
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="password"
                        {...field}
                        disabled={isSubmitting}
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" variant="zbtn">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-neutral-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="underline dark:text-neutral-100 text-neutral-700"
            >
              Sign up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
